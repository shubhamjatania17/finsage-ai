import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        FinSage AI
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#9ca3af" }}>
        FinSage is an Agentic AI-powered personal finance platform that helps you
        track expenses, analyze investments, and learn timeless financial wisdom
        from legends like Warren Buffett and Charlie Munger.
      </p>

      <div style={{ marginTop: "3rem" }}>
        <h3>💡 What FinSage Does</h3>
        <ul style={{ marginTop: "1rem", lineHeight: 1.8 }}>
          <li>📊 Smart expense tracking with AI insights</li>
          <li>📈 Value-investing based portfolio analysis</li>
          <li>🎓 Duolingo-style financial lessons</li>
          <li>🧠 Agent memory for long-term guidance</li>
        </ul>
      </div>

      <Link
        to="/login"
        className="primary"
        style={{ display: "inline-block", marginTop: "2.5rem" }}
      >
        Get Started →
      </Link>
    </section>
  );
}
