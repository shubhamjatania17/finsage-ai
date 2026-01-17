import React, { useEffect, useState } from "react";
import ExpenseChart from "../components/ExpenseChart";
import { getExpenseAnalysis } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Expenses() {
  const { user } = useAuth();

  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const sheetId = `${user.uid}-default`; // TEMP default

    getExpenseAnalysis(sheetId)
      .then(setAnalysis)
      .catch((err) => {
        console.error("Expense error:", err);
        setError("Unable to load expenses right now.");
      });
  }, [user]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!analysis) {
    return <p>Loading expenses…</p>;
  }

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
