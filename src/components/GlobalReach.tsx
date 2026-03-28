"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function GlobalReach() {
  return (
    <section className="relative py-32 border-t border-onelu-border/50 overflow-hidden">
      {/* Abstract map pattern background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-20 h-20 mx-auto rounded-full bg-onelu-surface border border-onelu-border flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <Globe className="w-10 h-10 text-gray-300" />
        </motion.div>

        <motion.h2 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Rooted in Chhattisgarh. <br />
          <span className="text-onelu-blue">Scaling Globally.</span>
        </motion.h2>

        <motion.p 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
        >
          Operating independently or in strict collaboration to deploy technological excellence wherever it is needed. Our infrastructure bridges local expertise with international standards.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="px-8 py-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all font-medium">
            Contact for Partnerships
          </button>
        </motion.div>
      </div>
    </section>
  );
}
