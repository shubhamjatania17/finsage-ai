import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <h1>
          Fin<span className="accent">Sage</span> AI
        </h1>
        <p className="subtitle">
          Master your money. Learn from legends.  
          Build wealth the intelligent way.
        </p>

        <div className="cta-row">
          <Link to="/login">
            <button className="primary">Get Started</button>
          </Link>

          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary">View Project</button>
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <Feature
          title="💸 Smart Expense Tracking"
          desc="Track income & expenses, visualize spending, and get AI-driven insights."
        />
        <Feature
          title="📘 Learn Like Duolingo"
          desc="Gamified lessons inspired by Buffett, Munger, Graham, and more."
        />
        <Feature
          title="🧠 Chat With Finance Legends"
          desc="Ask questions and get advice in the voice of legendary investors."
        />
      </section>

      {/* FOOTER CTA */}
      <section className="final-cta">
        <h2>Start building financial wisdom today.</h2>
        <Link to="/login">
          <button className="primary large">Enter FinSage</button>
        </Link>
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
