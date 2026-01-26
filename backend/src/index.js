import "dotenv/config";
import express from "express";
import cors from "cors";
import expensesRoutes from "./routes/expenses.js";
import stockRoutes from "./routes/stocks.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/expenses", expensesRoutes);
app.use("/stocks", stockRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
