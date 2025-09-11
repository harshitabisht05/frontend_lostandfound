'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white px-6">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg">
          FindIt 🔎
        </h1>
        <p className="mt-4 text-lg text-indigo-200 leading-relaxed">
          Lost something? Found something?  
          <br /> FindIt makes it easier to reconnect people with their belongings on campus.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => router.push('/dashboard')}
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 rounded-full font-semibold shadow-md transition"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => router.push('/report')}
                className="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-200 rounded-full font-semibold shadow-md transition"
              >
                Report an Item
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push('/signup')}
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 rounded-full font-semibold shadow-md transition"
              >
                Get Started
              </button>
              <button
                onClick={() => router.push('/about')}
                className="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-200 rounded-full font-semibold shadow-md transition"
              >
                Learn More
              </button>
            </>
          )}
        </div>
      </motion.div>

      {/* Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-12"
      >
        <img
          src="/lost-found.svg" // 👈 place file in /public
          alt="Lost and Found Illustration"
          className="w-80 drop-shadow-lg"
        />
      </motion.div>
    </main>
  );
}
