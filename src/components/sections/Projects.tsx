"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Portfolio Creator App",
      summary: "A dynamic portfolio generation tool built with modern web technologies.",
      link: "https://portfolio-creator--shreenihil.replit.app",
      tags: ["Web Design", "React", "Replit"]
    },
    {
      title: "MyRealInvesting.com",
      summary: "Enterprise web platform for real estate investment modeling and deployment.",
      link: "#",
      tags: ["Frontend Architecture", "UI/UX", "Database Management"]
    },
    {
      title: "Vasanthams Technologie Platform",
      summary: "Comprehensive platform tailored for technology services and production deployments.",
      link: "https://vasanthams-technologie-1.onrender.com/",
      tags: ["Production Deployment", "Node.js", "Cloud Hosting"]
    },
    {
      title: "Vijayan Finance App",
      summary: "Financial dashboard featuring advanced UI components and collaborative development.",
      link: "https://vijayanfinance.lovable.app",
      tags: ["UI Component Design", "Financial Dashboard", "Collaborative Dev"]
    }
  ];

  return (
    <section id="projects" className="py-32 border-t border-neutral-900">
      <div className="px-6 md:px-24">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-neutral-500 font-mono mb-6"
        >
          // Projects
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold mb-16 tracking-tight"
        >
          Featured Work & <br /> Technical Contributions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-8 border border-neutral-900 rounded-3xl bg-neutral-950/50 hover:border-indigo-500/50 hover:bg-indigo-950/20 hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] transition-all h-full min-h-[300px]"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full border border-neutral-800 group-hover:border-indigo-500/30 group-hover:text-indigo-200 group-hover:bg-indigo-900/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8 group-hover:text-neutral-300 transition-colors">{project.summary}</p>
              </div>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-neutral-900 group-hover:border-indigo-500/20 transition-colors">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium group-hover:text-indigo-400 text-neutral-400 hover:text-indigo-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Launch App
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm font-medium group-hover:text-indigo-400 text-neutral-400 hover:text-indigo-300 transition-colors"
                >
                  <Code className="w-4 h-4" /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
