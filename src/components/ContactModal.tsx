"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"form" | "submitting" | "success" | "error">("form");

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep("form");
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener("openContactModal", handleOpen);
    return () => {
      window.removeEventListener("openContactModal", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      inquiryType: formData.get("inquiryType"),
      message: formData.get("message"),
    };

    try {
      const resp = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!resp.ok) throw new Error("API Execution Failed");

      setStep("success");
      setTimeout(() => {
        handleClose();
      }, 3500);
    } catch (error) {
      console.error(error);
      setStep("error");
      setTimeout(() => {
        setStep("form");
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0A101A] border border-white/10 ring-1 ring-white/5 shadow-[0_30px_100px_rgba(0,0,0,1)] rounded-3xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-white/5">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Initiate Project</h3>
                <p className="text-sm text-gray-400 mt-1">Direct channel to OneLU engineering & operations</p>
              </div>
              <button onClick={handleClose} className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 relative min-h-[400px] flex flex-col justify-center">
              
              {step === "form" && (
                <motion.form 
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)", position: "absolute" }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                      <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-onelu-blue/50 focus:ring-1 focus:ring-onelu-blue/50 transition-all font-medium" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Work Email</label>
                      <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-onelu-blue/50 focus:ring-1 focus:ring-onelu-blue/50 transition-all font-medium" placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company / Organization</label>
                    <input name="company" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-onelu-blue/50 focus:ring-1 focus:ring-onelu-blue/50 transition-all font-medium" placeholder="Organization name" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Nature of Inquiry</label>
                    <div className="relative">
                      <select required name="inquiryType" defaultValue="" className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onelu-blue/50 focus:ring-1 focus:ring-onelu-blue/50 transition-all font-medium">
                        <option value="" disabled className="bg-[#0A101A] text-gray-400">Select inquiry type...</option>
                        <option value="custom" className="bg-[#0A101A]">Custom System Development</option>
                        <option value="sahsaathi" className="bg-[#0A101A]">Integrating Sah Saathi System</option>
                        <option value="copydude" className="bg-[#0A101A]">Integrating CopyDude Kiosks</option>
                        <option value="hardware" className="bg-[#0A101A]">Hardware / Infrastructure Partnership</option>
                        <option value="general" className="bg-[#0A101A]">General Inquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Operational Challenge</label>
                    <textarea required name="message" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-onelu-blue/50 focus:ring-1 focus:ring-onelu-blue/50 transition-all font-medium resize-none" placeholder="Briefly describe the operational friction or system you need built..." />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-300 rounded-xl bg-white hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      Submit Request
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      Or email us directly at <a href="mailto:1lunextgenprivatelimited@gmail.com" className="text-onelu-blue hover:underline">1lunextgenprivatelimited@gmail.com</a>
                    </p>
                  </div>
                </motion.form>
              )}

              {step === "submitting" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <Loader2 className="w-12 h-12 text-onelu-blue animate-spin mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Transmitting Data</h3>
                  <p className="text-gray-400">Establishing secure connection to our systems...</p>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Transmission Received</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Our engineering team has received your project data. We are reviewing your operational challenge and will analyze integration pathways shortly.
                  </p>
                </motion.div>
              )}

              {step === "error" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(248,113,113,0.2)]">
                    <X className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Transmission Failed</h3>
                  <p className="text-gray-400 text-lg">
                    There was an issue processing the request over the network. Please email us directly at 1lunextgenprivatelimited@gmail.com.
                  </p>
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
