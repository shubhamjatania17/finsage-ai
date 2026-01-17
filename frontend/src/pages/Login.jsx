import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const login = async () => {
    await signInWithPopup(auth, provider);
    window.location.href = "/dashboard";
  };

  return (
    <div className="login">
      <div className="card login-card">
        <h2>Finsage AI</h2>
        <p className="text-muted">
          Learn. Track. Invest — intelligently.
        </p>
        <button className="primary" onClick={login}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
