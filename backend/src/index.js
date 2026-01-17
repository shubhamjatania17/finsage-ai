import "dotenv/config";
import express from "express";
import cors from "cors";
import expensesRouter from "./routes/expenses.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/expenses", expensesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
