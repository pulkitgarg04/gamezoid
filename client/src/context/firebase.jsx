import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    doc,
    query,
    where
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FireBaseContext = createContext(null);

// Firebase Configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
    databaseURL: import.meta.env.VITE_DATABASE_URL
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const googleProvider = new GoogleAuthProvider();

// Custom Hook
export const useFirebase = () => useContext(FireBaseContext);

// Firebase Provider
export const FireBaseProvider = (props) => {
    const [user, setUser] = useState(null);

    // Listen for Auth Changes
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            setUser(currentUser || null);
        });
    }, []);

    // Signup
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };

    // Login
    const loginUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    // Google Sign-In
    const signInWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    };

    // Logout
    const logoutUser = () => {
        return signOut(firebaseAuth);
    };

    // Save Game Purchase Data
    const purchaseGame = async (gameData) => {
        try {
            const gameRef = await addDoc(collection(firestore, "purchases"), {
                ...gameData,
                userId: user.uid,
                purchasedAt: new Date(),
            });
            return gameRef.id;
        } catch (error) {
            console.error("Error purchasing game:", error);
            throw error;
        }
    };

    return (
        <FireBaseContext.Provider
            value={{
                user,
                signupUserWithEmailAndPassword,
                loginUserWithEmailAndPassword,
                signInWithGoogle,
                logoutUser,
                purchaseGame,
                isLoggedIn: !!user
            }}
        >
            {props.children}
        </FireBaseContext.Provider>
    );
};