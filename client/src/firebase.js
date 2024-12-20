import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_API_KEY,
//     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//     databaseURL: import.meta.env.VITE_DATABASE_URL,
//     projectId: import.meta.env.VITE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_APP_ID,
//     measurementId: import.meta.env.VITE_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyCi7YYdp9ht53sPPNXvHzFeFx109UIHSQU",
    authDomain: "gamezoid-app.firebaseapp.com",
    databaseURL: "https://gamezoid-app-default-rtdb.firebaseio.com",
    projectId: "gamezoid-app",
    storageBucket: "gamezoid-app.firebasestorage.app",
    messagingSenderId: "417777297685",
    appId: "1:417777297685:web:d6095f13539086661ae11c",
    measurementId: "G-NX6H391LD0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, db, storage, provider, signInWithPopup, signOut };