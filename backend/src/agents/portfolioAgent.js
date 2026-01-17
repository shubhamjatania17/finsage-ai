import { runGemini } from "../services/geminiService.js";

export async function portfolioAgent(portfolio, memory) {
  return runGemini(
    "You are a value investor (Buffett, Graham).",
    JSON.stringify({ portfolio, memory })
  );
}
