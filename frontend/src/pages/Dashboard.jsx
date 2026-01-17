import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Finsage AI</h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/lessons">Lessons</Link>
      </aside>

      <main className="main">
        <h1>Overview</h1>

        <div className="grid">
          <div className="card">
            <h3>Net Worth</h3>
            <div className="stat">₹12,40,000</div>
          </div>

          <div className="card">
            <h3>Monthly Spend</h3>
            <div className="stat">₹32,000</div>
          </div>

          <div className="card">
            <h3>AI Insight</h3>
            <p>
              You’re overspending on food by 18%.  
              Redirect ₹4,000/month to an index fund.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
