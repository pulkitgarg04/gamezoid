import { useState } from 'react';
import { FaTimes, FaBars, FaUserCircle } from 'react-icons/fa';
import { FaBagShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Navbar() {
  
    return (
        <nav className="container relative mx-auto flex w-full items-center justify-between px-5 h-[90px] text-xl bg-gray-900 text-white">
            <div className="text-2xl font-bold font-Manrope">
                <img className="h-[20px]" src="logo.webp" alt="logo" />
            </div>
            <div className="flex items-center justify-around">
                <ul className="mx-3 flex">
                    <Link to="/"><li className="mx-3">Home</li></Link>
                    <Link to="/about"><li className="mx-3">Store</li></Link>
                    <Link to="/about"><li className="mx-3">Tournaments</li></Link>
                    <Link to="/about"><li className="mx-3">Community</li></Link>
                    <Link to="/about"><li className="mx-3">News</li></Link>
                    <Link to="/about"><li className="mx-3">About</li></Link>
                    <Link to="/contact"><li className="mx-3">Contact</li></Link>
                </ul>
                {/* <ThemeToggle /> */}
            </div>
        </nav>
    );
}

export default Navbar
