"use client";

import { useState } from 'react';

// Reusable Input component for the form
const FormInput = ({ id, type, placeholder, value, onChange, label }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
            {label}
        </label>
        <input
            id={id}
            name={id}
            type={type}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        console.log('Password reset requested for:', email);
        // In a real application, you would make an API call here to send the reset email.
        setTimeout(() => {
            setStatus('If an account with that email exists, a password reset link has been sent.');
            setEmail('');
        }, 1500);
    };

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
            `}</style>
            
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <a href="/" className="text-3xl font-bold text-white">
                            L&F<span className="gradient-text">Portal</span>
                        </a>
                        <h1 className="text-2xl font-bold text-white mt-6">Reset Your Password</h1>
                        <p className="text-slate-400 mt-2">Enter your email to receive a reset link.</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormInput 
                                id="email" 
                                type="email" 
                                placeholder="your.id@stu.upes.ac.in" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                label="College Email Address" 
                            />
                            <div>
                                <button
                                    type="submit"
                                    className="w-full cta-button text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
                                >
                                    Send Reset Link
                                </button>
                            </div>
                            {status && <p className="text-center text-green-400 text-sm mt-4">{status}</p>}
                        </form>

                        <p className="text-center text-slate-400 mt-8">
                            Remembered your password?{' '}
                            <a href="/login" className="font-medium text-sky-400 hover:underline">
                                Log In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
