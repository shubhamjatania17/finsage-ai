import { callGemini } from "../services/geminiService.js";

export async function generateQuizAgent({ lesson, difficulty }) {
  const prompt = `
Create a 3-question MCQ quiz based on this lesson:
${lesson}

Difficulty: ${difficulty}

Return JSON only:
{
  "questions": [
    {
      "question": "",
      "options": [
        { "text": "", "correct": false }
      ]
    }
  ]
}
`;

  const raw = await callGemini(prompt, { temperature: 0.4 });
  return JSON.parse(raw);
}
