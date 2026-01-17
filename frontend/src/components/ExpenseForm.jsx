import React, { useState } from "react";
import { addTransaction } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function ExpenseForm({ onAdded }) {
  const { user } = useAuth();

  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!amount || !user) return;

    setLoading(true);

    await addTransaction({
      sheetId: `${user.uid}-default`,
      type,
      amount: Number(amount),
      category: type === "income" ? "Income" : category,
      note,
    });

    setAmount("");
    setCategory("");
    setNote("");
    setLoading(false);
    onAdded(); // 🔥 refresh analysis
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Add Transaction</h3>

      {/* Type Toggle */}
      <div className="toggle">
        <button
          type="button"
          className={type === "expense" ? "active" : ""}
          onClick={() => setType("expense")}
        >
          Expense
        </button>
        <button
          type="button"
          className={type === "income" ? "active" : ""}
          onClick={() => setType("income")}
        >
          Income
        </button>
      </div>

      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      {type === "expense" && (
        <input
          placeholder="Category (Food, Rent, Travel)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      )}

      <input
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button className="primary" disabled={loading}>
        {loading ? "Saving…" : "Add"}
      </button>
    </form>
  );
}
