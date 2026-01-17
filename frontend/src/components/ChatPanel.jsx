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
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: `Hi, I’m ${MOGULS[0]}. Ask me anything about money, investing, or decisions you’re unsure about.`,
    },
  ]);
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
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "I need a moment to think about that." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-panel">
      {/* Header */}
      <div className="chat-header">
        <select
          value={mogul}
          onChange={(e) => setMogul(e.target.value)}
        >
          {MOGULS.map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>

        <button className="chat-close" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chat-bubble ${m.role}`}
          >
            <span>{m.text}</span>
          </div>
        ))}

        {loading && (
          <div className="chat-bubble assistant typing">
            <span>Thinking…</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${mogul}…`}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button onClick={send}>➤</button>
      </div>
    </div>
  );
}
