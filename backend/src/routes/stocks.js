import express from "express";
import { analyzeStock } from "../agents/stockAgent.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const { stockName, reportText } = req.body;

    if (!stockName) {
      return res.status(400).json({ error: "Stock name is required" });
    }

    const analysis = await analyzeStock({ stockName, reportText });
    res.json(analysis);
  } catch (err) {
    console.error("Stock analysis error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
