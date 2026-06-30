"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="pt-32 pb-8 border-t border-neutral-900">
      <div className="px-6 md:px-24 mb-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-500 font-mono mb-6"
        >
          // Contact me
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 drop-shadow-[0_0_40px_rgba(79,70,229,0.2)]"
        >
          DROP A MESSAGE<br />IF YOU VIBE.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-neutral-900">
          <div>
            <h4 className="text-neutral-500 font-mono text-sm mb-4">Location</h4>
            <p className="text-xl font-medium group-hover:text-indigo-400 transition-colors cursor-default">Coimbatore, India<br />641044</p>
          </div>
          <div>
            <h4 className="text-neutral-500 font-mono text-sm mb-4">Email</h4>
            <a href="mailto:shreenihil@gmail.com" className="group flex items-center gap-2 text-xl font-medium hover:text-indigo-400 transition-colors">
              shreenihil@gmail.com
              <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
          <div>
            <h4 className="text-neutral-500 font-mono text-sm mb-4">Phone</h4>
            <a href="tel:+919345855114" className="text-xl font-medium hover:text-indigo-400 transition-colors">
              +91 9345855114
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 pt-8 border-t border-neutral-900">
        <p>SN ✦ SHREE NIHIL VIJAYAN © 2026 ALL RIGHTS RESERVED</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
