import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getExpenseAnalysis,
  getLessonMemory,
} from "../services/api";

export default function Dashboard() {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState(null);
  const [memory, setMemory] = useState(null);

  useEffect(() => {
    if (!user) return;

    getExpenseAnalysis(`${user.uid}-default`)
      .then(setExpenses)
      .catch(console.error);

    getLessonMemory(user.uid)
      .then(setMemory)
      .catch(console.error);
  }, [user]);

  if (!expenses || !memory) {
    return <p>Loading dashboard…</p>;
  }

  const income = expenses.totalIncome || 0;
  const expense = expenses.totalExpense || 0;
  const balance = income - expense;

  return (
    <div>
      <h1>Dashboard</h1>

      {/* ===================== */}
      {/* FINANCIAL SUMMARY */}
      {/* ===================== */}
      <div className="grid">
        <StatCard title="Income" value={`₹${income}`} positive />
        <StatCard title="Expenses" value={`₹${expense}`} />
        <StatCard
          title="Net Balance"
          value={`₹${balance}`}
          highlight
        />
      </div>

      {/* ===================== */}
      {/* STREAK CALENDAR */}
      {/* ===================== */}
      <div className="card mt-3">
        <h3>🔥 Learning Streak</h3>
        <p>{memory.streak} day streak</p>

        <div className="streak-grid">
          {memory.streakDates.map((date) => (
            <div key={date} className="streak-day active" />
          ))}
        </div>
      </div>

      {/* ===================== */}
      {/* BADGES */}
      {/* ===================== */}
      <div className="card mt-3">
        <h3>🏅 Badges</h3>
        <div className="badge-row">
          {memory.badges.map((b) => (
            <span key={b} className="badge">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, positive, highlight }) {
  return (
    <div
      className={`card stat-card ${
        positive ? "green" : ""
      } ${highlight ? "blue" : ""}`}
    >
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
