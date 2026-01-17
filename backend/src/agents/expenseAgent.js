import { callGemini } from "../services/geminiService.js";

export async function expenseAgent(transactions) {
  const prompt = `
You are a personal finance coach.

User expenses:
${JSON.stringify(transactions)}

Analyze:
1. Top overspending categories
2. Where money can be cut
3. How much to redirect to savings/investments

Return JSON only:
{
  "summary": "",
  "recommendations": []
}
`;

  const raw = await callGemini(prompt, { temperature: 0.6 });
  return JSON.parse(raw);
}
