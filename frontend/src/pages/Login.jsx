import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function Login() {
  const login = async () => {
    await signInWithPopup(auth, provider);
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Google Sign-In</button>
    </div>
  );
}
