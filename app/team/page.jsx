// /app/TeamPage.js
"use client";

import Navbar from '../components/Navbar';
import { GitIcon, LinkedinIcon } from '../components/Icons'; // Import GitIcon and LinkedinIcon

// --- Mock Data for Team Members ---
const teamMembers = [
    {
        name: "Harshita Bisht",
        avatar: "/images/team/harshita.jpg",
        social: { git: "https://github.com/harshitabisht05", linkedin: "https://www.linkedin.com/in/harshitabisht0511" }
    },
    {
        name: "Sneha Singh",
        avatar: "/images/team/sneha.jpg",
        social: { git: "https://github.com/snehasingh0707", linkedin: "https://www.linkedin.com/in/sneha0707/" }
    },
    {
        name: "Pradyuman Singh",
        avatar: "/images/team/pradyuman.jpg",
        social: { git: "#", linkedin: "#" }
    },
    {
        name: "Himanshu P.",
        avatar: "/images/team/himanshu.jpg",
        social: { git: "#", linkedin: "#" }
    },
];

// --- Reusable Team Member Card Component ---
function TeamMemberCard({ member }) {
    return (
        <div className="card p-6 rounded-xl text-center flex flex-col items-center hover:shadow-xl hover:shadow-sky-900/20 transition-all duration-300">
            <img 
                // Use the provided local path with a fallback image for the Canvas environment
                src={member.avatar} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/128x128/38bdf8/0B1120?text=👤"; }}
                alt={`Photo of ${member.name}`} 
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-sky-400/50" 
            />
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            {/* Display the role */}
            {member.role && <p className="text-sky-400 font-medium text-sm mb-4">{member.role}</p>}
            
            <div className="flex space-x-4 mt-auto">
                {/* Render Git Icon */}
                {member.social.git && (
                    <a href={member.social.git} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                        <GitIcon className="w-6 h-6" />
                    </a>
                )}
                
                {/* Render LinkedIn Icon */}
                {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
                        <LinkedinIcon className="w-6 h-6" />
                    </a>
                )}
            </div>
        </div>
    );
}

// --- Main Team Page Component ---
export default function TeamPage() {
    return (
        <>
            <Navbar />
            <div className="w-full antialiased pt-24 min-h-screen">
                <main className="py-20">
                    <div className="container mx-auto px-6">
                        <header className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                                Our <span className="gradient-text"> Development Team</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                                The passionate 4th-year students responsible for the design, architecture, and deployment of the FindMyStuff Portal.
                            </p>
                        </header>

                        {/* Team Members Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard key={index} member={member} />
                            ))}
                        </div>

                        {/* Project Documentation CTA */}
                        <section className="mt-20 text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">View Our Source Code</h2>
                            <p className="text-slate-400 mb-6">
                                The project is fully documented and open-source. Explore the repository for technical details and contribution guidelines.
                            </p>
                            <a 
                                href="https://github.com/harshitabisht05/frontend_lostandfound.git"
                                className="bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-sky-500 hover:scale-105 inline-block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project Repository
                            </a>
                        </section>
                    </div>
                </main>

                {/* Footer is omitted for brevity but should be included here */}
            </div>
        </>
    );
}
