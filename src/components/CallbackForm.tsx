"use client";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function CallbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    preferredTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", phone: "", preferredTime: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
        <CheckCircle size={36} className="text-green-500" />
        <h3 className="text-base font-semibold text-lu-text">Callback Requested!</h3>
        <p className="text-sm text-lu-muted">Our expert will call you at your preferred time.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-1 text-sm text-lu-blue hover:underline"
        >
          Request another callback
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          placeholder="Your name"
          className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-lu-text mb-1.5">
          Phone <span className="text-lu-coral">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="+91 XXXXX XXXXX"
          className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-lu-text mb-1.5">Preferred Call Time</label>
        <input
          type="text"
          name="preferredTime"
          value={form.preferredTime}
          onChange={handleChange}
          placeholder="e.g. Mon–Fri, 10 AM – 12 PM"
          className="w-full px-4 py-2.5 text-sm border border-lu-border rounded-lg bg-white text-lu-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lu-blue focus:border-transparent transition"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-lu-orange rounded-lg hover:bg-orange-500 disabled:opacity-60 transition-colors"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Requesting…
          </>
        ) : (
          "Request a Callback"
        )}
      </button>
    </form>
  );
}
