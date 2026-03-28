"use client";

import { motion } from "framer-motion";

const BuildSystemsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 transition-transform duration-700 group-hover:scale-[1.15] relative z-10">
    <defs>
      <linearGradient id="blueGrad" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>
    {/* 3D Isometric Infrastructure Wireframe */}
    <path d="M20 8L32 14L20 20L8 14L20 8Z" stroke="url(#blueGrad)" strokeWidth="1.25" strokeLinejoin="miter" />
    <path d="M8 14V24" stroke="url(#blueGrad)" strokeWidth="1.25" strokeOpacity="0.4" />
    <path d="M32 14V24" stroke="url(#blueGrad)" strokeWidth="1.25" strokeOpacity="0.4" />
    <path d="M20 20V30" stroke="url(#blueGrad)" strokeWidth="1.25" />
    <path d="M8 24L20 30L32 24" stroke="url(#blueGrad)" strokeWidth="1.25" strokeLinejoin="miter" />
  </svg>
);

const LaunchProductsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 transition-transform duration-700 group-hover:scale-[1.15] relative z-10">
    <defs>
      <linearGradient id="redGrad" x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F87171" stopOpacity="0.9" />
        <stop offset="1" stopColor="#7F1D1D" />
      </linearGradient>
    </defs>
    {/* Clean Orbital/Telemetry Launch Vectors */}
    <path d="M12 28C12 28 16 12 28 12" stroke="url(#redGrad)" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="2 4"/>
    <path d="M8 32C8 32 15 15 32 8" stroke="url(#redGrad)" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="32" cy="8" r="2.5" fill="url(#redGrad)" />
    <circle cx="12" cy="28" r="1.5" fill="url(#redGrad)" fillOpacity="0.5"/>
  </svg>
);

const ScaleInfrastructureIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 transition-transform duration-700 group-hover:scale-[1.15] relative z-10">
    <defs>
      <linearGradient id="orangeGrad" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="1" stopColor="#9A3412" />
      </linearGradient>
    </defs>
    {/* Micro-Services Network Expansion Node */}
    <circle cx="20" cy="20" r="5" fill="url(#orangeGrad)" fillOpacity="0.1" stroke="url(#orangeGrad)" strokeWidth="1.25" />
    <circle cx="20" cy="20" r="1.5" fill="url(#orangeGrad)" />
    
    <path d="M20 15V8" stroke="url(#orangeGrad)" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5"/>
    <circle cx="20" cy="6" r="1.5" fill="url(#orangeGrad)" />
    
    <path d="M20 25V32" stroke="url(#orangeGrad)" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.5"/>
    <circle cx="20" cy="34" r="1.5" fill="url(#orangeGrad)" />
    
    <path d="M15 20H8" stroke="url(#orangeGrad)" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="6" cy="20" r="1.5" fill="url(#orangeGrad)" />
    
    <path d="M25 20H32" stroke="url(#orangeGrad)" strokeWidth="1.25" strokeLinecap="round" />
    <circle cx="34" cy="20" r="1.5" fill="url(#orangeGrad)" />
  </svg>
);

export default function WhatWeDo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="what-we-do" className="relative py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          What We Build
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
          We operate at the intersection of bits and atoms, creating foundational technology.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
      >
        <motion.div variants={itemVariants} className="group flex flex-col items-start border-l border-white/5 pl-8 relative">
          <div className="absolute w-1 h-full bg-gradient-to-b from-onelu-blue via-transparent to-transparent left-[-1px] top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="mb-8 relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D182A] to-transparent border border-white/5 ring-1 ring-white/5 group-hover:border-onelu-blue/30 group-hover:ring-onelu-blue/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(30,136,229,0.2)] transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(30,136,229,0.25),transparent_60%)] pointer-events-none" />
            <BuildSystemsIcon />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Build Systems</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            We design and develop scalable software systems engineered for high-availability and operational precision.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="group flex flex-col items-start border-l border-white/5 pl-8 relative">
          <div className="absolute w-1 h-full bg-gradient-to-b from-onelu-red via-transparent to-transparent left-[-1px] top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="mb-8 relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2A0D0F] to-transparent border border-white/5 ring-1 ring-white/5 group-hover:border-onelu-red/30 group-hover:ring-onelu-red/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,82,82,0.2)] transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,82,82,0.25),transparent_60%)] pointer-events-none" />
            <LaunchProductsIcon />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Launch Products</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            We create and operate technology-driven products that function autonomously and solve defined challenges.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="group flex flex-col items-start border-l border-white/5 pl-8 relative">
          <div className="absolute w-1 h-full bg-gradient-to-b from-onelu-orange via-transparent to-transparent left-[-1px] top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="mb-8 relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2A1D0D] to-transparent border border-white/5 ring-1 ring-white/5 group-hover:border-onelu-orange/30 group-hover:ring-onelu-orange/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,152,0,0.2)] transition-all duration-700 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,152,0,0.25),transparent_60%)] pointer-events-none" />
            <ScaleInfrastructureIcon />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">Scale Infrastructure</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            We build solutions that interface with physical reality, ensuring they work flawlessly in real-world environments.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
