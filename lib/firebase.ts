import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNuluaH0XH9JYJ2qoYXULm-YcOUc7r-og",
  authDomain: "gym-website-98ee6.firebaseapp.com",
  projectId: "gym-website-98ee6",
  storageBucket: "gym-website-98ee6.firebasestorage.app",
  messagingSenderId: "626263469810",
  appId: "1:626263469810:web:5e1a744d2f442532f22a6b",
  measurementId: "G-TLNDHFFH6N"
};

// Initialize Firebase only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
