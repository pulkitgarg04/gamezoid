import { useState } from "react";
import { useFirebase } from "../../context/firebase";

function Signup() {
    const { signupUserWithEmailAndPassword, signInWithGoogle } = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = async () => {
        try {
            await signupUserWithEmailAndPassword(email, password);
            alert("Signup successful!");
        } catch (error) {
            console.error("Error signing up:", error.message);
            alert(error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithGoogle();
            alert("Google Signup successful!");
        } catch (error) {
            console.error("Error signing up with Google:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="p-5">
            <div className="p-10">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    placeholder="Enter your email here"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required />
            </div>
            <div className="p-10">
                <label htmlFor="password">Password: </label>
                <input
                    type="text"
                    placeholder="Enter your password here"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required />
            </div>

            <button onClick={createUser} type="submit">Signup</button>

            <button onClick={handleGoogleSignup} type="button" className="mt-4">
                Signup with Google
            </button>
        </div>
    )
}

export default Signup
