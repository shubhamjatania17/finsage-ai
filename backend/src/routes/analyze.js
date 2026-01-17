import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { supervisorAgent } from "../agents/supervisorAgent.js";

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  const result = await supervisorAgent(req.user.uid, req.body);
  res.json(result);
});

export default router;
