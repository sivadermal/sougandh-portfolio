"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, ArrowRight } from "lucide-react";

interface MultiAngleProject {
  title: string;
  subtitle: string;
  category: string;
  angles: {
    id: string;
    label: string;
    description: string;
    imageUrl: string;
    aspect: string;
    features: string[];
  }[];
}

const COMPARISON_PROJECTS: MultiAngleProject[] = [
  {
    title: "Opulent Master Suite",
    subtitle: "Complete 360-Degree Spatial Visualization",
    category: "Master Bedroom",
    angles: [
      {
        id: "front",
        label: "Frontal Axis View",
        description:
          "Symmetrical focus centered on the chocolate leather channel-tufted headboard, flanked by twin bronze mirrors and concentric sculpture.",
        imageUrl: "/images/projects/IMG-20260916-WA0027.jpg",
        aspect: "4/3",
        features: ["Channel-tufted leather", "Twin bronze mirrors", "Concentric wall sculpture", "Houndstooth ottoman"],
      },
      {
        id: "threequarter",
        label: "3/4 Wardrobe & Lighting View",
        description:
          "Lateral perspective highlighting the floor-to-ceiling smoked glass wardrobe with illuminated clothing rail and display shelf.",
        imageUrl: "/images/projects/IMG-20260817-WA0020.jpg",
        aspect: "4/3",
        features: ["Smoked glass wardrobe", "Warm internal shelf LED", "Brass globe pendants", "Calacatta marble floor"],
      },
      {
        id: "media",
        label: "Reverse Media Console View",
        description:
          "Looking toward the entertainment wall featuring a floating rounded marble console, brushed brass inlays, and textured plaster backdrop.",
        imageUrl: "/images/projects/IMG-20260817-WA0021.jpg",
        aspect: "4/3",
        features: ["Curved floating console", "Brushed brass strip inlays", "Backlit textured wall", "Solid timber interior door"],
      },
    ],
  },
  {
    title: "Modular L-Kitchen & Bar",
    subtitle: "Seamless Culinary & Living Integration",
    category: "Kitchen Architecture",
    angles: [
      {
        id: "bar",
        label: "Breakfast Bar & Living Lounge",
        description:
          "View from the adjacent lounge showcasing the waterfall quartz breakfast counter, vertical fluted oak paneling, and brushed brass barstools.",
        imageUrl: "/images/projects/IMG-20260817-WA0015.jpg",
        aspect: "4/3",
        features: ["Waterfall quartz island", "Fluted oak paneling", "Brushed brass barstools", "Wicker woven drop pendants"],
      },
      {
        id: "cooking",
        label: "Modular L-Prep Zone",
        description:
          "Ergonomic kitchen layout featuring matte taupe handleless base cabinets, subway tile backsplash, and rose-gold framed glass upper units.",
        imageUrl: "/images/projects/IMG-20260817-WA0013.jpg",
        aspect: "4/3",
        features: ["Rose-gold glass frames", "Subway tile backsplash", "Integrated task lighting", "Matte black fixtures"],
      },
      {
        id: "pantry",
        label: "Tall Crockery Tower & Doorway",
        description:
          "Detailed look at the tall illuminated glass crockery display unit and natural timber door framing the kitchen volume.",
        imageUrl: "/images/projects/IMG-20260817-WA0016.jpg",
        aspect: "4/3",
        features: ["Illuminated glass display", "Natural timber door", "Continuous task strips", "Quartz prep counter"],
      },
    ],
  },
  {
    title: "Tropical Modern Courtyard Residence",
    subtitle: "Kerala Heritage Meets Contemporary Luxury",
    category: "Courtyard & Lounge",
    angles: [
      {
        id: "courtyard",
        label: "Skylit Nadumuttam & Dining",
        description:
          "Double-height open skylight flooding a natural stone bonsai planter with sunlight, paired with a suspended wooden swing and coffered timber ceiling.",
        imageUrl: "/images/projects/IMG-20260817-WA0029.jpg",
        aspect: "9/16",
        features: ["Double-height skylight", "Rough stone bonsai planter", "Suspended wooden swing (oonjal)", "Open-riser cantilevered stairs"],
      },
      {
        id: "living",
        label: "Emerald Terracotta Lounge",
        description:
          "Sunken formal lounge featuring glazed green terracotta flooring, timber chevron false ceiling with recessed spotlights, and cane media credenza.",
        imageUrl: "/images/projects/IMG-20260817-WA0024.jpg",
        aspect: "9/16",
        features: ["Glazed green terracotta floor", "Timber chevron ceiling rafter", "Rattan TV credenza", "Pebble mirror wall art"],
      },
    ],
  },
];

