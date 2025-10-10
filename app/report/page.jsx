"use client";
import { useState } from 'react';

// Icons for the page
const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const HelpCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);
const ArchiveIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>
);

// Form Input Component
const FormInput = ({ id, label, type = 'text', placeholder, required = true }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
        <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
        />
    </div>
);

// Report Item Modal Component
const ReportModal = ({ itemType, onClose }) => {
    if (!itemType) return null;

    const title = itemType === 'lost' ? 'Report a Lost Item' : 'Report a Found Item';
    const description = itemType === 'lost' 
        ? "Please provide as much detail as possible about the item you lost."
        : "Thank you for helping our community! Please describe the item you found.";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg mx-auto shadow-2xl transform transition-all duration-300 scale-95 animate-scale-in">
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition">
                        <XIcon className="w-6 h-6" />
                    </button>
                    <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                    <p className="text-slate-400 mb-6">{description}</p>

                    <form className="space-y-4">
                        <FormInput id="itemName" label="Item Name" placeholder="e.g., iPhone 14 Pro" />
                        
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                            <select id="category" name="category" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition">
                                <option>Electronics</option>
                                <option>ID Cards & Documents</option>
                                <option>Books & Notebooks</option>
                                <option>Clothing & Accessories</option>
                                <option>Keys</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <FormInput id="location" label={itemType === 'lost' ? "Last Seen Location" : "Location Found"} placeholder="e.g., Library, 2nd Floor" />
                        
                        <FormInput id="date" label={itemType === 'lost' ? "Date Lost" : "Date Found"} type="date" />

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                            <textarea id="description" name="description" rows="3" placeholder="Add details like color, brand, or any identifying marks..." className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"></textarea>
                        </div>
                        
                        <div>
                             <label htmlFor="image" className="block text-sm font-medium text-slate-300 mb-2">Upload Image (Optional)</label>
                             <input type="file" id="image" name="image" className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-700 file:text-sky-300 hover:file:bg-slate-600"/>
                        </div>
                        
                        <div className="pt-4 flex justify-end">
                            <button type="submit" className="cta-button text-white font-bold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                                Submit Report
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <style jsx>{`
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in {
                    animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
};


export default function ReportPage() {
    const [modalType, setModalType] = useState(null); // 'lost', 'found', or null

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
                 .card-hover:hover {
                    transform: translateY(-5px);
                    border-color: #38bdf8;
                 }
            `}</style>
            
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <div className="text-center max-w-2xl mx-auto">
                    <a href="/" className="text-3xl font-bold text-white mb-4 inline-block">
                        L&F<span className="gradient-text">Portal</span>
                    </a>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Report an Item</h1>
                    <p className="text-lg text-slate-400 mb-12">
                        Did you lose something, or did you find an item on campus? Please select one of the options below to proceed. Your report helps our community stay connected.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {/* Report Lost Item Card */}
                    <div onClick={() => setModalType('lost')} className="bg-slate-800 border border-slate-700 p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 card-hover">
                        <div className="mx-auto bg-slate-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 border-2 border-slate-700">
                            <HelpCircleIcon className="w-10 h-10 text-sky-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">I Lost Something</h2>
                        <p className="text-slate-400">Click here to file a report for an item you've lost. We'll notify you if a matching item is found.</p>
                    </div>

                    {/* Report Found Item Card */}
                    <div onClick={() => setModalType('found')} className="bg-slate-800 border border-slate-700 p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 card-hover">
                         <div className="mx-auto bg-slate-900 rounded-full w-20 h-20 flex items-center justify-center mb-6 border-2 border-slate-700">
                            <ArchiveIcon className="w-10 h-10 text-indigo-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">I Found Something</h2>
                        <p className="text-slate-400">Click here to post details about an item you've found. You'll be helping someone reunite with their belongings.</p>
                    </div>
                </div>
            </div>

            <ReportModal itemType={modalType} onClose={() => setModalType(null)} />
        </>
    );
}

