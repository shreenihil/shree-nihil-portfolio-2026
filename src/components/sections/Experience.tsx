"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Vokx Inclusive",
      role: "Digital Marketing Intern",
      period: "October 2026 – Present",
      location: "Remote / Hybrid",
      status: "CURRENT",
      badges: ["Digital Marketing", "Content Strategy", "Partnership Outreach"],
      bullets: [
        "Manage the organization’s social media accounts, planning and publishing posts to maintain a consistent and professional online presence.",
        "Create and curate engaging written and visual content aligned with the brand’s mission, audience, and communication goals.",
        "Support partnership development by identifying prospective partners, coordinating outreach, and maintaining professional communication with collaborators."
      ]
    },
    {
      company: "Ortho One Orthopaedic Speciality Centre",
      role: "Information Technology Intern",
      period: "July 1, 2026 – October 16, 2026",
      location: "Coimbatore, Tamil Nadu, India",
      status: "COMPLETED",
      badges: ["IT Infrastructure", "Clinical Support", "Website Audit & SEO"],
      bullets: [
        "Provided first-level technical support and troubleshooting for hospital staff, resolving hardware, software, and network issues to minimize downtime in a clinical environment.",
        "Assisted in the maintenance and monitoring of hospital IT infrastructure, including workstations, printers, and networked medical equipment.",
        "Supported the coordination and rollout of software updates and internal digital tools, ensuring smooth adoption across departments.",
        "Helped maintain and organize digital patient and administrative records, ensuring data accuracy and confidentiality.",
        "Collaborated with the IT team on documentation of recurring issues and standard troubleshooting procedures to improve response time.",
        "Contributed to the hospital’s digital marketing efforts by writing website and social media content to promote its services and outreach.",
        "Conducted a basic website audit and applied SEO fundamentals to help improve the hospital’s online visibility and user experience."
      ]
    },
    {
      company: "HTC Global Services",
      role: "Business Analyst Intern",
      period: "June 23, 2026 – August 7, 2026",
      location: "Chennai, Tamil Nadu, India",
      status: "COMPLETED",
      badges: ["Business Analysis", "Requirements Engineering", "Deliverable Validation"],
      bullets: [
        "Worked with the project team to gather, document, and analyze business requirements, translating stakeholder needs into clear functional specifications.",
        "Analyzed business data and workflows to identify trends, gaps, and process improvement opportunities, presenting findings to team members.",
        "Assisted in preparing reports, dashboards, and presentation materials to support project planning and decision-making.",
        "Participated in team meetings and client-facing discussions, maintaining meeting notes, action items, and project documentation.",
        "Supported testing and validation of deliverables, helping ensure solutions aligned with business requirements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.20em] text-white/40 block">
            CAREER TRAJECTORY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 text-white font-sans">
            Internship Experiences
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/60 font-sans max-w-2xl">
            Hands-on professional experience spanning digital marketing, enterprise IT support, and business analysis across diverse industries.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass rounded-[2rem] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-lime/40 transition-all duration-300 ring-1 ring-white/5 shadow-2xl"
            >
              {/* Subtle Corner Glow on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header Row: Role, Company & Status */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                        {exp.role}
                      </h3>
                      <span
                        className={`text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full font-bold ${
                          exp.status === "CURRENT"
                            ? "bg-lime/20 text-lime border border-lime/40"
                            : "bg-white/5 text-white/60 border border-white/10"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-lime font-mono text-sm tracking-wide">
                      <Building2 size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>

                  {/* Metadata: Date & Location */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-lime/70" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-lime/70" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Badges / Domains */}
                <div className="flex flex-wrap gap-2 pt-5 pb-6">
                  {exp.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] font-mono uppercase tracking-wider text-white/80 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Key Achievements & Bullet Points */}
                <div className="space-y-3 pt-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30 block mb-2">
                    KEY CONTRIBUTIONS & IMPACT
                  </span>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-white/70 font-sans leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime shrink-0 mt-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
