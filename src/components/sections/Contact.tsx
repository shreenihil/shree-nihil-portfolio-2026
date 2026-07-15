"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 md:px-12"
    >
      {/* Glow Spheres */}
      <div className="absolute bottom-[10%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full glow-lime opacity-30 pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full glow-emerald opacity-20 pointer-events-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40 block">
          GET IN TOUCH
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white font-sans">
          Let's Build
          <br />
          <span className="bg-gradient-to-r from-lime to-emerald bg-clip-text text-transparent">
            Something
          </span>
        </h2>

        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
          Have an interesting project, dynamic web design idea, or cloud infrastructure setup you need help with? Reach out directly via email or call me.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          {/* Lime Oversized Mailto Button */}
          <a
            href="mailto:shreenihil@gmail.com"
            className="group flex items-center justify-center gap-3 bg-lime text-black font-sans font-bold text-base md:text-lg px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(204,255,0,0.30)] hover:shadow-[0_0_50px_rgba(204,255,0,0.45)] w-full sm:w-auto"
          >
            <Mail size={20} />
            shreenihil@gmail.com
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/shree-nihil-vijayan-a03993409?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-mono text-xs tracking-widest uppercase text-white/60 hover:text-lime py-3.5 px-6 rounded-full border border-white/10 hover:border-lime/30 transition-all-custom w-full sm:w-auto bg-white/[0.02]"
          >
            <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LINKEDIN
          </a>

          {/* Secondary Phone Link */}
          <a
            href="tel:+919345855114"
            className="flex items-center justify-center gap-2 font-mono text-xs tracking-widest uppercase text-white/60 hover:text-lime py-3.5 px-6 rounded-full border border-white/10 hover:border-lime/30 transition-all-custom w-full sm:w-auto bg-white/[0.02]"
          >
            <Phone size={14} />
            +91 9345855114
          </a>
        </div>
      </div>
    </section>
  );
}
