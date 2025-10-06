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

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateCollegeEmail = (email) => {
        // This regex checks if the email ends with a valid college domain.
        // It allows for student emails (stu.upes.ac.in) and staff/admin emails (upes.ac.in)
        const emailRegex = /^[\w-\.]+@(?:stu\.)?upes\.ac\.in$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // 1. Validate Email Format
        if (!validateCollegeEmail(formData.email)) {
            setError('Please use a valid college email address (e.g., your.id@stu.upes.ac.in).');
            return;
        }

        // 2. Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        
        // 3. Check password length (example)
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        // If all validations pass
        setSuccess('Sign up successful! Redirecting...');
        console.log('Form Submitted:', formData);
        
        // Here you would typically make an API call to your backend to register the user.
        // For demonstration, we'll just show a success message.
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
                        <h2 className="mt-4 text-2xl font-bold text-white">Create Your Account</h2>
                        <p className="text-slate-400">Join the community to find and post items.</p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormInput
                                id="fullName"
                                type="text"
                                placeholder="e.g., Sneha Sharma"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                label="Full Name"
                            />
                            <FormInput
                                id="email"
                                type="email"
                                placeholder="Sneha.107413@stu.upes.ac.in"
                                value={formData.email}
                                onChange={handleInputChange}
                                label="College Email Address"
                            />
                            <FormInput
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleInputChange}
                                label="Password"
                            />
                             <FormInput
                                id="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                label="Confirm Password"
                            />
                            
                            {error && <p className="text-red-400 text-sm text-center bg-red-900/20 p-3 rounded-lg">{error}</p>}
                            {success && <p className="text-green-400 text-sm text-center bg-green-900/20 p-3 rounded-lg">{success}</p>}

                            <div>
                                <button
                                    type="submit"
                                    className="w-full cta-button text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="text-center text-slate-400 mt-8">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-sky-400 hover:underline">
                            Log In
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

