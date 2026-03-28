"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-onelu-bg/70 border-b border-onelu-border"
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(30,136,229,0.15)] overflow-hidden group-hover:scale-110 group-hover:border-onelu-blue/50 transition-all duration-300 flex items-center justify-center p-1">
          <div className="relative w-full h-full">
            <Image src="/onelu-logo.png" alt="OneLU Logo" fill className="object-contain" />
          </div>
        </div>
        <span className="text-xl font-bold tracking-wide text-white group-hover:opacity-80 transition-opacity duration-300">
          1 <span className="text-onelu-blue">LU</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="#what-we-do" className="hover:text-white transition-colors">What We Do</Link>
        <Link href="#products" className="hover:text-white transition-colors">Products</Link>
        <Link href="#philosophy" className="hover:text-white transition-colors">Philosophy</Link>
      </div>

      <div>
        <button 
          onClick={() => window.dispatchEvent(new Event('openContactModal'))}
          className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 rounded-full group bg-onelu-surface border border-onelu-blue/50 hover:border-onelu-blue hover:bg-onelu-blue/10 overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-onelu-blue pointer-events-none"></span>
          <span className="relative">Contact Us</span>
        </button>
      </div>
    </motion.nav>
  );
}
