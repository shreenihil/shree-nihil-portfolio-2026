"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Radio, CheckSquare, Layers, Award } from "lucide-react";

export function About() {
  const coreSkills = [
    { name: "Project Management", level: 85, desc: "Team sync & delivery" },
    { name: "Web Design", level: 90, desc: "Aesthetics & interactions" },
    { name: "Database Management", level: 80, desc: "SQL & data integrity" },
    { name: "Communication", level: 95, desc: "Collaboration & pitches" },
    { name: "Multitasking", level: 88, desc: "Parallel workflow execution" },
  ];

  const appliedSkills = [
    { name: "Problem-Solving", desc: "Algorithmic thinking" },
    { name: "UI Design", desc: "Figma & user research" },
    { name: "Time Management", desc: "Sprint & milestone focus" },
  ];

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.20em] text-white/40">
            TECHNICAL POWERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-white font-sans">
            Skills Bento Grid
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Core Skills (2x2) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 glass rounded-[2rem] p-8 flex flex-col justify-between hover:border-lime/40 transition-colors duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lime">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Core Skills</h3>
                  <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                    Primary capabilities
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-sans font-medium text-white/80">{skill.name}</span>
                      <span className="font-mono text-lime font-bold">{skill.level}%</span>
                    </div>
                    {/* Visual bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-lime to-emerald rounded-full"
                      />
                    </div>
                    <p className="text-[10px] text-white/30 font-sans">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Applied Skills Swatches (1x2) */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-2 glass rounded-[2rem] p-8 flex flex-col justify-between hover:border-lime/40 transition-colors duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald">
                  <CheckSquare size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-white">Applied</h3>
                  <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">
                    Methodologies
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {appliedSkills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      {/* Color Swatch Circle */}
                      <span className={`w-3.5 h-3.5 rounded-full ${
                        index === 0 ? "bg-lime" : index === 1 ? "bg-emerald" : "bg-white/80"
                      }`} />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 pl-6">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6 text-[10px] text-white/30 font-mono tracking-widest uppercase">
              // DESIGN DISCIPLINE
            </div>
          </div>

          {/* Card 3: AI Excellency - Solid Lime Card (1x1) */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 bg-lime text-black rounded-[2rem] p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            {/* SVG noise texture */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-black/10 border border-black/10 flex items-center justify-center">
                  <Cpu size={20} className="text-black" />
                </div>
                <span className="font-mono text-[9px] font-bold tracking-[0.2em] bg-black/10 px-2.5 py-1 rounded">
                  AI TOOLING
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-sans font-bold text-2xl tracking-tighter leading-none mb-2">
                  Gemini & Claude
                  <br />
                  Excellency
                </h3>
                <p className="text-xs text-black/60 font-sans">
                  Advanced multi-agent prompting, architecture, and deployment pipeline optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Cloud & Networking (1x1) */}
          <div className="md:col-span-1 lg:col-span-1 lg:row-span-1 glass rounded-[2rem] p-8 flex flex-col justify-between hover:border-lime/40 transition-colors duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lime">
                  <Cloud size={16} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald">
                  <Radio size={16} />
                </div>
              </div>
              <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
                INFRASTRUCTURE
              </span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-lg text-white mb-2">
                Cloud & Networking
              </h3>
              <ul className="text-xs text-white/60 space-y-1.5 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime" /> Cloud Computing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Advanced Networking
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" /> Routing & Security
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
