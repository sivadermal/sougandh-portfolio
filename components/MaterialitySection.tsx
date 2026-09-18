"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sun, CheckCircle2 } from "lucide-react";
import { MATERIAL_PALETTE } from "@/data/portfolioData";

export default function MaterialitySection() {
  const [activeMaterialIdx, setActiveMaterialIdx] = useState<number>(0);
  const activeMaterial = MATERIAL_PALETTE[activeMaterialIdx];

  return (
    <section
      id="materiality"
      className="py-28 px-6 sm:px-12 bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative border-t border-[#e8e4dd] dark:border-white/[0.08] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#e8e4dd] dark:border-white/[0.08] gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">
                IV. Tactile Board
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Materiality & Craft
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light max-w-lg leading-relaxed">
            Every material is selected for sensory authenticity, climate durability in Kerala&apos;s humid environment, and tactile interaction with natural daylight and 3000K architectural cove lighting.
          </p>
        </div>

        {/* Interactive Flat-Lay Material Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Swatches Grid (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {MATERIAL_PALETTE.map((mat, idx) => (
              <button
                key={mat.title}
                onClick={() => setActiveMaterialIdx(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-4 ${
                  activeMaterialIdx === idx
                    ? "bg-white dark:bg-[#151518] border-[#c5a880] shadow-lg shadow-[#c5a880]/15 translate-x-1.5"
                    : "bg-white/60 dark:bg-white/[0.02] border-[#e8e4dd] dark:border-white/[0.06] hover:border-[#c5a880]/50 hover:bg-white dark:hover:bg-white/[0.05]"
                }`}
              >
                {/* Material Texture Preview */}
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 border border-zinc-200 dark:border-white/20 shadow-sm relative overflow-hidden"
                  style={{ backgroundColor: mat.color }}
                >
                  {mat.textureUrl && (
                    <Image
                      src={mat.textureUrl}
                      alt={mat.title}
                      fill
                      className="object-cover opacity-80"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-serif font-normal text-zinc-900 dark:text-white truncate">
                      {mat.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-wider font-medium">
                      {mat.origin}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light truncate mt-0.5">
                    {mat.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Featured Material Showcase (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] p-7 sm:p-10 flex flex-col justify-between shadow-xl dark:shadow-2xl relative overflow-hidden">
            {/* Texture Photograph */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-7 border border-[#e8e4dd] dark:border-white/15 bg-black">
              <Image
                src={activeMaterial.textureUrl}
                alt={activeMaterial.title}
                fill
                className="object-cover transition-all duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider uppercase text-[#c5a880]">
                Applied in Real Projects
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-[#c5a880] uppercase tracking-widest mb-2 font-medium">
                <span>{activeMaterial.origin}</span>
                <span className="opacity-40">/</span>
                <span>Tone: {activeMaterial.color}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-zinc-900 dark:text-white mb-3">
                {activeMaterial.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed mb-6">
                {activeMaterial.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#e8e4dd] dark:border-white/[0.08]">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[#c5a880] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-zinc-900 dark:text-zinc-100 block uppercase tracking-wider font-medium">
                      Photometric Behavior
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                      Engineered for accurate subsurface scattering and specular reflections in 3ds Max & V-Ray.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono text-zinc-900 dark:text-zinc-100 block uppercase tracking-wider font-medium">
                      Architectural Execution
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                      Specified in technical schedules with structural joinery and installation details.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
