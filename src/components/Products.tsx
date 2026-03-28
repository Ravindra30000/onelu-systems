"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="products" className="relative py-32 px-6 max-w-7xl mx-auto w-full border-t border-white/5">
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
          Our Products
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 tracking-wide">
          The autonomous systems and physical-tech products we own and operate.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Sah Saathi */}
        <motion.div variants={itemVariants} className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1A0A0B] to-[#0A0505] border border-white/5 ring-1 ring-white/5 hover:border-onelu-red/30 hover:ring-onelu-red/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,68,68,0.15)] transition-all duration-700 p-10 flex flex-col justify-between h-auto md:h-[540px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,82,82,0.15),transparent_60%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs font-semibold mb-10 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-onelu-red animate-pulse" />
              Infra / Coordination System
            </div>
            
            <div className="relative w-28 h-28 mb-10 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(206,17,65,0.4)] border border-white/10 ring-1 ring-white/5 bg-[#ce1141] flex items-center justify-center group-hover:scale-[1.05] transition-transform duration-700">
              <div className="relative w-full h-full">
                <Image src="/sahsathi-logo.png" alt="Sah Saathi Logo" fill className="object-cover" />
              </div>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight group-hover:text-onelu-red transition-colors duration-500">Sah Saathi</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
              Solving railway coordination challenges. A digital proxy platform connecting porters and passengers to solve real-world station chaos.
            </p>
            
            <ul className="space-y-4 text-sm text-gray-300 font-medium tracking-wide">
              <li className="flex items-center gap-4">
                <div className="w-1 h-3 rounded-full bg-onelu-red/60" /> Digital porter booking platform
              </li>
              <li className="flex items-center gap-4">
                <div className="w-1 h-3 rounded-full bg-onelu-red/60" /> Government-backed initiative
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CopyDude */}
        <motion.div variants={itemVariants} className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A101A] to-[#05070A] border border-white/5 ring-1 ring-white/5 hover:border-onelu-blue/30 hover:ring-onelu-blue/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(43,94,167,0.15)] transition-all duration-700 p-10 flex flex-col justify-between h-auto md:h-[540px]">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(43,94,167,0.15),transparent_60%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
           
           <div className="relative z-10 h-full flex flex-col">
              <div className="self-start inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs font-semibold mb-10 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-onelu-blue animate-pulse" />
                Smart Infra System
              </div>
              
              <div className="relative w-28 h-28 mb-10 rounded-3xl bg-white overflow-hidden shadow-[0_10px_40px_rgba(43,94,167,0.3)] border border-white/10 ring-1 ring-white/5 flex items-center justify-center group-hover:scale-[1.05] transition-transform duration-700">
                 <div className="relative w-full h-full scale-[1.2]">
                   <Image src="/copydude-logo.png" alt="CopyDude Logo" fill className="object-contain" />
                 </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight group-hover:text-onelu-blue transition-colors duration-500">CopyDude</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 flex-1">
                Redefining the document printing experience. Making secure printing instant and frictionless anywhere utilizing autonomous hardware.
              </p>

              <ul className="space-y-4 text-sm text-gray-300 font-medium tracking-wide">
                <li className="flex items-center gap-4">
                  <div className="w-1 h-3 rounded-full bg-onelu-blue/60" /> Cloud-based smart print kiosk
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-1 h-3 rounded-full bg-onelu-blue/60" /> Upload → Walk → Print Architecture
                </li>
              </ul>
           </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[1.5rem] bg-white/[0.02] border border-white/5 ring-1 ring-white/5 px-10 py-10 flex items-center justify-center transition-colors duration-500 hover:bg-white/[0.04]">
           <div className="flex items-center gap-5 text-gray-500 font-medium tracking-widest text-sm uppercase">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-600"></span>
             </span>
             More systems in active development
           </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
