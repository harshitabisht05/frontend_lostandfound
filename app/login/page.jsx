"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Invalid login credentials");

      // Save token + user info
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Login successful:", data);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0B1120] text-slate-200">
      <div className="w-full max-w-md bg-slate-900/50 border border-slate-700 p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Welcome Back to <span className="text-sky-400">L&F Portal</span></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput id="email" type="email" placeholder="your.id@stu.upes.ac.in" value={formData.email} onChange={handleInputChange} label="Email" />
          <FormInput id="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange} label="Password" />

          {error && <p className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded-lg">{error}</p>}

          <button type="submit" disabled={loading} className="w-full py-3 rounded-lg text-lg font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 transition">
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-sky-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
