import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: process.env.GEMINI_MODEL || "gemini-1.5-flash",
});

/**
 * Core Gemini call used everywhere
 */
export async function callGemini(prompt, options = {}) {
  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: options.temperature ?? 0.6,
        maxOutputTokens: options.maxTokens ?? 600,
      },
    });

    return result.response.text();
  } catch (err) {
    console.error("Gemini error:", err.message);
    throw new Error("Gemini generation failed");
  }
}
