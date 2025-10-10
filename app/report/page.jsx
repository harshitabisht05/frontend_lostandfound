"use client";
import { useState, useEffect } from "react";

// --- ICONS ---
const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const HelpCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const ArchiveIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="5" x="2" y="3" rx="1" />
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <path d="M10 12h4" />
  </svg>
);

// --- Form Input Component ---
const FormInput = ({ id, label, type = "text", placeholder, required = true, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"
    />
  </div>
);

// --- Modal ---
const ReportModal = ({ itemType, onClose }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "Electronics",
    location: "",
    date: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  if (!itemType) return null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("itemName", formData.itemName);
      data.append("category", formData.category);
      data.append("location", formData.location);
      data.append("date", formData.date);
      data.append("type", itemType);
      if (formData.description) data.append("description", formData.description);
      if (formData.image) data.append("image", formData.image);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/items/`, {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setMessage("Report submitted successfully!");
        setFormData({
          itemName: "",
          category: "Electronics",
          location: "",
          date: "",
          description: "",
          image: null,
        });
        setPreview(null);
      } else {
        const errorData = await res.json();
        setMessage(errorData.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-900/90 border border-slate-700 rounded-3xl w-full max-w-lg shadow-2xl p-8 transform transition-all duration-300 scale-95 animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition">
          <XIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">
          {itemType === "lost" ? "Report a Lost Item" : "Report a Found Item"}
        </h2>
        <p className="text-slate-400 mb-6">
          {itemType === "lost"
            ? "Provide details about the item you lost."
            : "Describe the item you found."}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <FormInput id="itemName" label="Item Name" placeholder="e.g., iPhone 14 Pro" value={formData.itemName} onChange={handleChange} />
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition">
              <option>Electronics</option>
              <option>ID Cards & Documents</option>
              <option>Books & Notebooks</option>
              <option>Clothing & Accessories</option>
              <option>Keys</option>
              <option>Other</option>
            </select>
          </div>
          <FormInput id="location" label={itemType === "lost" ? "Last Seen Location" : "Location Found"} value={formData.location} onChange={handleChange} />
          <FormInput id="date" label={itemType === "lost" ? "Date Lost" : "Date Found"} type="date" value={formData.date} onChange={handleChange} />
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-2">Description</label>
            <textarea id="description" name="description" rows="3" placeholder="Add details..." value={formData.description} onChange={handleChange} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-500 focus:outline-none transition"></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-slate-300 mb-2">Upload Image (Optional)</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} className="w-full text-sm text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-700 file:text-sky-300 hover:file:bg-slate-600" />
            {preview && <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-lg border border-slate-600" />}
          </div>

          {message && <p className={`mt-2 text-sm ${message.includes("successfully") ? "text-green-400" : "text-red-400"}`}>{message}</p>}

          <div className="pt-4 flex justify-end">
            <button type="submit" disabled={loading} className="cta-button text-white font-bold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
              {loading ? "Submitting..." : "Submit Report"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

// --- Main Report Page ---
export default function ReportPage() {
  const [modalType, setModalType] = useState(null);

  // 🔒 Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Lost or Found Something?</h1>
        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
          Help our community by reporting items you found or lost.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-6 mb-20">
        <div onClick={() => setModalType("lost")} className="bg-slate-800 border border-slate-700 p-10 rounded-3xl text-center cursor-pointer transition-all duration-300 card-hover">
          <div className="mx-auto bg-slate-900 rounded-full w-24 h-24 flex items-center justify-center mb-6 border-2 border-slate-700">
            <HelpCircleIcon className="w-12 h-12 text-sky-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">I Lost Something</h2>
          <p className="text-slate-400 text-lg">File a report to help us find your lost item.</p>
        </div>

        <div onClick={() => setModalType("found")} className="bg-slate-800 border border-slate-700 p-10 rounded-3xl text-center cursor-pointer transition-all duration-300 card-hover">
          <div className="mx-auto bg-slate-900 rounded-full w-24 h-24 flex items-center justify-center mb-6 border-2 border-slate-700">
            <ArchiveIcon className="w-12 h-12 text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">I Found Something</h2>
          <p className="text-slate-400 text-lg">Post details about an item you found.</p>
        </div>
      </div>

      <ReportModal itemType={modalType} onClose={() => setModalType(null)} />
    </>
  );
}
