import { runGemini } from "../services/geminiService.js";

export async function lessonAgent(topic) {
  return runGemini(
    "Teach finance as a Duolingo-style micro lesson.",
    topic
  );
}
