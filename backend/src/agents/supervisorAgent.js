import { expenseAgent } from "./expenseAgent.js";
import { lessonAgent } from "./lessonAgent.js";
import { getUserMemory, saveUserMemory } from "../memory/memoryService.js";
import { summarizeForMemory } from "../memory/memorySummarizer.js";

export async function supervisorAgent(userId, payload) {
  const memory = await getUserMemory(userId);
  const result = {};

  if (payload.expenses) {
    const insight = await expenseAgent(payload.expenses, memory);
    result.expenseInsight = insight;
    await saveUserMemory(userId, {
      spendingBehavior: await summarizeForMemory(insight, "spending")
    });
  }
  
  if (payload.lesson) {
    result.lesson = await lessonAgent(payload.lesson);
  }

  return result;
}
