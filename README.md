# 🚀 FinSage AI

FinSage AI is an agentic personal finance web application that helps users track expenses, build financial discipline, and learn investing concepts through AI-powered insights and gamified education.
It combines:
1. 📊 Smart expense tracking
2. 🧠 AI-generated financial advice
3. 📘 Duolingo-style learning paths
4. 💬 Chat with legendary finance thinkers
—all in one clean, modern web experience.

# 🌐 Live MVP
🔗 Live Demo:
👉 https://finsage-frontend.onrender.com
⚠️ Note: Render free instances may take ~30–50 seconds to wake up on first load.

# 🧠 Why FinSage?
Most personal finance apps either:
1. track numbers without teaching why, or
2. teach finance without helping users apply it.

FinSage bridges this gap by combining action (expense tracking) with education (AI-guided lessons) and reflection (chat with finance legends).

# ✨ Key Features
1. 💸 Expense & Income Tracking
 * Add income and expenses in real time
 * Automatic Firestore persistence
 * Category-wise expense breakdown
 * AI-generated recommendations to reduce overspending
2. 📊 Financial Dashboard
 * Net balance (Income − Expenses)
 * Monthly summaries
 * Visual insights for better money decisions
 * Designed as a personal “financial command center”
3. 📘 Gamified Financial Learning
 * Choose a finance mogul (Buffett, Munger, Graham, etc.)
 * Choose difficulty level
 * AI generates structured lessons
 * Lessons adapt over time using agent memory
4. 🔥 Streaks, XP & Badges
 * Daily lesson streaks
 * XP-based progression
 * Achievement badges to encourage consistency
5. 💬 Chat With Finance Legends (Gemini-Powered)
 * Ask questions in natural language
 * Responses styled after legendary investors
 * Context-aware conversations
 * No generic AI answers

# 🧠 Agentic AI Architecture
FinSage uses Agentic AI patterns, where:
1. Different agents handle lessons, chat, expenses, and memory
2. Gemini API is used for reasoning and content generation
3. Firebase persists long-term user memory
4. Agents adapt future responses based on user behavior

# 🛠️ Tech Stack
1. Frontend
 * React + Vite
 * React Router
 * Modern CSS (custom, no heavy UI frameworks)
2. Backend
 * Node.js (ES Modules)
 * Express.js
 * Modular service & agent architecture
3. AI
 * Google Gemini API
 * Prompt-engineered personalities
 * Rule-based + AI hybrid logic
4. Database & Auth
 * Firebase Firestore
 * Firebase Authentication
5. Deployment
 * Render (Frontend & Backend)
 * Environment-based configuration
