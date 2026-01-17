import express from "express";
import { chatAgent } from "../agents/chatAgent.js";
import { getLessonMemory } from "../services/memoryService.js";

const router = express.Router();

router.post("/mogul", async (req, res) => {
  try {
    const { uid, mogul, message, context } = req.body;
    const memory = await getLessonMemory(uid);

    const reply = await chatAgent({
      mogul,
      message,
      memory,
      context,
    });

    res.json({ message: reply });
  } catch (e) {
    res.status(500).json({ message: "AI unavailable right now." });
  }
});

export default router;
