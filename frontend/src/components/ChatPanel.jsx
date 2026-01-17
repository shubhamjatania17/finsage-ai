import React, { useState } from "react";
import { chatWithMogul } from "../services/api";

const MOGULS = [
  "Warren Buffett",
  "Charlie Munger",
  "Benjamin Graham",
  "Morgan Housel",
  "Robert Kiyosaki",
];

export default function ChatPanel({ onClose }) {
  const [mogul, setMogul] = useState(MOGULS[0]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await chatWithMogul({
        mogul,
        message: userMsg.text,
      });

      setMessages((m) => [
        ...m,
        { role: "assistant", text: reply.message || reply },
      ]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "90px",
        right: "24px",
        width: "360px",
        maxHeight: "70vh",
        background: "#0f172a",
        border: "1px solid #1f2937",
        borderRadius: "14px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "0.8rem 1rem",
          borderBottom: "1px solid #1f2937",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <select
          value={mogul}
          onChange={(e) => setMogul(e.target.value)}
          style={{ background: "#020617", color: "white" }}
        >
          {MOGULS.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <button onClick={onClose}>✖</button>
      </div>

      {/* Messages */}
      <div
        style={{
          padding: "1rem",
          flex: 1,
          overflowY: "auto",
          fontSize: "0.9rem",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: "0.8rem",
              color: m.role === "user" ? "#38bdf8" : "#e5e7eb",
            }}
          >
            <strong>{m.role === "user" ? "You" : mogul}:</strong>{" "}
            {m.text}
          </div>
        ))}

        {loading && <p>Thinking…</p>}
      </div>

      {/* Input */}
      <div style={{ padding: "0.8rem", borderTop: "1px solid #1f2937" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your mentor…"
          style={{
            width: "100%",
            padding: "0.6rem",
            borderRadius: "8px",
            border: "none",
          }}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
      </div>
    </div>
  );
}
