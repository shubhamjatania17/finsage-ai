const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export async function generateLesson(payload) {
  const res = await fetch(`${API_BASE}/lessons/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
}
