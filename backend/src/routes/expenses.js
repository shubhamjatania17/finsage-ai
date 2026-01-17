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
  console.log("Expenses analyze hit:", req.params.sheetId);

  res.json({
    totals: {
      Food: 1200,
      Transport: 600,
      Shopping: 900,
    },
    totalExpense: 2700,
    recommendations: [
      "Reduce food delivery by 20%",
      "Use public transport twice a week",
    ],
  });
});

export default router;