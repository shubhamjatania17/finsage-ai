import { db } from "./firebaseService.js";

/**
 * Create a new expense sheet
 */
export async function createSheet({ uid, name }) {
  const sheetId = `${uid}-default`;

  const ref = db.collection("expenseSheets").doc(sheetId);
  const snap = await ref.get();

  if (!snap.exists) {
    await ref.set({
      uid,
      name: name || "Default Sheet",
      transactions: [],
      createdAt: new Date(),
    });
  }

  return { sheetId };
}

/**
 * Add income or expense transaction
 */
export async function addTransaction({
  sheetId,
  type, // "income" | "expense"
  amount,
  category,
  note,
  date,
}) {
  if (!sheetId || !type || !amount) {
    throw new Error("Missing required transaction fields");
  }

  const ref = db.collection("expenseSheets").doc(sheetId);
  const snap = await ref.get();

  // Auto-create sheet if missing
  if (!snap.exists) {
    await ref.set({
      transactions: [],
      createdAt: new Date(),
    });
  }

  const transaction = {
    type,
    amount: Number(amount),
    category: category || (type === "income" ? "Income" : "Other"),
    note: note || "",
    date: date ? new Date(date) : new Date(),
  };

  await ref.update({
    transactions: db.constructor.FieldValue.arrayUnion(transaction),
  });

  return transaction;
}

/**
 * Analyze expenses & income (used by dashboard + expenses page)
 */
export async function analyzeExpenses(sheetId) {
  const ref = db.collection("expenseSheets").doc(sheetId);
  let snap = await ref.get();

  // 🔥 Auto-create sheet if missing (prevents crashes)
  if (!snap.exists) {
    await ref.set({
      transactions: [],
      createdAt: new Date(),
    });
    snap = await ref.get();
  }

  const { transactions = [] } = snap.data();

  let totalExpense = 0;
  let totalIncome = 0;
  const totals = {};

  for (const t of transactions) {
    if (t.type === "expense") {
      totalExpense += t.amount;
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    }

    if (t.type === "income") {
      totalIncome += t.amount;
    }
  }

  // 🔮 Simple rule-based recommendations (Gemini can enhance later)
  const recommendations = [];

  if (totalExpense === 0) {
    recommendations.push(
      "No expenses recorded yet. Start tracking to unlock insights."
    );
  } else {
    for (const [category, value] of Object.entries(totals)) {
      if (value > totalExpense * 0.3) {
        recommendations.push(
          `High spending in ${category}. Consider reducing it by 10–20%.`
        );
      }
    }

    if (totalIncome > 0 && totalExpense > totalIncome) {
      recommendations.push(
        "Your expenses exceed your income. Review discretionary spending."
      );
    }
  }

  return {
    totals,          // category breakdown
    totalExpense,   // total expenses
    totalIncome,    // total income
    recommendations,
  };
}
