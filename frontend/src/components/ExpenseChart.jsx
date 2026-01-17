import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#38bdf8", "#22c55e", "#facc15", "#ef4444"];

export default function ExpenseChart({ data }) {
  const chartData = Object.entries(data).map(([k, v]) => ({
    name: k,
    value: v,
  }));

  return (
    <PieChart width={300} height={300}>
      <Pie data={chartData} dataKey="value" outerRadius={120}>
        {chartData.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
