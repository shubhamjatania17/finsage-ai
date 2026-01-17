import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = async () => {
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <div className="card login-card">
        <h2>Welcome back</h2>
        <p>Sign in to continue to FinSage</p>
        <button className="primary" onClick={login}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
