"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="philosophy" className="relative py-32 px-6 max-w-5xl mx-auto w-full border-t border-white/5">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">How We Think</h2>
      </div>

      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="relative border-l border-white/10 ml-4 md:ml-8 space-y-24">
        {/* Node 1 */}
        <motion.div variants={itemVariants} className="relative pl-12 md:pl-20">
          <div className="absolute w-4 h-4 bg-[#050505] border-2 border-onelu-blue rounded-full -left-[8.5px] top-2 shadow-[0_0_15px_rgba(30,136,229,0.5)]" />
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-snug">Radical Scale Requires Physical Context</h3>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            We do not build typical SaaS. Software bound entirely by the screen has intrinsic limits. We build operational backbones that interface deeply with physical environments.
          </p>
        </motion.div>

        {/* Node 2 */}
        <motion.div variants={itemVariants} className="relative pl-12 md:pl-20">
          <div className="absolute w-4 h-4 bg-[#050505] border-2 border-onelu-red rounded-full -left-[8.5px] top-2 shadow-[0_0_15px_rgba(255,82,82,0.5)]" />
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-snug">Own the Problem, Control the Asset</h3>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            We do not operate as an agency. We design, fund, build, and operate foundational tech products that solve explicit, undeniable operational chaos.
          </p>
        </motion.div>

        {/* Node 3 */}
        <motion.div variants={itemVariants} className="relative pl-12 md:pl-20">
          <div className="absolute w-4 h-4 bg-[#050505] border-2 border-onelu-orange rounded-full -left-[8.5px] top-2 shadow-[0_0_15px_rgba(255,152,0,0.5)]" />
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-snug">Systemic Impact Over Novelty</h3>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Many critical global problems are operational, not just digital. We deploy engineered systems that seamlessly connect people, processes, and precision technology.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
