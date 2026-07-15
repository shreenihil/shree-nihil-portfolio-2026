"use client";

import { motion } from "framer-motion";
import { Award, ShieldAlert, Sparkles } from "lucide-react";

export function Recognition() {
  const awards = [
    {
      place: "4TH PLACE",
      title: "South West Inter University Karate Tournament",
      date: "MARCH 2026",
      meta: "ATHLETICS / KUMITE",
    },
    {
      place: "5TH PLACE",
      title: "All India Inter University Karate Tournament",
      date: "APRIL 2026",
      meta: "ATHLETICS / KUMITE",
    },
  ];

  const languages = [
    { lang: "English", level: "C2 (Proficient)", percent: 95 },
    { lang: "Tamil", level: "Native Proficiency", percent: 100 },
    { lang: "Hindi", level: "B2 (Upper Intermediate)", percent: 75 },
    { lang: "Malayalam", level: "B2 (Upper Intermediate)", percent: 75 },
  ];

  return (
    <section id="achievements-details" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Awards & Honors */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.20em] text-white/40">
              HONORS & PLACEMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white font-sans">
              Awards & Honors
            </h2>
          </div>

          <div className="space-y-6">
            {awards.map((award, idx) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-lime/30 transition-colors duration-300 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lime shrink-0 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-xs font-bold text-lime tracking-wider">
                      {award.place}
                    </span>
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">
                      {award.meta}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-white/90 leading-tight">
                    {award.title}
                  </h3>
                  <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest pt-1">
                    {award.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Languages Progress Bars */}
        <div className="space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.20em] text-white/40">
              COMMUNICATION SCALE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white font-sans">
              Languages
            </h2>
          </div>

          <div className="glass rounded-[2rem] p-8 space-y-6">
            {languages.map((lang, idx) => (
              <div key={lang.lang} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-sans font-bold text-white/90">
                    {lang.lang}
                  </span>
                  <span className="font-mono text-[10px] text-lime font-bold uppercase tracking-wider">
                    {lang.level}
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-[#ccff00] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
