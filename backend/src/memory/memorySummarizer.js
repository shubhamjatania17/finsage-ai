import { runGemini } from "../services/geminiService.js";

export async function summarizeForMemory(insight, type) {
  return runGemini(
    "Condense into long-term factual memory. No advice.",
    `Type: ${type}\nInsight: ${insight}`
  );
}
