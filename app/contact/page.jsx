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

const FormTextarea = ({ id, placeholder, value, onChange, label }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">
            {label}
        </label>
        <textarea
            id={id}
            name={id}
            rows="4"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        ></textarea>
    </div>
);


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        console.log('Contact Form Submitted:', formData);
        // Simulate an API call
        setTimeout(() => {
            setStatus('Your message has been sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
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
                 .card {
                    background-color: #1E293B;
                    border: 1px solid #334155;
                }
            `}</style>
            
            <div className="min-h-screen p-4 pt-24">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white">Get in <span className="gradient-text">Touch</span></h1>
                        <p className="text-lg text-slate-400 mt-4">Have questions or need to report an issue? We're here to help.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="card rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <FormInput id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleInputChange} label="Full Name" />
                                <FormInput id="email" type="email" placeholder="your.id@stu.upes.ac.in" value={formData.email} onChange={handleInputChange} label="Email Address" />
                                <FormInput id="subject" type="text" placeholder="e.g., Issue with a listing" value={formData.subject} onChange={handleInputChange} label="Subject" />
                                <FormTextarea id="message" placeholder="Describe your issue or query here..." value={formData.message} onChange={handleInputChange} label="Message" />
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full cta-button text-white font-bold py-3 px-4 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
                                    >
                                        Submit
                                    </button>
                                </div>
                                {status && <p className="text-center text-green-400 mt-4">{status}</p>}
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                           <div className="card rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-3">Admin Office</h3>
                                <p className="text-slate-400">Room 101, Main Building</p>
                                <p className="text-slate-400">UPES, Campus Road</p>
                           </div>
                           <div className="card rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-3">Email Support</h3>
                                <p className="text-slate-400">For portal-related issues:</p>
                                <a href="mailto:support@lfportal.com" className="text-sky-400 hover:underline">support@lfportal.com</a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

