import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
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

export const useFirebase = () => useContext(FireBaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FireBaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if(user) setUser(user);
            else setUser(null);
        });
    }, []);

    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const loginUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(firebaseAuth, googleProvider);
    }

    const isLoggedIn = user ? true : false;

    return (
        <FireBaseContext.Provider
            value={{
                signupUserWithEmailAndPassword, 
                loginUserWithEmailAndPassword,
                signInWithGoogle,
                isLoggedIn
            }}
        >
            {props.children}
        </FireBaseContext.Provider>
    )
}