"use client";

import { useState } from 'react';

// Icons for the page
const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);
const UsersIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const TargetIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);


export default function AboutPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
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
                .card {
                    background-color: #1E293B;
                    border: 1px solid #334155;
                }
            `}</style>
            
            <div className="w-full antialiased">
                <main className="pt-24">
                    {/* Hero Section */}
                    <section className="py-20 md:py-28">
                        <div className="container mx-auto px-6 text-center">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                                    Connecting Our <span className="gradient-text">Community</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400">
                                    Learn about our mission to create a trustworthy and efficient platform for the lost and found items within our college campus.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="py-20">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="card p-8 rounded-xl">
                                    <div className="mx-auto bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                        <TargetIcon className="w-8 h-8 text-sky-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                                    <p className="text-slate-400">
                                        We believe that a lost item shouldn't mean a lost day. Our goal is to leverage technology to foster a helpful campus environment where honesty is rewarded and belongings are quickly returned to their rightful owners. We aim to reduce the stress and anxiety associated with losing personal items.
                                    </p>
                                </div>
                                <div className="card p-8 rounded-xl">
                                    <div className="mx-auto bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                                        <UsersIcon className="w-8 h-8 text-sky-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Who We Are</h3>
                                    <p className="text-slate-400">
                                        This portal is a student-led initiative, supported by the college administration. We are a team of passionate developers, designers, and student representatives dedicated to improving campus life through practical, user-friendly solutions. This platform is built for students, by students.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                 {/* Footer */}
                 <footer className="border-t border-slate-800 mt-20">
                    <div className="container mx-auto px-6 py-8 text-center text-slate-500">
                        &copy; 2024 Your College Name. All Rights Reserved.
                    </div>
                </footer>
            </div>
        </>
    );
}
