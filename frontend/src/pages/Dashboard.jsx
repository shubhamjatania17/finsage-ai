import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getExpenseAnalysis, getLessonMemory } from "../services/api";

export default function Dashboard() {
  const { user } = useAuth();
  const [finance, setFinance] = useState(null);
  const [learning, setLearning] = useState(null);

  useEffect(() => {
    if (!user) return;

    getExpenseAnalysis(`${user.uid}-default`)
      .then(setFinance)
      .catch(console.error);

    getLessonMemory(user.uid)
      .then(setLearning)
      .catch(console.error);
  }, [user]);

  if (!finance || !learning) {
    return <p>Loading your dashboard…</p>;
  }

  const income = finance.totalIncome || 0;
  const expense = finance.totalExpense || 0;
  const balance = income - expense;

  const balanceStatus =
    balance > 0 ? "positive" : balance < 0 ? "negative" : "neutral";

  return (
    <div className="dashboard">
      <h1>Welcome back 👋</h1>

      {/* ================= FINANCIAL SNAPSHOT ================= */}
      <section className="dash-section">
        <h2>💰 Financial Snapshot</h2>

        <div className="stat-grid">
          <StatCard title="Income" value={`₹${income}`} tone="good" />
          <StatCard title="Expenses" value={`₹${expense}`} tone="warn" />
          <StatCard
            title="Net Balance"
            value={`₹${balance}`}
            tone={balanceStatus}
          />
        </div>
      </section>

      {/* ================= LEARNING STREAK ================= */}
      <section className="dash-section">
        <h2>🔥 Learning Momentum</h2>

        <div className="learning-card">
          <div>
            <h3>{learning.streak} Day Streak</h3>
            <p>Consistency beats intensity.</p>
          </div>

          <div className="streak-grid">
            {learning.streakDates.slice(-14).map((d) => (
              <div key={d} className="streak-dot active" />
            ))}
          </div>

          <button className="primary small">Continue Lesson</button>
        </div>
      </section>

      {/* ================= BADGES ================= */}
      <section className="dash-section">
        <h2>🏅 Achievements</h2>

        <div className="badge-grid">
          {learning.badges.map((b) => (
            <div key={b} className="badge-card earned">
              {b}
            </div>
          ))}

          <div className="badge-card locked">7-Day Streak</div>
          <div className="badge-card locked">Value Investor</div>
        </div>
      </section>

      {/* ================= AI INSIGHT ================= */}
      <section className="dash-section">
        <h2>🧠 Insight of the Day</h2>

        <div className="ai-insight">
          <p>
            {expense > income
              ? "Your spending is exceeding income. Focus on cutting discretionary expenses."
              : "You are living within your means. Consider investing surplus income wisely."}
          </p>
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value, tone }) {
  return (
    <div className={`stat-card ${tone}`}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}
