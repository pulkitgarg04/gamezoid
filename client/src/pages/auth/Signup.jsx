import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { auth, provider, signInWithPopup } from "../../firebase";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const signupUser = (event) => {
    
  // };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User:", result.user);
      alert(`Welcome ${result.user.displayName}`);
    } catch (error) {
      console.error("Error signing in:", error);
      console.error("Error signing in:", error.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative text-white font-barlow flex flex-col items-center bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Helmet>
        <title>Signup - GameZoid</title>
        <meta
          name="description"
          content="Create an account on GameZoid and join the ultimate gaming experience!"
        />
      </Helmet>

      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 z-10">
        <div className="bg-gray-800 p-14 rounded-lg shadow-lg max-w-xl w-full">
          <h1 className="text-3xl font-bold text-center mb-4">
            CREATE YOUR ACCOUNT
          </h1>
          <p className="text-center text-gray-300 mb-8">
            Hey there! Ready to join the party? We just need a few details from
            you to get started. Let's do this!
          </p>

          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              className="bg-white text-black flex justify-center items-center p-2 mb-5 rounded-sm"
              onClick={handleGoogleLogin}
            >
              <img src="/app/google.svg" alt="google" />
              <span className="mx-2">Continue with Google</span>
            </button>

            <p>or</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg text-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-600" />
                  )}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 rounded-lg text-black"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-600" />
                  )}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-400 underline">
              Login
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Signup;