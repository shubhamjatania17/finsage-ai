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
  res.json({
    totals: {
      Food: 0,
      Transport: 0,
      Shopping: 0,
    },
    totalExpense: 0,
    recommendations: [
      "Add expenses to unlock AI insights.",
      "Track food spending daily.",
    ],
  });
});
export default router;