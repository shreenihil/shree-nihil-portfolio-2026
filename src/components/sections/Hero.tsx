"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [timeStr, setTimeStr] = useState("13:28:13");

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      } as const;
      setTimeStr(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Lime & Emerald Radial Glow Spheres */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full glow-lime opacity-40 pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full glow-emerald opacity-30 pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none z-0" />

      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Hero Content (7 Columns) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-[0.20em] text-white/40">
              AI-ASSISTED BUILDER
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] leading-[0.95] md:leading-[0.85] font-bold tracking-[-0.06em] text-[#ebebeb]"
          >
            Shree Nihil
            <br />
            <span className="font-extrabold">Vijayan</span>
          </motion.h1>

          {/* Subheading / Role with Lime->White Gradient */}
          <motion.div
            variants={itemVariants}
            className="mt-6 text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white/80"
          >
            I am a{" "}
            <span className="italic font-bold bg-gradient-to-r from-lime via-emerald to-white bg-clip-text text-transparent">
              Web & Cloud Enthusiast
            </span>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-xl font-sans"
          >
            Innovative individual with strong skills in web design and cloud
            computing, known for effective networking and communication, contributing
            to successful project delivery and collaboration across teams.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-5 items-center"
          >
            {/* View Projects - Spinning gradient border style */}
            <a
              href="#projects"
              className="spinning-border-btn px-8 py-4 rounded-full text-sm font-mono font-bold uppercase tracking-[0.15em] text-white"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Mockup stack with AI Cursor (5 Columns) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12">
          
          {/* Card Stack Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[400px] h-[360px] md:h-[420px] animate-float"
          >
            
            {/* Card 1 (Bottom, background) */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 glass rounded-[2rem] opacity-35 bg-emerald/5 flex flex-col justify-end p-6 border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">CLOUD STATUS</span>
                <span className="text-emerald text-xs">99.9%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-emerald rounded-full"></div>
              </div>
            </div>

            {/* Card 2 (Middle) */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 glass rounded-[2rem] opacity-60 bg-black/60 flex flex-col justify-between p-6">
              <div className="flex justify-between items-start">
                <Terminal size={24} className="text-lime/60" />
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em]">DEPL_ID: 94A-21</span>
              </div>
              <div className="space-y-2 mt-4 font-mono text-[10px] text-white/30">
                <p className="text-lime/50">$ agy deploy --prod</p>
                <p>&gt; checking bundle artifacts...</p>
                <p>&gt; uploading to edge network...</p>
                <p className="text-emerald">&gt; system active & secured.</p>
              </div>
            </div>

            {/* Card 3 (Top, main card) */}
            <div className="absolute inset-0 glass rounded-[2rem] bg-gradient-to-b from-[#111] to-[#080808] p-6 shadow-2xl flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[8px] font-mono text-lime uppercase tracking-widest">
                  SYS_CTRL
                </div>
              </div>

              {/* Central Graphic */}
              <div className="my-6 flex flex-col items-center justify-center py-6 bg-white/[0.01] rounded-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-lime/5 to-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Cpu size={48} className="text-lime/80 mb-3 animate-pulse" />
                <span className="font-mono text-[10px] text-white/60 uppercase tracking-[0.2em]">CORE ARCHITECTURE</span>
                <span className="text-[9px] text-white/30 font-mono mt-1">AWS &bull; NEXT.JS &bull; TAILWIND</span>
              </div>

              {/* Info Foot */}
              <div className="flex items-center justify-between text-xs text-white/60">
                <span className="font-sans">Coimbatore, IN</span>
                <span className="font-mono text-lime font-bold">
                  {mounted ? timeStr : "13:28:13"} IST
                </span>
              </div>
            </div>

            {/* Floating AI Cursor Label */}
            <div className="absolute top-[40%] right-[-15px] z-20 flex items-center gap-1.5 bg-lime text-black font-mono text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-black/10 select-none">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-12"
              >
                <path
                  d="M1 1L6.5 15L9.5 9.5L15 6.5L1 1Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              AI CURSOR
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
