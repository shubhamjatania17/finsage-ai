import React, { useEffect, useState } from "react";
import ExpenseChart from "../components/ExpenseChart";
import { getExpenseAnalysis } from "../services/api";

export default function Expenses() {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    getExpenseAnalysis("demo-sheet-id").then(setAnalysis);
  }, []);

  if (!analysis) return <p>Loading expenses…</p>;

  return (
    <div>
      <h1>Expense Sheet</h1>

      <div className="grid">
        <div className="card">
          <h3>Total Expense</h3>
          <div className="stat">₹{analysis.totalExpense}</div>
        </div>

        <div className="card">
          <ExpenseChart data={analysis.totals} />
        </div>
      </div>

      <div className="card mt-3">
        <h3>AI Recommendations</h3>
        <ul>
          {analysis.recommendations.map((r, i) => (
            <li key={i}>💡 {r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
