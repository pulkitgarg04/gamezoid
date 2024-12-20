import { FaInstagram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-black text-gray-100 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                <div className="space-y-4">
                    <img src="logo.webp" alt="Logo" className="w-20 h-auto" />
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut perspiciatis eum illum blanditiis facilis? In qui id.
                    </p>
                    <div className="space-y-2">
                        <h4 className="text-lg font-semibold">
                            Active <span className="text-yellow-400">With Us <MdDoubleArrow /></span>
                        </h4>
                        <div className="flex space-x-4 text-xl">
                            <i className="fab fa-facebook hover:text-yellow-500"></i>
                            <FaInstagram />
                            <FaTwitter />
                            <FaGithub />
                            <FaYoutube />
                            <i className="fab fa-pinterest hover:text-red-500"></i>
                            <i className="fab fa-youtube hover:text-red-600"></i>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">About</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Delivery Information</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">My Account</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-400">Sign In</a></li>
                        <li><a href="#" className="hover:text-yellow-400">View Cart</a></li>
                        <li><a href="#" className="hover:text-yellow-400">My Wishlist</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Track My Order</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Help</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Install App</h4>
                    <p className="text-gray-300">From App Store or Google Play</p>
                    <div className="flex space-x-4">
                        <img src="./app/app-store.jpg" alt="App Store" className="w-24 h-auto" />
                        <img src="./app/play.jpg" alt="Google Play" className="w-24 h-auto" />
                    </div>
                    <p className="text-gray-300">Secured Payment Gateways</p>
                    <img src="pay.png" alt="Payment Gateways" className="w-32 h-auto" />
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4">
                <p className="text-center text-gray-400 text-sm">
                    Copyright &copy; 2024 - All Rights Reserved by <span className="text-yellow-400 font-bold">GameZoid</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;