"use client";

import { useState } from "react";

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
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateCollegeEmail = (email) => /^[\w-\.]+@(?:stu\.)?upes\.ac\.in$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateCollegeEmail(formData.email)) {
      setError("Please use a valid UPES college email (e.g., your.id@stu.upes.ac.in)");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      // Save token and user
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("✅ Account created! Redirecting...");
      setTimeout(() => (window.location.href = "/dashboard"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0B1120] text-slate-200">
      <div className="w-full max-w-md bg-slate-900/50 border border-slate-700 p-8 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">
          Create Your <span className="text-sky-400">L&F Portal</span> Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput id="fullName" type="text" placeholder="Sneha Sharma" value={formData.fullName} onChange={handleInputChange} label="Full Name" />
          <FormInput id="email" type="email" placeholder="your.id@stu.upes.ac.in" value={formData.email} onChange={handleInputChange} label="College Email" />
          <FormInput id="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleInputChange} label="Password" />
          <FormInput id="confirmPassword" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={handleInputChange} label="Confirm Password" />

          {error && <p className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded-lg">{error}</p>}
          {success && <p className="text-green-400 text-sm text-center bg-green-900/20 p-2 rounded-lg">{success}</p>}

          <button type="submit" disabled={loading} className="w-full py-3 rounded-lg text-lg font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:scale-105 transition">
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-sky-400 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
}

