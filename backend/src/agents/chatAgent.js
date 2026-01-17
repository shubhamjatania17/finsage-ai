import { callGemini } from "../services/geminiService.js";

export async function chatAgent({
  mogul,
  message,
  memory,
  context,
}) {
  const prompt = `
You are ${mogul}, acting as a calm, long-term financial mentor.

User memory:
${JSON.stringify(memory)}

Context (current page data):
${JSON.stringify(context)}

Rules:
- No hype
- No slang
- Practical advice
- Think long-term

User says:
"${message}"
`;

  return await callGemini(prompt, { temperature: 0.7 });
}
