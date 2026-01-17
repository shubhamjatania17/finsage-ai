import "dotenv/config";
import express from "express";
import cors from "cors";
import expensesRouter from "./routes/expenses.js";
import chatRouter from "./routes/chat.js";
import analyzeRouter from "./routes/analyze.js";


const app = express();

app.use(cors());
app.use(express.json());

// 🔥 THIS LINE IS REQUIRED
app.use("/expenses", expensesRouter);
app.use("/chat", chatRouter);
app.use("/analyze", analyzeRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
