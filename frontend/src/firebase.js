import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzav8w5ExiY9Xi3Y0PIfDPi9xjVQjtpXE",
  authDomain: "gen-lang-client-0308678139.firebaseapp.com",
  projectId: "gen-lang-client-0308678139",
  storageBucket: "gen-lang-client-0308678139.firebasestorage.app",
  messagingSenderId: "760622276558",
  appId: "1:760622276558:web:4bdb795387163734ec559f",
  measurementId: "G-T2XFBG1SP2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
