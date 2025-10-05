// /app/HomePage.js (or /pages/index.js)

import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';
import TestimonialCard from './components/TestimonialCard';
import CallToAction from './components/CallToAction';
import { FilePenLineIcon, SearchIcon, Link2Icon, TwitterIcon, InstagramIcon, FacebookIcon } from './components/Icons';

// Mock data (for clean separation)
const features = [
    { 
        icon: FilePenLineIcon, 
        title: "1. Report an Item", 
        description: "Fill out a quick form with details about what you lost or found. Be as descriptive as possible!" 
    },
    { 
        icon: SearchIcon, 
        title: "2. Search & Get Notified", 
        description: "Our system automatically searches for matches. You'll get notified if a potential match is posted." 
    },
    { 
        icon: Link2Icon, 
        title: "3. Connect & Reclaim", 
        description: "Connect securely with the finder or owner through the portal to arrange a pickup." 
    },
];

const testimonials = [
    {
        quote: "I thought my laptop was gone forever after I left it in the lab. I reported it here and got a notification the next day! I'm so grateful for this platform.",
        name: "Sarah Johnson",
        role: "Computer Science Student",
        avatarUrl: "https://i.pravatar.cc/150?img=1"
    },
    {
        quote: "Finding a wallet and not knowing who it belongs to is stressful. I posted it on the portal, and the owner contacted me within hours. It was so easy and efficient.",
        name: "Mike Chen",
        role: "Business Administration Student",
        avatarUrl: "https://i.pravatar.cc/150?img=32"
    },
];

export default function HomePage() {
    return (
        <div className="w-full antialiased">
            
            <Navbar />

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

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">A Simple, Three-Step Process</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Finding your lost items has never been easier. Follow these simple steps.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <FeatureCard 
                                    key={index}
                                    icon={feature.icon} 
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recently Found Items Section */}
                <section id="recent-items" className="py-20 bg-slate-900/50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Recently Found Items</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Is one of these yours? Check out the latest items turned in by fellow students.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* NOTE: Item cards are kept inline for simplicity, 
                                but they could be extracted into a reusable `ItemCard` component too! 
                            */}
                            {/* Item Card 1 */}
                            <div className="card rounded-xl overflow-hidden group">
                                <img src="https://placehold.co/600x400/0B1120/38bdf8?text=iPhone+14" alt="Found Item" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">iPhone 14 Pro</h3>
                                    <p className="text-slate-400 text-sm mb-4">Found near the library. Blue case. Has a small crack on the back.</p>
                                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">View Details &rarr;</a>
                                </div>
                            </div>
                            {/* Item Card 2 */}
                            <div className="card rounded-xl overflow-hidden group">
                                <img src="https://placehold.co/600x400/0B1120/818cf8?text=Keys" alt="Found Item" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Set of Keys</h3>
                                    <p className="text-slate-400 text-sm mb-4">A bunch of keys with a red keychain. Found in the main auditorium.</p>
                                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">View Details &rarr;</a>
                                </div>
                            </div>
                            {/* Item Card 3 */}
                            <div className="card rounded-xl overflow-hidden group">
                                <img src="https://placehold.co/600x400/0B1120/38bdf8?text=Backpack" alt="Found Item" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Black Jansport Backpack</h3>
                                    <p className="text-slate-400 text-sm mb-4">Seems heavy, contains textbooks. Left in the cafeteria. No name tag.</p>
                                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">View Details &rarr;</a>
                                </div>
                            </div>
                            {/* Item Card 4 */}
                            <div className="card rounded-xl overflow-hidden group">
                                <img src="https://placehold.co/600x400/0B1120/818cf8?text=ID+Card" alt="Found Item" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Student ID Card</h3>
                                    <p className="text-slate-400 text-sm mb-4">Belongs to Jane Doe. Found on the campus green. Please claim at admin office.</p>
                                    <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">View Details &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Testimonials Section */}
                <section id="testimonials" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Success Stories from Students</h2>
                            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Don't just take our word for it. Hear from students who've been helped by the portal.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {testimonials.map((t, index) => (
                                <TestimonialCard 
                                    key={index}
                                    quote={t.quote} 
                                    name={t.name}
                                    role={t.role}
                                    avatarUrl={t.avatarUrl}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Final CTA Section (Reusable Component) */}
                <CallToAction />

            </main>

            {/* Footer */}
            <footer className="border-t border-slate-800">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* About */}
                        <div>
                            <a href="#" className="text-2xl font-bold text-white">
                            L&F<span className="gradient-text">Portal</span>
                            </a>
                            <p className="text-slate-400 mt-4 max-w-xs">[Your College Name]'s official platform for lost and found items.</p>
                        </div>
                        {/* Links */}
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
                                    <li><a href="#" className="text-slate-400 hover:text-sky-400">About Us</a></li>
                                    <li><a href="#" className="text-slate-400 hover:text-sky-400">Contact Admin</a></li>
                                    <li><a href="#" className="text-slate-400 hover:text-sky-400">College Website</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Socials */}
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
                        &copy; 2024 Your College Name. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}