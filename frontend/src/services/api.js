const API_BASE = "https://finsage-ej63.onrender.com";

export async function analyze(payload, token) {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });

  return res.json();
}
