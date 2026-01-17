import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="center">
      <h1>FinSage AI</h1>
      <p>Your AI-powered financial mentor.</p>

      <Link to="/login">
        <button className="primary">Get Started</button>
      </Link>
    </div>
  );
}
