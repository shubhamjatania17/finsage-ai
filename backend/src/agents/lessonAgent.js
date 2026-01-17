import { callGemini } from "../services/geminiService.js";

export async function lessonAgent({
  mogul,
  difficulty,
  memory,
}) {
  const prompt = `
You are a financial teacher inspired by ${mogul}.

Difficulty: ${difficulty}

User learning memory:
${JSON.stringify(memory)}

Create a lesson with:
1. Title
2. Quote (style of ${mogul})
3. Explanation (simple, practical)
4. Key takeaway

Return JSON only:
{
  "title": "",
  "quote": "",
  "explanation": "",
  "takeaway": ""
}
`;

  const raw = await callGemini(prompt, { temperature: 0.5 });

  return JSON.parse(raw);
}