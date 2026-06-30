"use client";

import { motion } from "framer-motion";
import { Monitor, Cloud, Database, Briefcase } from "lucide-react";

export function About() {
  const row1 = [
    "Web design", "User interface design", "Database management", 
    "Project management", "Communication", "Multitasking", 
    "Problem-solving", "Organization and time management", 
    "Gemini Excellency", "Claude Excellency"
  ];
  
  const row2 = [
    "Cloud computing", "Networking", "Web design", 
    "Database management", "UI Design"
  ];

  const cards = [
    {
      icon: <Monitor className="w-6 h-6 text-neutral-400" />,
      title: "Web & UI Design",
      desc: "Crafting modern, high-performance user interfaces and responsive web layouts end-to-end."
    },
    {
      icon: <Cloud className="w-6 h-6 text-neutral-400" />,
      title: "Cloud Computing",
      desc: "Architecting scalable cloud infrastructure and managing modern cloud services."
    },
    {
      icon: <Database className="w-6 h-6 text-neutral-400" />,
      title: "Database Management",
      desc: "Designing reliable database structures and optimizing queries for data integrity."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-neutral-400" />,
      title: "Project Management",
      desc: "Coordinating multi-task workflows to ensure successful, structured project delivery."
    }
  ];

  return (
    <section id="work" className="py-32 border-t border-neutral-900 overflow-hidden">
      <div className="px-6 md:px-24 mb-20 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-500 font-mono mb-6"
        >
          // About
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-2xl md:text-4xl font-medium leading-tight text-neutral-300"
        >
          Innovative individual with strong skills in web design and cloud computing. Known for effective networking and communication, contributing to successful project delivery and collaboration across teams.
        </motion.p>
      </div>

      <div className="flex flex-col gap-8 mb-32 relative">
        {/* Fading edges for marquee */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black" />
        
        <div className="flex w-[200%] animate-marquee pause-on-hover">
          {[...row1, ...row1].map((skill, i) => (
            <div key={i} className="flex items-center gap-8 whitespace-nowrap px-4">
              <span className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-indigo-400 transition-colors uppercase tracking-tighter">{skill}</span>
              <span className="text-indigo-900/50">✦</span>
            </div>
          ))}
        </div>
        
        <div className="flex w-[200%] animate-marquee pause-on-hover" style={{ animationDirection: "reverse" }}>
          {[...row2, ...row2, ...row2].map((skill, i) => (
            <div key={i} className="flex items-center gap-8 whitespace-nowrap px-4">
              <span className="text-4xl md:text-6xl font-bold text-neutral-800 hover:text-indigo-400 transition-colors uppercase tracking-tighter">{skill}</span>
              <span className="text-indigo-900/50">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-neutral-900 rounded-2xl bg-neutral-950/50 hover:bg-indigo-950/20 hover:border-indigo-500/30 transition-colors group cursor-default"
            >
              <div className="mb-6 p-4 rounded-full bg-black border border-neutral-800 inline-block group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-100 transition-colors">{card.title}</h3>
              <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
