import React from "react";

export default function Dashboard() {
  return (
    <>
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
      </div>
    </>
  );
}
