import React from "react";
import Navbar from "../components/Navbar.jsx";
import ChatWidget from "../components/ChatWidget.jsx";

export default function AppLayout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="main">{children}</main>
    </div>
  );
}
