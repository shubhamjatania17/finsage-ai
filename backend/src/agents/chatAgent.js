import { runGemini } from "../services/geminiService.js";

export async function chatWithMogul({ mogul, message, context }) {
  if (!mogul || !message) {
    throw new Error("Missing mogul or message");
  }

  const prompt = `
You are ${mogul}, one of the greatest financial thinkers.

Speak ONLY in the style, tone, and philosophy of ${mogul}.
Be direct, opinionated, and practical.
Avoid generic AI language.
Do NOT say you are an AI.

User question:
"${message}"

Context (if any):
${context || "None"}

Answer:
`;

  const response = await runGemini(prompt);

  console.log("🧠 Gemini reply:", response);

  return response;
}