export default function ProjectViewer() {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [activeAngleIdx, setActiveAngleIdx] = useState<number>(0);

  const currentProject = COMPARISON_PROJECTS[activeProjectIdx];
  const currentAngle = currentProject.angles[activeAngleIdx];

  const handleProjectSelect = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveAngleIdx(0);
  };

  return (
    <section
      id="perspectives"
      className="py-28 px-6 sm:px-12 bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative border-t border-[#e8e4dd] dark:border-white/[0.08] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#e8e4dd] dark:border-white/[0.08] gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">
                III. Spatial Studio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Perspective Comparison
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light max-w-lg leading-relaxed">
            Examine how architectural volume, natural sunlight, and custom millwork interact across multiple sightlines. Switch environments and angles below.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
          {COMPARISON_PROJECTS.map((p, idx) => (
            <button
              key={p.title}
              onClick={() => handleProjectSelect(idx)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeProjectIdx === idx
                  ? "bg-[#c5a880] text-black font-semibold shadow-md shadow-[#c5a880]/20"
                  : "bg-white/80 dark:bg-white/[0.04] hover:bg-white dark:hover:bg-white/[0.08] text-zinc-700 dark:text-zinc-300 border border-[#e8e4dd] dark:border-white/10"
              }`}
            >
              <span>{p.title}</span>
              <span className="opacity-60 text-[10px]">· {p.angles.length} Angles</span>
            </button>
          ))}
        </div>

        {/* Perspective Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl">
          {/* Main Visual Display (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-zinc-200 dark:border-white/15 shadow-inner">
              <Image
                src={currentAngle.imageUrl}
                alt={currentAngle.label}
                fill
                className="object-contain transition-all duration-700 ease-out"
                priority
              />

              {/* Angle Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider uppercase text-[#c5a880]">
                {currentAngle.label}
              </div>
            </div>

            {/* Angle Switcher Buttons Pill */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {currentProject.angles.map((ang, aIdx) => (
                <button
                  key={ang.id}
                  onClick={() => setActiveAngleIdx(aIdx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                    activeAngleIdx === aIdx
                      ? "bg-[#c5a880] text-black font-semibold shadow-md"
                      : "bg-[#faf8f5] dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-300 border border-[#e8e4dd] dark:border-white/10"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                  <span>{ang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Perspective Breakdown Dossier (5 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-[0.25em] block mb-2 font-semibold">
                {currentProject.category} · Angle {activeAngleIdx + 1} of {currentProject.angles.length}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-zinc-900 dark:text-white mb-2 leading-snug">
                {currentAngle.label}
              </h3>
              <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-6 uppercase tracking-wider">
                {currentProject.subtitle}
              </p>

              <div className="p-4 rounded-xl bg-[#faf8f5] dark:bg-white/[0.03] border border-[#e8e4dd] dark:border-white/10 mb-6 shadow-sm">
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  {currentAngle.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>Architectural Elements in Focus</span>
                </h4>
                <div className="space-y-2">
                  {currentAngle.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2.5 text-xs text-zinc-800 dark:text-zinc-300 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#e8e4dd] dark:border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#c5a880] hover:underline transition-all group font-semibold"
              >
                <span>Commission Visuals for Your Space</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
