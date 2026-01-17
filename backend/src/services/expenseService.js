import { db } from "./firebaseService.js";

/**
 * Get or create default expense sheet
 */
export async function getOrCreateSheet(sheetId, uid) {
  const ref = db.collection("expenseSheets").doc(sheetId);
  const snap = await ref.get();

  if (!snap.exists) {
    await ref.set({
      uid,
      createdAt: new Date(),
      transactions: [],
    });
  }

  return ref;
}

/**
 * Create a new sheet explicitly (optional)
 */
export async function createSheet({ uid, name }) {
  const sheetId = `${uid}-${name || "default"}`;
  const ref = db.collection("expenseSheets").doc(sheetId);

  await ref.set({
    uid,
    createdAt: new Date(),
    transactions: [],
  });

  return { sheetId };
}

/**
 * Add income or expense
 */
export async function addTransaction({
  sheetId,
  type,
  amount,
  category,
  note,
  date,
}) {
  const ref = db.collection("expenseSheets").doc(sheetId);
  const snap = await ref.get();

  if (!snap.exists) {
    throw new Error("Expense sheet not found");
  }

  const data = snap.data();

  data.transactions.push({
    type,
    amount: Number(amount),
    category,
    note: note || "",
    date: date || new Date().toISOString(),
  });

  await ref.update({ transactions: data.transactions });
}

/**
 * Analyze expenses (NO Gemini yet, pure logic)
 */
export async function analyzeExpenses(sheetId) {
  const ref = db.collection("expenseSheets").doc(sheetId);
  let snap = await ref.get();

  // 🔥 AUTO-CREATE SHEET IF MISSING
  if (!snap.exists) {
    await ref.set({
      transactions: [],
      createdAt: new Date(),
    });

    snap = await ref.get();
  }

  const { transactions } = snap.data();

  const totals = {};
  let totalExpense = 0;

  for (const t of transactions) {
    if (t.type === "expense") {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
      totalExpense += t.amount;
    }
  }

  const recommendations = [];

  if (totalExpense === 0) {
    recommendations.push(
      "No expenses yet. Start adding expenses to unlock insights."
    );
  } else {
    for (const [category, value] of Object.entries(totals)) {
      if (value > totalExpense * 0.3) {
        recommendations.push(
          `High spending detected in ${category}. Consider reducing it by 10–20%.`
        );
      }
    }
  }

  return {
    totals,
    totalExpense,
    recommendations,
  };
}

