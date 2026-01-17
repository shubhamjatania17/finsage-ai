export function expenseAgent(transactions) {
  const totals = {};
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "expense") {
      totalExpense += t.amount;
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    }
  });

  const recommendations = [];

  for (const [category, amount] of Object.entries(totals)) {
    if (amount > totalExpense * 0.25) {
      recommendations.push(
        `You are spending heavily on ${category}. Consider reducing it by 10–15%.`
      );
    }
  }

  recommendations.push(
    "Redirect saved money into low-cost index funds or emergency savings."
  );

  return {
    totals,
    totalExpense,
    recommendations,
  };
}
