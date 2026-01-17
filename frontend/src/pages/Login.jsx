import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login">
      <div className="card login-card">
        <h2>Finsage AI</h2>
        <button className="primary" onClick={login}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}
