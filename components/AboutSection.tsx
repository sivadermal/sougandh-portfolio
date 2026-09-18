"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  GraduationCap,
  Download,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-28 px-6 sm:px-12 bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative border-t border-[#e8e4dd] dark:border-white/[0.08] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Quick Dossier (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] rounded-3xl overflow-hidden border border-[#e8e4dd] dark:border-white/15 shadow-xl dark:shadow-2xl mb-6 group bg-black/10">
              <Image
                src={DESIGNER_INFO.profileImage}
                alt={DESIGNER_INFO.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-[0.25em] block mb-1 font-semibold">
                  Principal Designer
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light">
                  {DESIGNER_INFO.name}
                </h3>
                <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300 mt-1">
                  <MapPin className="w-3 h-3 text-[#c5a880]" />
                  <span>{DESIGNER_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Portfolio Dossier Download & Quick Direct Channels */}
            <div className="w-full max-w-[340px] sm:max-w-[380px] flex flex-col gap-3">
              <a
                href={DESIGNER_INFO.cvPdfUrl}
                download
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl bg-[#c5a880] hover:bg-[#b5976e] text-black font-semibold text-xs font-mono uppercase tracking-widest transition-all shadow-lg shadow-[#c5a880]/15"
              >
                <Download className="w-4 h-4" />
                <span>Download Portfolio Dossier (PDF)</span>
              </a>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] space-y-2.5 shadow-sm">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="flex items-center gap-3 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{DESIGNER_INFO.email}</span>
                </a>
                <a
                  href={`tel:${DESIGNER_INFO.phone}`}
                  className="flex items-center gap-3 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-[#c5a880] dark:hover:text-[#c5a880] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{DESIGNER_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Dual Pedigree & Technical Stack (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">
                  V. The Principal
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                Spaces Grounded in Structural Discipline & Regional Soul
              </h2>

              <blockquote className="p-5 rounded-2xl bg-white dark:bg-[#121215] border-l-2 border-[#c5a880] border-y border-r border-[#e8e4dd] dark:border-white/[0.06] mb-6 shadow-sm">
                <p className="text-sm sm:text-base font-serif italic text-zinc-800 dark:text-zinc-200 leading-relaxed font-light">
                  &ldquo;True interior architecture is not an afterthought of decoration; it is the choreography of volume, natural breeze, and daylight across materials that age with dignity.&rdquo;
                </p>
              </blockquote>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
                {DESIGNER_INFO.bio}
              </p>

              {/* Architectural Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-[#e8e4dd] dark:border-white/[0.08]">
                <div>
                  <span className="text-3xl sm:text-4xl font-serif text-[#c5a880] font-light block">
                    {DESIGNER_INFO.experienceYears}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-1">
                    Years Active
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-serif text-zinc-900 dark:text-white font-light block">
                    Dual
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-1">
                    Civil + Interior Diplomas
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-serif text-zinc-900 dark:text-white font-light block">
                    100%
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mt-1">
                    Bespoke Joinery & Renders
                  </span>
                </div>
              </div>

              {/* Education & Dual Qualifications */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-4 flex items-center gap-2 font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Foundations & Diplomas</span>
                </h3>
                <div className="space-y-3">
                  {DESIGNER_INFO.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm"
                    >
                      <div>
                        <h4 className="text-sm sm:text-base font-serif text-zinc-900 dark:text-white font-normal">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          {edu.institution}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#c5a880] font-medium px-2.5 py-1 rounded bg-[#c5a880]/10 border border-[#c5a880]/20 w-fit">
                        {edu.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-4 flex items-center gap-2 font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Professional Credentials</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {DESIGNER_INFO.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] text-xs font-mono text-zinc-800 dark:text-zinc-300 flex items-center gap-2 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Ecosystem */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-4 flex items-center gap-2 font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>Technical & Computational Toolkit</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { tool: "3ds Max", role: "Volumetric Modeling & Scene Assembly" },
                    { tool: "V-Ray Rendering", role: "Photometric GI & Physical Camera" },
                    { tool: "SketchUp Pro", role: "Iterative Spatial Schematics" },
                    { tool: "AutoCAD & Civil", role: "Technical Drafting & Load Coordination" },
                    { tool: "Adobe Photoshop", role: "Color Grading & Atmosphere" },
                    { tool: "Joinery Blueprints", role: "Millwork Shop Drawings" },
                  ].map((item) => (
                    <div
                      key={item.tool}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] shadow-sm"
                    >
                      <span className="text-xs font-mono text-zinc-900 dark:text-zinc-100 font-medium block">
                        {item.tool}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 block mt-1 leading-snug">
                        {item.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
