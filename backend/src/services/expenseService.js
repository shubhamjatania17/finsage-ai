import { db } from "./firebaseService.js";
import { expenseAgent } from "../agents/expenseAgent.js";

export async function createSheet({ uid, name }) {
  const ref = db.collection("expenseSheets").doc();
  const sheet = {
    uid,
    name,
    createdAt: new Date(),
    totalIncome: 0,
    totalExpense: 0,
  };
  await ref.set(sheet);
  return { id: ref.id, ...sheet };
}

export async function addTransaction(tx) {
  await db.collection("transactions").add(tx);
}

export async function getSheetData(sheetId) {
  const txs = await db
    .collection("transactions")
    .where("sheetId", "==", sheetId)
    .get();

  return txs.docs.map((d) => d.data());
}

export async function getOrCreateExpenseSheet(sheetId) {
  const ref = db.collection("expenses").doc(sheetId);
  const snap = await ref.get();

  if (!snap.exists) {
    await ref.set({
      transactions: [],
      createdAt: new Date(),
    });
  }

  return ref;
}

export async function analyzeExpenses(sheetId) {
  const txs = await getSheetData(sheetId);
  return expenseAgent(txs);
}
