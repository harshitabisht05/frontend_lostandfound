"use client";

import Navbar from "../components/Navbar"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login"); // Redirect if not logged in
      return;
    }

    // Fetch user profile data using token
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Unauthorized");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Error fetching user:", err);
        localStorage.removeItem("authToken");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-300">
        Loading your dashboard...
      </div>
    );
  }

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
      `}</style>

      <div className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg w-full max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to <span className="gradient-text">L&F Portal</span>
          </h1>

          <p className="text-lg text-slate-400 mb-6">
            Hello, <span className="text-sky-400 font-medium">{user?.fullName || "User"}</span> 👋
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <a
              href="/lost-items"
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-sky-500 hover:scale-105 transition-transform"
            >
              🕵️ View Lost Items
            </a>
            <a
              href="/report"
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-sky-500 hover:scale-105 transition-transform"
            >
              📦 Report Found Item
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
