"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandWatermark() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 left-6 z-50 pointer-events-auto group hidden md:flex items-center gap-3 bg-[#0A101A]/80 backdrop-blur-md border border-white/5 py-2 px-3 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)] cursor-pointer hover:border-white/20 transition-all duration-300"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow duration-300 bg-white flex items-center justify-center p-[2px]">
        <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
            src="/onelu-logo.png"
            alt="OneLU Engine"
            fill
            className="object-contain"
            sizes="32px"
            />
        </div>
      </div>
      <span className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase group-hover:text-white transition-colors duration-300 pr-2">
        1 <span className="text-onelu-blue">LU</span> Systems
      </span>
    </motion.div>
  );
}
