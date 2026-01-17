import express from "express";
import {
  createSheet,
  addTransaction,
  getSheetData,
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
    const analysis = await analyzeExpenses(req.params.sheetId);

    // Always return something
    res.json(
      analysis || {
        totals: {},
        totalExpense: 0,
        recommendations: ["Start adding expenses to see insights."],
      }
    );
  } catch (err) {
    console.error("Expense analyze error:", err);
    res.status(500).json({
      totals: {},
      totalExpense: 0,
      recommendations: ["Unable to analyze expenses right now."],
    });
  }
});
export default router;