"use client";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/5 pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-32 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-onelu-blue/10 via-transparent to-onelu-red/5 rounded-[3rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
        <div className="relative rounded-[3rem] bg-[#0A101A] border border-white/10 ring-1 ring-white/5 p-16 md:p-24 text-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(30,136,229,0.15),transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(255,82,82,0.1),transparent_70%)] pointer-events-none" />
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">Ready to scale?</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-14 tracking-wide leading-relaxed">
            Whether deploying infrastructural systems or solving physical-tech operational limits, we operate at the edge of possibility.
          </p>
          <button onClick={() => window.dispatchEvent(new Event('openContactModal'))} className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 transform cursor-pointer">
            Integrate With Us
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 text-gray-500 text-sm font-medium tracking-wide">
        <div className="flex flex-col gap-3">
          <span className="text-white text-xl font-bold tracking-tight">1 <span className="text-onelu-blue">LU</span> Next Gen Technologies</span>
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        
        <div className="flex flex-col gap-3 md:items-center">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Direct Contact</span>
          <a href="mailto:1lunextgenprivatelimited@gmail.com" className="text-white hover:text-onelu-blue transition-colors text-base break-all">
            1lunextgenprivatelimited@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Corporate Identity</span>
          <span>CIN: U62013CG2023PTC018197</span>
          <span>Chhattisgarh, India</span>
        </div>
      </div>
    </footer>
  );
}
