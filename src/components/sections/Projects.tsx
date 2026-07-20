"use client";

import { FolderGit2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      num: "01",
      title: "Portfolio Creator",
      tags: ["Web Design", "Dynamic Portfolios", "Replit App"],
      descHtml: `
        <!-- PLACEHOLDER COPY: Shree can edit this description -->
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          A web application designed to help developers and creatives dynamically build and publish stunning portfolios. It automates design system mapping and hosting configurations in real-time.
        </p>
      `
    },
    {
      num: "02",
      title: "MyRealInvesting",
      tags: ["Investment Modeling", "Enterprise Web", "Database Systems"],
      descHtml: `
        <!-- PLACEHOLDER COPY: Shree can edit this description -->
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          An investment simulation and analytical platform for evaluating real estate portfolios. Features secure asset modeling, growth projections, and comprehensive database management systems.
        </p>
      `
    },
    {
      num: "03",
      title: "Vasanthams Technologies",
      tags: ["IT Consulting", "Production Deployments", "Cloud Infrastructures"],
      descHtml: `
        <!-- PLACEHOLDER COPY: Shree can edit this description -->
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Enterprise landing page and technology solutions platform showcasing professional IT consulting services, production deployments, and cloud architectures.
        </p>
      `
    },
    {
      num: "04",
      title: "Vijayan Finance",
      tags: ["Contribution", "Financial Dashboards", "UI Components"],
      descHtml: `
        <!-- PLACEHOLDER COPY: Shree can edit this description -->
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Collaborative financial management dashboard designed for tracking budgets, investment reports, and portfolio returns with dynamic data tables.
        </p>
      `
    },
    {
      num: "05",
      title: "Resume Sorter for HR",
      tags: ["AI Parsing", "HR Tech", "Candidate Ranking"],
      descHtml: `
        <!-- PLACEHOLDER COPY: Shree can edit this description -->
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          An AI-powered system designed for human resource departments to automatically parse, categorize, and rank resumes based on custom job description parameters.
        </p>
      `
    },
    {
      num: "06",
      title: "Resume ATS Compatibility Checker",
      tags: ["ATS Checker", "Resume Optimization", "Career Development"],
      descHtml: `
        <!-- PLACEHOLDER COPY: Shree can edit this description -->
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          An optimization tool that evaluates resume compatibility against major Application Tracking Systems (ATS), providing scoring and formatting suggestions to candidates.
      `
    },
    {
      num: "07",
      title: "Full-Spectrum AI Agent: Dev, Cloud & Marketing",
      tags: ["Full-Spectrum AI", "Dev & Cloud", "Growth Strategy"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          I engineered a custom AI assistant that handles development, cloud architecture, and digital marketing in one unified interface. It seamlessly bridges the gap between technical execution and growth strategy to streamline complex workflows.
        </p>
      `
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.20em] text-white/40">
            SELECTED CREATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-white font-sans">
            Projects Stack
          </h2>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative space-y-12 md:space-y-0 pb-12">
          {projects.map((project, idx) => {
            // Stack offset on desktop
            const topOffset = 120 + idx * 40;
            
            return (
              <div
                key={project.title}
                // Desktop: position sticky, stacking up. Mobile: normal flow (position not sticky, top is ignored)
                style={{
                  top: "calc(100px + var(--idx) * 32px)",
                  "--idx": idx,
                } as React.CSSProperties}
                className="relative md:sticky bg-[#0c0c0c]/90 rounded-[2rem] glass p-8 md:p-12 mb-8 md:mb-20 min-h-[300px] md:min-h-[400px] flex flex-col justify-between hover:border-lime/40 transition-all duration-300 ring-1 ring-white/5 group shadow-2xl backdrop-blur-xl"
              >
                {/* Top Info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <FolderGit2 className="text-lime" size={24} />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white/40">
                      PROJECT {project.num}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono uppercase tracking-wider text-[#ebebeb] px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="my-6 md:my-8 space-y-4">
                  <h3 className="text-2xl md:text-4.5xl font-bold tracking-tight text-white font-sans group-hover:text-lime transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Plausible project description */}
                  <div 
                    dangerouslySetInnerHTML={{ __html: project.descHtml }} 
                    className="max-w-2xl text-white/60"
                  />
                </div>

                {/* Footer Metadata (Option to visit removed as requested) */}
                <div className="border-t border-white/10 pt-6 mt-6 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                    STATUS // ARCHIVED
                  </span>
                  <span className="font-mono text-[9px] text-white/20">
                    SRC: REPOSITORY
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
