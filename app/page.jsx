'use client';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen 
        bg-gradient-to-br from-purple-100 to-purple-400 px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-black to-purple-700 drop-shadow-lg">
          LOST & FOUND
        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
          A simple portal for students to report, search, and recover lost items 
          on campus. Stay connected and help each other find what’s missing.
        </p>
      </div>
      <Footer />
    </>
  );
}
