"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[1400px] glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-lime rounded-xl flex items-center justify-center font-bold text-black text-xl font-sans transition-all duration-300 group-hover:rotate-6">
              S
            </div>
            <span className="font-mono text-xs tracking-[0.1em] font-bold text-white hidden sm:block">
              SHREE NIHIL VIJAYAN - DEV
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-[0.2em] uppercase text-white/60 hover:text-lime transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Status Tag */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-[0.2em] text-[#ebebeb]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
              </span>
              AVAILABLE FOR WORK
            </div>

            {/* Contact CTA with spinning border */}
            <a
              href="#contact"
              className="spinning-border-btn px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[8px] font-mono tracking-[0.2em] text-[#ebebeb]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime"></span>
              </span>
              ACTIVE
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-40 md:hidden glass rounded-3xl p-6 flex flex-col gap-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono tracking-[0.2em] uppercase text-white/60 hover:text-lime py-2 border-b border-white/5 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-[0.2em] text-[#ebebeb]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime"></span>
                </span>
                AVAILABLE FOR WORK
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="spinning-border-btn w-full py-3 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] text-white text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
