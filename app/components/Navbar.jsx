// /components/Navbar.js
"use client";

import { useState } from 'react';
import { MenuIcon } from './Icons'; // Import the icon

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-md border-b border-slate-700/50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-white">
                    L&F<span className="gradient-text">Portal</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#how-it-works" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">How It Works</a>
                    <a href="#recent-items" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">Recent Items</a>
                    <a href="#testimonials" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">Testimonials</a>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-slate-300 hover:text-sky-400 transition-colors duration-300">Log In</a>
                    <a href="#" className="bg-slate-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors duration-300">Sign Up</a>
                </div>
                
                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                    <MenuIcon />
                </button>
            </div>
            
            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
                <a href="#how-it-works" className="block py-2 text-slate-300 hover:text-sky-400">How It Works</a>
                <a href="#recent-items" className="block py-2 text-slate-300 hover:text-sky-400">Recent Items</a>
                <a href="#testimonials" className="block py-2 text-slate-300 hover:text-sky-400">Testimonials</a>
                <div className="border-t border-slate-700 mt-4 pt-4 flex flex-col space-y-3">
                    <a href="#" className="text-slate-300 hover:text-sky-400">Log In</a>
                    <a href="#" className="bg-slate-700 text-white text-center font-semibold px-4 py-2 rounded-lg hover:bg-slate-600">Sign Up</a>
                </div>
            </div>
        </header>
    );
}