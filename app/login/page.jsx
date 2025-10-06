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

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }

        console.log('Login attempt:', formData);
        // Here you would typically make an API call to authenticate the user
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
                        <h1 className="text-2xl font-bold text-white mt-6">Welcome Back</h1>
                        <p className="text-slate-400 mt-2">Log in to access your account.</p>
                    </div>

                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormInput 
                                id="email" 
                                type="email" 
                                placeholder="your.id@stu.upes.ac.in" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                label="College Email Address" 
                            />
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label htmlFor="password"className="block text-sm font-medium text-slate-300">
                                        Password
                                    </label>
                                    {/* CORRECTED LINK BELOW */}
                                    <a href="/forgot-password" className="text-sm text-sky-400 hover:underline">
                                        Forgot Password?
                                    </a>
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {error && <p className="text-red-400 text-sm">{error}</p>}
                            
                            <div>
                                <button
                                    type="submit"
                                    className="w-full cta-button text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>

                        <p className="text-center text-slate-400 mt-8">
                            Don't have an account?{' '}
                            <a href="/signup" className="font-medium text-sky-400 hover:underline">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

