"use client";

import { motion } from "framer-motion";
import { Trophy, Globe2 } from "lucide-react";

export function Recognition() {
  const awards = [
    { place: "1st Place", title: "NCAAIT'26 Conference and Hackathon" },
    { place: "1st Place", title: "Paper Presentation - Lumino 2k24 (National Level Technical Symposium)" },
    { place: "4th Place", title: "South West Inter University Karate Tournament (March 2026)" },
    { place: "5th Place", title: "All India Inter University Karate Tournament (April 2026)" }
  ];

  const languages = [
    { lang: "English", level: "Native / Professional (C2)" },
    { lang: "Tamil", level: "Native Proficiency" },
    { lang: "Hindi", level: "Upper Intermediate (B2)" },
    { lang: "Malayalam", level: "Upper Intermediate (B2)" }
  ];

  return (
    <section className="py-32 border-t border-neutral-900 bg-neutral-950/20">
      <div className="px-6 md:px-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-500 font-mono mb-16"
        >
          // Recognition
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-8 border-b border-neutral-900 pb-4">
              <Trophy className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">Awards & Achievements</h2>
            </div>
            <div className="flex flex-col gap-6">
              {awards.map((award, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="text-neutral-500 font-mono text-sm whitespace-nowrap pt-1">
                    {award.place}
                  </span>
                  <p className="text-lg font-medium">{award.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8 border-b border-neutral-900 pb-4">
              <Globe2 className="w-6 h-6 text-neutral-400" />
              <h2 className="text-2xl font-bold">Languages Proficiency</h2>
            </div>
            <div className="flex flex-col gap-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="text-lg font-medium group-hover:text-white transition-colors">{lang.lang}</span>
                  <div className="h-px bg-neutral-900 flex-1 mx-6 group-hover:bg-neutral-800 transition-colors" />
                  <span className="text-neutral-500 text-sm font-mono text-right">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
