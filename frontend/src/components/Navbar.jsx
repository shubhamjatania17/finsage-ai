import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2>Finsage AI</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/lessons">Lessons</Link>
      </nav>

      <button
        style={{ marginTop: "2rem" }}
        className="secondary"
        onClick={logout}
      >
        Logout
      </button>
    </aside>
  );
}
