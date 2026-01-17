import { callGemini } from "../services/geminiService.js";

export async function summarizeForMemory(insight, type) {
  return callGemini(
    "Condense into long-term factual memory. No advice.",
    `Type: ${type}\nInsight: ${insight}`
  );
}
