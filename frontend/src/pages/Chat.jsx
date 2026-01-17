import React, { useState } from "react";
import { chatWithMogul } from "../services/api";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = async () => {
    const reply = await chatWithMogul(input);
    setMessages([...messages, { user: input }, { ai: reply }]);
    setInput("");
  };

  return (
    <div className="chat">
      {messages.map((m, i) => (
        <div key={i}>{m.user || m.ai}</div>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={send}>Ask</button>
    </div>
  );
}
