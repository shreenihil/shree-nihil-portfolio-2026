"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-neutral-900 bg-black/50 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter">SN</span>
        <span className="hidden md:inline text-neutral-500">✦</span>
        <span className="hidden md:inline text-sm tracking-widest text-neutral-400">SHREE NIHIL VIJAYAN</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="#work" className="text-neutral-400 hover:text-white transition-colors">Work</Link>
        <Link href="#projects" className="text-neutral-400 hover:text-white transition-colors">Projects</Link>
        <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link>
      </div>

      <button className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </button>
    </motion.nav>
  );
}
