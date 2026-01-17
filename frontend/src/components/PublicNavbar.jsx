import React from "react";
import { Link } from "react-router-dom";

export default function PublicNavbar() {
  return (
    <header
      style={{
        padding: "1.2rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <h2>FinSage AI</h2>

      <nav>
        <Link to="/" style={{ marginRight: "1.5rem" }}>
          Home
        </Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
