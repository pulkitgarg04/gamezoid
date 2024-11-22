import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const signupUser = (event) => {
        event.preventDefault();
        console.log("Signup form submitted");
    };

    return (
        <div>
            <Navbar />
            <section className="max-w-lg mx-auto p-8 mt-24 bg-gray-900 rounded-lg flex flex-col items-center">
                <h1 className="text-white text-2xl font-bold uppercase mb-4">Create Your Admin Account</h1>
                <p className="text-gray-400 text-center mb-6">
                    Hey there! Ready to join the party? We just need a few details from you to get started.
                    Let's do this!
                </p>

                <form onSubmit={signupUser} className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-white text-lg font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="p-3 rounded-md border border-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-white text-lg font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="p-3 rounded-md border border-white text-gray-900 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-white text-lg font-medium">
                            Password
                        </label>
                        <div className="flex">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="p-3 rounded-l-md border border-white text-gray-900 flex-1 focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="p-3 bg-white rounded-r-md flex justify-center items-center text-gray-900 border border-white hover:bg-gray-200"
                            >
                                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirm-password" className="text-white text-lg font-medium">
                            Confirm Password
                        </label>
                        <div className="flex">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm your password"
                                required
                                className="p-3 rounded-l-md border border-white text-gray-900 flex-1 focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="p-3 bg-white rounded-r-md flex justify-center items-center text-gray-900 border border-white hover:bg-gray-200"
                            >
                                {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-gray-400 mt-4">
                    Already have an account?{" "}
                    <a href="./login" className="text-blue-500 underline">
                        Login
                    </a>
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default Signup;