import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseChart from "../components/ExpenseChart";
import { getExpenseAnalysis } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Expenses() {
  const { user } = useAuth();
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const load = async () => {
    if (!user) return;
    try {
      const data = await getExpenseAnalysis(`${user.uid}-default`);
      setAnalysis(data);
      setError(null);
    } catch {
      setError("Unable to load expenses.");
    }
  };

  useEffect(() => {
    load();
  }, [user]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!analysis) return <p>Loading expenses…</p>;

  return (
    <div>
      <h1>Expenses</h1>

      <div className="grid">
        <ExpenseForm onAdded={load} />

        <div className="card">
          <h3>Total Expense</h3>
          <div className="stat">₹{analysis.totalExpense}</div>

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
