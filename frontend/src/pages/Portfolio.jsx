import React from "react";
import { analyze } from "../services/api";
import { auth } from "../firebase";

export default function Portfolio() {
  const run = async () => {
    const token = await auth.currentUser.getIdToken();
    const res = await analyze(
      { portfolio: [{ symbol: "AAPL", peRatio: 28 }] },
      token
    );
    alert(res.portfolioInsight);
  };

  return <button onClick={run}>Analyze Portfolio</button>;
}
