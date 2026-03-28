"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Precision Structural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_40%,transparent_100%)] pointer-events-none" />

      {/* Deep Central System Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-onelu-blue/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-onelu-red/10 blur-[100px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="group relative inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-400 mb-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-onelu-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-onelu-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4facfe]"></span>
          </span>
          <span className="relative font-medium tracking-wide">Operating in physical-tech and digital infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 max-w-4xl"
        >
          Building systems that power real-world operations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide"
        >
          From digital platforms to physical-tech hardware, we design and scale autonomous products that solve foundational challenges worldwide.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#what-we-do" className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-500 rounded-xl bg-[#0D182A]/80 border border-white/10 ring-1 ring-white/5 hover:border-onelu-blue/40 hover:ring-onelu-blue/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(30,136,229,0.25)] overflow-hidden backdrop-blur-xl">
            <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,136,229,0.2),transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative flex items-center gap-2">Explore the Engine</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
