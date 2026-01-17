import express from "express";
import { chatAgent } from "../agents/chatAgent.js";
import { getLessonMemory } from "../services/memoryService.js";

const router = express.Router();

router.post("/mogul", async (req, res) => {
  try {
    const { mogul, message } = req.body;

    const reply = await chatWithMogul({
      mogul,
      message,
    });

    res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err.message);
    res.status(500).json({
      error: err.message,
    });
  }
});

export default router;
