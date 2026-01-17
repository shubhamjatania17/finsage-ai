import express from "express";
import {
  createSheet,
  addTransaction,
  analyzeExpenses,
} from "../services/expenseService.js";

const router = express.Router();

router.post("/sheet", async (req, res) => {
  const sheet = await createSheet(req.body);
  res.json(sheet);
});

router.post("/transaction", async (req, res) => {
  await addTransaction(req.body);
  res.json({ success: true });
});

router.get("/:sheetId/analyze", async (req, res) => {
  try {
    console.log("Expenses analyze hit:", req.params.sheetId);

    const result = await analyzeExpenses(req.params.sheetId);
    res.json(result);
  } catch (err) {
    console.error("Analyze error:", err.message);
    res.status(500).json({
      totals: {},
      totalExpense: 0,
      recommendations: ["Unable to load expenses right now."],
    });
  }
});

export default router;
