import React, { useState } from "react";
import { analyzeStock } from "../services/api";

export default function StockAnalysis() {
  const [stockName, setStockName] = useState("");
  const [reportText, setReportText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!stockName) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await analyzeStock({ stockName, reportText });
      setResult(res.analysis);
    } catch (e) {
      alert("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>📊 Stock Value Analysis</h1>

      <div className="card">
        <input
          placeholder="Stock name or ticker (e.g. TCS, AAPL)"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
        />

        <textarea
          placeholder="Paste financial report / annual summary (optional)"
          rows={6}
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
        />

        <button className="primary" onClick={submit} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Stock"}
        </button>
      </div>

      {result && (
        <div className="card mt-3">
          <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
        </div>
      )}
    </div>
  );
}
