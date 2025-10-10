"use client";

import { useState } from 'react';

// Icons (used in sections, not nav)
const FilePenLineIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21l-2.83 0.94c-1.33.44-2.28-0.51-1.84-1.84l0.94-2.83Z"/></svg>
);
const SearchIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const Link2Icon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
);
const TwitterIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.4-.6-2.8-.9c-1.2 2.2-2.7 3.8-4.5 5.2-1.9 1.4-4.4 2.1-6.7 2.1-1.2 0-2.5-.2-3.8-.6s-2.5-1-3.6-1.8c-1.1-.8-2-1.8-2.8-3.1s-1.1-2.8-1.1-4.5c0-.4.1-.8.2-1.2.2-.4.4-.8.7-1.1s.6-.6.9-.9c.3-.3.7-.5 1-.6s.6-.2 1-.2c.3 0 .6 0 .9.1s.6.1.9.2c.3.1.6.2.8.4s.5.3.7.5c.2.2.4.3.6.5s.4.3.5.4c.2.1.3.2.4.3.1.1.2.2.3.2s.2.1.3.1.2.1.3.1c.1 0 .2 0 .3-.1h.1s.1 0 .1-.1c0-.1 0-.2-.1-.3s-.1-.2-.2-.3c-.1-.1-.2-.2-.3-.3s-.2-.2-.4-.3-.3-.2-.4-.3-.3-.2-.4-.3-.3-.2-.4-.3-.3-.2-.4-.3-.2-.2-.3-.3c-.1-.1-.2-.2-.2-.3s-.2-.2-.2-.3-.1-.2-.1-.3-.1-.2-.1-.3c0-.1 0-.2 0-.3s0-.2 0-.3c0-.1 0-.2.1-.3s.1-.2.1-.3.1-.2.2-.3c.1-.1.2-.2.2-.3s.2-.2.3-.3.2-.2.3-.2c.1 0 .2-.1.3-.1s.2-.1.3-.1.2-.1.3-.1.3 0 .4-.1.3 0 .4-.1.3 0 .4-.1.3 0 .4-.1.2 0 .3 0h.3c.1 0 .3 0 .4 0h.4c.1 0 .3 0 .4 0h.4c.1 0 .3 0 .4 0h.4c.1 0 .3 0 .4 0h.4c.1 0 .3 0 .4 0h.3c.1 0 .3 0 .4 0h.4c.1 0 .3 0 .4 0h.4c.1 0 .3 0 .4 0Z"/></svg>
);
const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function HomePage() {
    return (
        <>
            <style>{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #0B1120;
                    color: #d1d5db;
                }
                .gradient-text {
                    background: linear-gradient(90deg, #38bdf8, #818cf8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .cta-button {
                    background: linear-gradient(90deg, #38bdf8, #818cf8);
                }
                .cta-button:hover {
                    filter: brightness(1.1);
                }
                .card {
                    background-color: #1E293B;
                    border: 1px solid #334155;
                }
                .feature-card-hover:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(56, 189, 248, 0.1), 0 4px 6px -2px rgba(56, 189, 248, 0.05);
                }
            `}</style>

            <div className="w-full antialiased">
                <main className="pt-24">
                    {/* Hero Section */}
                    <section className="py-20 md:py-32">
                        <div className="container mx-auto px-6 text-center">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                                    Lost Something? <br /> <span className="gradient-text">Reunite with Your Belongings.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 mb-10">
                                    The official Lost and Found portal for our college community. Easily report lost items and browse found ones to get your valuables back.
                                </p>
                                <div className="flex justify-center items-center gap-4 flex-wrap">
                                    <a href="#" className="cta-button text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
                                        Report a Lost Item
                                    </a>
                                    <a href="#" className="bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-slate-600 hover:scale-105">
                                        Browse Found Items
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Remaining sections (How It Works, Recently Found, Testimonials, Final CTA) remain unchanged */}
                    {/* ... copy everything from your previous code except the header/nav */}
                </main>

                {/* Footer */}
                <footer className="border-t border-slate-800">
                    <div className="container mx-auto px-6 py-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <a href="/" className="text-2xl font-bold text-white">
                                    L&F<span className="gradient-text">Portal</span>
                                </a>
                                <p className="text-slate-400 mt-4 max-w-xs">UPES's official platform for lost and found items.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-white mb-4">Quick Links</h4>
                                    <ul className="space-y-3">
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">Report Lost</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">Post Found</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">My Account</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-4">Resources</h4>
                                    <ul className="space-y-3">
                                        <li><a href="/about" className="text-slate-400 hover:text-sky-400">About Us</a></li>
                                        <li><a href="/contact" className="text-slate-400 hover:text-sky-400">Contact Admin</a></li>
                                        <li><a href="#" className="text-slate-400 hover:text-sky-400">College Website</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-4">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-slate-400 hover:text-sky-400"><TwitterIcon /></a>
                                    <a href="#" className="text-slate-400 hover:text-sky-400"><InstagramIcon /></a>
                                    <a href="#" className="text-slate-400 hover:text-sky-400"><FacebookIcon /></a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
                            &copy; 2024 UPES. All Rights Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
