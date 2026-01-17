import React from "react";

export default function Lessons() {
  return (
    <div className="main">
      <h1>Financial Lessons</h1>

      <div className="grid">
        <div className="card">
          <h3>Rule #1</h3>
          <p>Never lose money — Warren Buffett</p>
        </div>

        <div className="card">
          <h3>Margin of Safety</h3>
          <p>Buy assets below intrinsic value.</p>
        </div>

        <div className="card">
          <h3>Psychology of Money</h3>
          <p>Behavior matters more than intelligence.</p>
        </div>
      </div>
    </div>
  );
}
