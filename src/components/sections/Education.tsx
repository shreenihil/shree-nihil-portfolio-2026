"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, MapPin } from "lucide-react";

export function Education() {
  const educationData = [
    {
      num: "01",
      title: "Bachelor of Technology, Information Technology",
      institution: "Vinayaka Mission's Research Foundation",
      location: "Salem, Tamil Nadu",
      date: "Expected 05/2027",
    },
    {
      num: "02",
      title: "Higher Secondary School",
      institution: "Sri Chaitanya Techno School",
      location: "2023",
      date: "2023",
    },
    {
      num: "03",
      title: "Secondary School Certificate",
      institution: "Suguna International School",
      location: "2021",
      date: "2021",
    },
  ];

  const activities = [
    {
      title: "1st Place — NCAAIT'26",
      desc: "Conference and Hackathon Winner",
    },
    {
      title: "1st Place — Lumino 2k24",
      desc: "Paper Presentation, National Level Technical Symposium",
    },
  ];

  return (
    <section
      id="achievements"
      className="bg-[#e5e5e5] text-[#000000] rounded-t-[4rem] py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Education List (7 Columns) */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-black/50 block mb-2">
              ACADEMIC JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans text-black">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <motion.div
                key={edu.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-6 border-b border-black/10 pb-8 last:border-b-0 last:pb-0"
              >
                {/* Mono Circle */}
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center font-mono text-sm font-bold shrink-0 bg-black text-white shadow-md">
                  {edu.num}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight">
                    {edu.title}
                  </h3>
                  <p className="text-sm font-medium text-black/70">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-black/50 font-mono pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {edu.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {edu.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Greyscale portrait placeholder with glass overlay (5 Columns) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            
            {/* Grayscale Circular Portrait Placeholder */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-400 to-neutral-200 border-4 border-black/20 overflow-hidden flex items-center justify-center shadow-2xl relative">
              {/* Grid element for mechanical feel */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-none">
                <BookOpen size={48} className="text-black/30 mb-2" />
                <span className="text-3xl font-mono uppercase tracking-[0.2em] text-black/20 font-bold">
                  STUDENT
                </span>
              </div>
              <div className="absolute bottom-[20%] text-center">
                <span className="text-[6rem] leading-none select-none opacity-[0.04] font-sans font-black tracking-tighter">
                  SNV
                </span>
              </div>
            </div>

            {/* Floating Glass Card Overlay (listing activities wins) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-[-10px] left-[-10px] right-[-10px] sm:left-[-20px] sm:right-[-20px] glass bg-black/90 border border-white/10 rounded-[1.5rem] p-6 shadow-2xl text-white backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Award size={18} className="text-lime" />
                <span className="font-mono text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">
                  ACTIVITIES & HACKATHONS
                </span>
              </div>

              <div className="space-y-4">
                {activities.map((act) => (
                  <div key={act.title} className="border-l border-lime/30 pl-3">
                    <h4 className="text-xs font-mono font-bold text-lime uppercase tracking-wide">
                      {act.title}
                    </h4>
                    <p className="text-xs text-white/70 font-sans mt-0.5">
                      {act.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
