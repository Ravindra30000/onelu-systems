"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Database } from "lucide-react";

export default function Capabilities() {
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
    <section id="systems" className="relative py-32 px-6 max-w-7xl mx-auto w-full border-t border-onelu-border/50">
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Core Capabilities
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0">
          We engineer sophisticated systems across the entire technology stack, delivering performance and precision.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Card 1: Software & OS - Spans 2 columns */}
        <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-onelu-surface border border-onelu-border p-8 hover:border-onelu-blue/50 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-onelu-blue/10 blur-[80px] rounded-full group-hover:bg-onelu-blue/20 transition-all duration-500" />
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
            <div className="w-14 h-14 rounded-lg bg-onelu-blue/10 flex items-center justify-center border border-onelu-blue/20 mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-7 h-7 text-onelu-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Software & OS Engineering</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Publishing and distributing robust packaged applications and operating systems designed for high-performance and scalability.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Tailored Development - Spans 1 column */}
        <motion.div variants={itemVariants} className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-onelu-surface border border-onelu-border p-8 hover:border-onelu-red/40 transition-colors">
          <div className="absolute top-0 right-0 w-40 h-40 bg-onelu-red/10 blur-[60px] rounded-full group-hover:bg-onelu-red/20 transition-all duration-500" />
          <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
            <div className="w-14 h-14 rounded-lg bg-onelu-red/10 flex items-center justify-center border border-onelu-red/20 mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-onelu-red" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Tailored Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Precision coding, debugging, and custom implementations engineered for unique enterprise requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Data Processing - Spans 3 columns */}
        <motion.div variants={itemVariants} className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-onelu-surface border border-onelu-border p-8 hover:border-onelu-orange/50 transition-colors">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-onelu-orange/5 blur-[100px] rounded-full group-hover:bg-onelu-orange/10 transition-all duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
            <div className="max-w-xl">
              <div className="w-14 h-14 rounded-lg bg-onelu-orange/10 flex items-center justify-center border border-onelu-orange/20 mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-onelu-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Data Processing & Analytics</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                End-to-end data pipelines involving collection, secure storage, and advanced processing to generate actionable analytics and comprehensive reporting.
              </p>
            </div>
            
            {/* Visual element for data */}
            <div className="flex-1 w-full h-48 border border-white/5 bg-black/20 rounded-xl relative overflow-hidden flex items-end justify-center gap-2 p-6">
               <div className="w-8 h-[40%] bg-onelu-orange/80 rounded-t-sm" />
               <div className="w-8 h-[60%] bg-onelu-orange/60 rounded-t-sm" />
               <div className="w-8 h-[30%] bg-onelu-orange/40 rounded-t-sm" />
               <div className="w-8 h-[80%] bg-onelu-blue/80 rounded-t-sm" />
               <div className="w-8 h-[100%] bg-onelu-blue rounded-t-sm shadow-[0_0_15px_rgba(30,136,229,0.5)]" />
               
               {/* Grid lines */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_20px] pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
