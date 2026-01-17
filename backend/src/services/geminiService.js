import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function runGemini(system, input) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: system
  });

  const result = await model.generateContent(input);
  return result.response.text();
}
