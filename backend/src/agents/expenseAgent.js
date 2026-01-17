import { runGemini } from "../services/geminiService.js";

export async function expenseAgent(expenses, memory) {
  return runGemini(
    "Analyze expenses and give 3 practical tips.",
    JSON.stringify({ expenses, memory })
  );
}
