import express from "express";
import { chatWithMogul } from "../agents/chatAgent.js";

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
