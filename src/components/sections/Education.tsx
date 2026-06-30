"use client";

import { motion } from "framer-motion";

export function Education() {
  const timeline = [
    {
      date: "Expected 05/2027",
      title: "Bachelor of Technology: Information Technology",
      subtitle: "Vinayaka Mission's Research Foundation",
      location: "Salem, Tamil Nadu, India"
    },
    {
      date: "2023",
      title: "Higher Secondary",
      subtitle: "Sri Chaitanya Techno School",
      location: ""
    },
    {
      date: "2021",
      title: "Secondary School",
      subtitle: "Suguna International School",
      location: ""
    }
  ];

  return (
    <section className="py-32 border-t border-neutral-900">
      <div className="px-6 md:px-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-500 font-mono mb-6"
        >
          // Education
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-20 tracking-tight"
        >
          Academic Journey
        </motion.h2>

        <div className="max-w-4xl border-l border-neutral-900 ml-4 md:ml-0">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 pb-16 last:pb-0 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-neutral-800 border-2 border-black group-hover:bg-white transition-colors" />
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="md:w-48 shrink-0">
                  <span className="text-sm font-mono text-neutral-500">{item.date}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-lg mb-1">{item.subtitle}</p>
                  {item.location && <p className="text-sm text-neutral-600">{item.location}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
