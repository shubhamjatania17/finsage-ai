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

router.get("/:sheetId", async (req, res) => {
  const data = await getSheetData(req.params.sheetId);
  res.json(data);
});

router.get("/:sheetId/analyze", async (req, res) => {
  const analysis = await analyzeExpenses(req.params.sheetId);
  res.json(analysis);
});

export default router;
