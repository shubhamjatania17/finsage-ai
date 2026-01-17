export async function createLesson({ mogul, difficulty, memory }) {
  const prompt = `
You are a financial mentor inspired by ${mogul}.

Difficulty: ${difficulty}

User memory:
${JSON.stringify(memory)}

Create:
- Title
- Short quote (style of ${mogul})
- Clear explanation
- Practical takeaway
`;

  // Gemini call here
}
