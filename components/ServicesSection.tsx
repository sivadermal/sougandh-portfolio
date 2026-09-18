"use client";

import React from "react";
import { Workflow } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolioData";

export default function ServicesSection() {
  const workflowSteps = [
    {
      step: "01",
      phase: "PHASE I",
      title: "Spatial Survey & Civil Blueprinting",
      desc: "Physical site measurements, structural load-path analysis, circulation audits, and sunlight orientation charting.",
    },
    {
      step: "02",
      phase: "PHASE II",
      title: "Concept Curation & Tactile Boards",
      desc: "Establishing the spatial mood through authentic timber swatches, stone veining samples, regional terracotta, and ergonomics.",
    },
    {
      step: "03",
      phase: "PHASE III",
      title: "Photometric 3D Simulation",
      desc: "Raytraced volumetric modeling in 3ds Max / SketchUp with V-Ray, simulating precise 3000K Kelvins, cove bounce, and natural shadows.",
    },
    {
      step: "04",
      phase: "PHASE IV",
      title: "Joinery Blueprints & Turnkey Realization",
      desc: "Millwork shop drawings, modular hardware specifications, contractor coordination, and on-site alignment.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 px-6 sm:px-12 bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative border-t border-[#e8e4dd] dark:border-white/[0.08] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#e8e4dd] dark:border-white/[0.08] gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">
                VI. Architectural Practice
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Capabilities & Scope
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light max-w-lg leading-relaxed">
            Bridging technical civil engineering precision with sensory interior architecture, delivering turnkey spatial environments from initial schematic drafting to physical inhabitation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {DESIGNER_INFO.services.map((service, idx) => (
            <div
              key={service.title}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl dark:hover:shadow-2xl"
            >
              <div>
                <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-[0.25em] block mb-4 font-semibold">
                  Discipline 0{idx + 1}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-light text-zinc-900 dark:text-white group-hover:text-[#c5a880] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#e8e4dd] dark:border-white/[0.06]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-[#faf8f5] dark:bg-white/5 border border-[#e8e4dd] dark:border-white/10 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Stage Workflow Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] shadow-sm">
          <div className="flex items-center gap-2 mb-10 pb-6 border-b border-[#e8e4dd] dark:border-white/[0.06]">
            <Workflow className="w-4 h-4 text-[#c5a880]" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase">
              The 4-Stage Architectural Journey
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {workflowSteps.map((step) => (
              <div key={step.step} className="flex flex-col relative group">
                <span className="text-[10px] font-mono text-[#c5a880] tracking-widest uppercase mb-1">
                  {step.phase}
                </span>
                <span className="text-3xl sm:text-4xl font-serif text-zinc-900 dark:text-white font-light mb-2">
                  {step.step}.
                </span>
                <h4 className="text-base font-serif text-zinc-900 dark:text-white mb-2 leading-snug">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
