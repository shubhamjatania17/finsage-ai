import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./src/pages/Login.jsx";
import Dashboard from "./src/pages/Dashboard.jsx";
import Portfolio from "./src/pages/Portfolio.jsx";
import Expenses from "./src/pages/Expenses.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Login />} />

        {/* App pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/expenses" element={<Expenses />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
