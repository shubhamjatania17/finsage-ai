import React from "react";

export default function Portfolio() {
  return (
    <div className="main">
      <h1>Portfolio</h1>

      <div className="grid">
        <div className="card">
          <h3>Equity</h3>
          <p>₹6,80,000</p>
        </div>
        <div className="card">
          <h3>Mutual Funds</h3>
          <p>₹4,20,000</p>
        </div>
        <div className="card">
          <h3>Cash</h3>
          <p>₹1,40,000</p>
        </div>
      </div>
    </div>
  );
}
