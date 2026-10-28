"use client";

import { FolderGit2 } from "lucide-react";

export function Projects() {
  const projects = [
    {
      num: "01",
      title: "Portfolio Creator",
      tags: ["Web Design", "Dynamic Portfolios", "Replit App"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Designed and deployed a web application that generates personal portfolio websites for users, automating design system mapping and real-time preview configurations.
        </p>
      `
    },
    {
      num: "02",
      title: "MyRealInvesting",
      tags: ["Investment Modeling", "Enterprise Web", "Database Systems"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Built a web platform focused on real estate investment insights and resources, featuring secure asset modeling, growth projections, and database management.
        </p>
      `
    },
    {
      num: "03",
      title: "Vasanthams Technologies",
      tags: ["IT Consulting", "Production Deployments", "Cloud Infrastructures"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Developed and deployed a business website with a focus on responsive design, high usability, and reliable cloud-hosted infrastructure for client services.
        </p>
      `
    },
    {
      num: "04",
      title: "Vijayan Finance",
      tags: ["Contribution", "Financial Dashboards", "UI Components"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Built a finance-focused web application delivering tools and resources for personal financial management, expense tracking, and portfolio return metrics.
        </p>
      `
    },
    {
      num: "05",
      title: "Resume Sorter Application for HRs",
      tags: ["AI Parsing", "HR Tech", "Candidate Ranking"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Developed a web application to help HR professionals filter and sort candidate resumes efficiently based on role requirements, keyword density, and custom evaluation criteria.
        </p>
      `
    },
    {
      num: "06",
      title: "Resume ATS Compatibility Checker",
      tags: ["ATS Checker", "Resume Optimization", "Career Development"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Created a tool that analyzes resumes for ATS (Applicant Tracking System) compatibility and provides formatting and keyword feedback to maximize candidate interview callbacks.
        </p>
      `
    },
    {
      num: "07",
      title: "Full-Spectrum AI Agent: Dev, Cloud & Marketing",
      tags: ["Full-Spectrum AI", "Dev & Cloud", "Growth Strategy"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Built an AI-driven agent integrating development, cloud deployment, and marketing automation workflows into a single unified platform, bridging the gap between technical execution and growth strategy.
        </p>
      `
    },
    {
      num: "08",
      title: "Thittam — Project Management Software",
      tags: ["Project Management", "Team Collaboration", "Workflow Automation"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Designed and developed a project management software platform that enables teams to plan work, organize tasks, and track progress in a single workspace. The application promotes clear accountability and improves coordination across project stakeholders.
        </p>
      `
    },
    {
      num: "09",
      title: "Nexus — Customer Relationship Management (CRM) Software",
      tags: ["CRM Platform", "Customer Analytics", "Client Communication"],
      descHtml: `
        <p class="text-white/60 text-sm md:text-base leading-relaxed">
          Developed a ready-to-use Customer Relationship Management (CRM) application that allows businesses to manage customer information and monitor interactions. The solution helps organizations streamline client communication and maintain structured, accessible customer records.
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
            return (
              <div
                key={project.title}
                style={{
                  top: "calc(80px + var(--idx) * 24px)",
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

                  <div
                    dangerouslySetInnerHTML={{ __html: project.descHtml }}
                    className="max-w-2xl text-white/60"
                  />
                </div>

                {/* Footer Metadata */}
                <div className="border-t border-white/10 pt-6 mt-6 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/30">
                    STATUS // PRODUCTION ARCHIVE
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
