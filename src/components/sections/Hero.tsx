"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-20 relative overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl z-10"
      >
        <motion.p variants={item} className="text-neutral-500 font-mono mb-6">
          // Intro
        </motion.p>
        
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12">
          Innovative individual specializing in <span className="text-indigo-400 drop-shadow-md">Web Design, Cloud Computing</span> & <span className="text-indigo-400 drop-shadow-md">Network Infrastructure.</span>
        </motion.h1>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 border-t border-neutral-900 pt-8">
          <div>
            <p className="text-neutral-400 max-w-sm">
              B.Tech IT @ Vinayaka Mission's Research Foundation
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium tracking-wider">
            <span className="flex items-center gap-2"><span className="text-indigo-500">✦</span> WEB DESIGN</span>
            <span className="flex items-center gap-2"><span className="text-indigo-500">✦</span> CLOUD COMPUTING</span>
            <span className="flex items-center gap-2"><span className="text-indigo-500">✦</span> NETWORKING</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-6">
          <a href="#work" className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            See my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#projects" className="flex items-center gap-2 border border-neutral-800 px-6 py-3 rounded-full font-medium hover:border-indigo-500/50 hover:bg-indigo-950/30 transition-colors">
            Projects
          </a>
          <a href="#contact" className="flex items-center gap-2 text-neutral-400 hover:text-indigo-400 transition-colors">
            Contact me
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
