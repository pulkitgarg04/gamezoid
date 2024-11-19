import { useState } from "react";
import { useFirebase } from "../../context/firebase";

function Login() {
    const { loginUserWithEmailAndPassword } = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        try {
            await loginUserWithEmailAndPassword(email, password);
            alert("Login successful!");
        } catch (error) {
            console.error("Error logging in:", error.message);
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

            <button onClick={loginUser} type="submit">Login</button>
        </div>
    )
}

export default Login
