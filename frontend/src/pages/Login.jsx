import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login</h2>
      <button onClick={login}>Google Sign-In</button>
    </div>
  );
}
