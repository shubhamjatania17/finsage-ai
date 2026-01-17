// ================================
// API BASE CONFIG
// ================================

// Works for:
// - local dev
// - Render backend
// - env-based deployments
const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// Helper for JSON requests
async function jsonRequest(url, options = {}) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || "API request failed");
  }

  return res.json();
}

// ================================
// LESSONS (AI GENERATED)
// ================================

export async function generateLesson({ mogul, difficulty }) {
  return jsonRequest(`${API_BASE}/lessons/generate`, {
    method: "POST",
    body: JSON.stringify({ mogul, difficulty }),
  });
}

// ================================
// QUIZ (AI GENERATED)
// ================================

export async function generateQuiz({ lessonId, difficulty }) {
  return jsonRequest(`${API_BASE}/lessons/quiz`, {
    method: "POST",
    body: JSON.stringify({ lessonId, difficulty }),
  });
}

// ================================
// CHAT WITH MOGUL
// ================================

export async function chatWithMogul({ mogul, message }) {
  return jsonRequest(`${API_BASE}/chat/mogul`, {
    method: "POST",
    body: JSON.stringify({ mogul, message }),
  });
}

// ================================
// EXPENSE SHEETS
// ================================

export async function createExpenseSheet({ uid, name }) {
  return jsonRequest(`${API_BASE}/expenses/sheet`, {
    method: "POST",
    body: JSON.stringify({ uid, name }),
  });
}

export async function addTransaction({
  sheetId,
  type, // "income" | "expense"
  amount,
  category,
  note,
  date,
}) {
  return jsonRequest(`${API_BASE}/expenses/transaction`, {
    method: "POST",
    body: JSON.stringify({
      sheetId,
      type,
      amount,
      category,
      note,
      date,
    }),
  });
}

export async function getExpenseSheet(sheetId) {
  return jsonRequest(`${API_BASE}/expenses/${sheetId}`);
}

// ================================
// EXPENSE ANALYSIS (AI / RULE-BASED)
// ================================

export async function getExpenseAnalysis(sheetId) {
  return jsonRequest(`${API_BASE}/expenses/${sheetId}/analyze`);
}

// ================================
// USER MEMORY / PROGRESS
// ================================

export async function getLessonMemory(uid) {
  return jsonRequest(`${API_BASE}/memory/${uid}`);
}

export async function updateLessonMemory(uid, memory) {
  return jsonRequest(`${API_BASE}/memory/${uid}`, {
    method: "POST",
    body: JSON.stringify(memory),
  });
}

// ================================
// XP / STREAKS
// ================================

export async function updateXP(uid, payload) {
  return jsonRequest(`${API_BASE}/xp/update`, {
    method: "POST",
    body: JSON.stringify({ uid, ...payload }),
  });
}

export async function addTransaction(data) {
  return jsonRequest(`${API_BASE}/expenses/transaction`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}
