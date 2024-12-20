import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email && user.password === password);

    if (!existingUser) {
      alert("Invalid email or password!");
      return;
    }

    alert(`Welcome back, ${existingUser.name}!`);
    window.location.href = "/dashboard"; // Change to appropriate route after login
  };

  return (
    <div className="min-h-screen relative text-white font-barlow flex flex-col items-center bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Helmet>
        <title>Login - GameZoid</title>
        <meta
          name="description"
          content="Login to your GameZoid account and continue your ultimate gaming experience!"
        />
      </Helmet>

      <Navbar />

      <main className="flex-grow flex items-center justify-center py-16 z-10">
        <div className="bg-gray-800 p-14 rounded-lg shadow-lg max-w-xl w-full">
          <h1 className="text-3xl font-bold text-center mb-4">
            LOGIN TO YOUR ACCOUNT
          </h1>
          <p className="text-center text-gray-300 mb-8">
            Welcome back! Please enter your credentials to continue your gaming journey.
          </p>

          <form onSubmit={loginUser} className="space-y-6">
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

            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-yellow-400 underline">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;