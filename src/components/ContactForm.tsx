"use client";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  { value: "web", label: "Web Development" },
  { value: "app", label: "App Development" },
  { value: "dsc", label: "Digital Signature Certificate (DSC)" },
  { value: "workshop", label: "Workshops & Training" },
  { value: "logo", label: "Logo & Brand Design" },
  { value: "general", label: "General Inquiry" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "", inquiryType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-green-500" />
        <h3 className="text-xl font-semibold text-lu-text">Message Received!</h3>
        <p className="text-lu-muted max-w-sm">
          We&apos;ll get back to you within 24 hours with a detailed quote and next steps.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-lu-blue hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-lu-text mb-1.5">
            Name <span className="text-lu-coral">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-lu-text mb-1.5">
            Email <span className="text-lu-coral">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-lu-text mb-1.5">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-lu-text mb-1.5">Company / Organisation</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-lu-text mb-1.5">Service Interest</label>
        <select
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
        >
          <option value="">Select a service…</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-lu-text mb-1.5">
          Message <span className="text-lu-coral">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project or what you need help with…"
          className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-lu-blue rounded-lg hover:bg-blue-700 disabled:opacity-60 transition-colors"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>

      <p className="text-xs text-lu-muted text-center">
        We respond within 24 hours with a detailed quote.
      </p>
    </form>
  );
}
