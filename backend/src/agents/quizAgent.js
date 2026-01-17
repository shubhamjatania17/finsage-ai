export async function generateQuiz({ lesson, difficulty }) {
  const prompt = `
Create a 3-question MCQ quiz based on this lesson:
${lesson}
Difficulty: ${difficulty}
Return JSON only.
`;
}
