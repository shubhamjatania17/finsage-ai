import { callGemini } from "../services/geminiService.js";

export async function analyzePortfolio(portfolio) {
  const prompt = `
You are a value investing expert inspired by Warren Buffett.

User portfolio:
${JSON.stringify(portfolio)}

Analyze:
1. Diversification
2. Risk exposure
3. Long-term improvements

Return JSON only:
{
  "summary": "",
  "suggestions": []
}
`;

  const raw = await callGemini(prompt, {
    temperature: 0.5,
    maxTokens: 500,
  });

  return JSON.parse(raw);
}
