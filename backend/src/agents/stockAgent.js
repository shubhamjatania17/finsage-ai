import { runGemini } from "../services/geminiService.js";

export async function analyzeStock({ stockName, reportText }) {
  const prompt = `
You are a strict value investor inspired by Benjamin Graham and Warren Buffett.

Analyze the stock: "${stockName}"

If financial report text is provided, use it. Otherwise, reason conservatively.

Financial Report (if any):
${reportText || "Not provided"}

Your response MUST be structured EXACTLY as:

- Company Overview
- Current Market Price (CMP): (estimate or say unknown)
- P/E Ratio: (estimate or say unknown)
- Dividend Details
- Earnings & Growth Signals
- Intrinsic Value (explain assumptions)
- Margin of Safety
- Final Verdict: Buy / Hold / Avoid
- Reasoning (clear, practical, no AI language)

Be conservative. Avoid hype. Do NOT say you are an AI.
`;

  const response = await runGemini(prompt);

  return {
    stock: stockName,
    analysis: response,
  };
}
