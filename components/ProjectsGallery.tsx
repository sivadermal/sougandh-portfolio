"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  MapPin,
  Palette,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories = [
    "All",
    "Living & Courtyard",
    "Master Suites",
    "Modular Kitchens",
    "Bedrooms",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const openProjectModal = (project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(imageIndex);
  };

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  }, [selectedProject]);

  // Keyboard navigation for the case-study lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeProjectModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeProjectModal, nextImage, prevImage]);

  return (
    <section
      id="selected-works"
      className="py-28 px-6 sm:px-12 bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative transition-colors duration-500 border-t border-[#e8e4dd] dark:border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Architectural Statement */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#e8e4dd] dark:border-white/[0.08] gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">
                II. Curated Portfolio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              Selected Works
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light max-w-lg leading-relaxed">
            Realized residences and architectural visual simulations spanning tropical Kerala courtyard homes, monolithic master suites, and precision culinary joinery.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-mono tracking-wider transition-all uppercase ${
                activeCategory === cat
                  ? "bg-[#c5a880] text-black font-semibold shadow-md shadow-[#c5a880]/20"
                  : "bg-white/80 hover:bg-white dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-zinc-600 dark:text-zinc-400 border border-[#e8e4dd] dark:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Architectural Monograph Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] overflow-hidden hover:border-[#c5a880]/60 transition-all duration-500 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60"
            >
              {/* Image Viewport */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-black/30">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Project Index Number & Typology */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#c5a880] border border-white/15">
                    N° {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/15">
                    {project.category}
                  </span>
                </div>

                {/* Perspective Count */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/15">
                      {project.images.length} Spatial Perspectives
                    </span>
                  </div>
                )}

                {/* Hover Stage Action */}
                <button
                  onClick={() => openProjectModal(project, 0)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-white backdrop-blur-[2px]"
                >
                  <span className="px-4 py-2 rounded-xl bg-black/80 border border-white/20 flex items-center gap-2 shadow-2xl">
                    <Eye className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Examine Project</span>
                  </span>
                </button>
              </div>

              {/* Card Meta & Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-2.5">
                    <MapPin className="w-3 h-3 text-[#c5a880]" />
                    <span>{project.location}</span>
                    <span className="opacity-40">/</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-light text-zinc-900 dark:text-white group-hover:text-[#c5a880] transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Multi-Angle Mini Thumbnails Strip */}
                {project.images.length > 1 && (
                  <div className="mb-4 pt-3 border-t border-[#e8e4dd] dark:border-white/[0.06]">
                    <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
                      Perspectives:
                    </span>
                    <div className="flex gap-2">
                      {project.images.map((img, i) => (
                        <button
                          key={img.url}
                          onClick={() => openProjectModal(project, i)}
                          className="relative w-12 h-9 rounded overflow-hidden border border-zinc-300 dark:border-white/15 hover:border-[#c5a880] transition-colors group/thumb"
                          title={img.room || `Angle ${i + 1}`}
                        >
                          <Image
                            src={img.url}
                            alt=""
                            fill
                            className="object-cover group-hover/thumb:scale-110 transition-transform"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Material Swatches Preview & Details Button */}
                <div className="pt-3 border-t border-[#e8e4dd] dark:border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {project.materials.slice(0, 2).map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 truncate"
                      >
                        · {m}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openProjectModal(project, 0)}
                    className="text-[11px] font-mono text-[#c5a880] hover:underline flex items-center gap-1 font-medium tracking-wider uppercase"
                  >
                    <span>Dossier</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Architectural Case Study & Perspective Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-6xl max-h-[94vh] bg-[#faf8f5] dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/15 rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all border border-white/15 shadow-lg"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left/Main: Visual Stage & Perspective Viewer */}
            <div className="relative flex-1 bg-black flex flex-col justify-center items-center min-h-[350px] lg:min-h-[580px]">
              {/* Active Image */}
              <div className="relative w-full h-full min-h-[350px] lg:min-h-[520px] flex items-center justify-center p-4 sm:p-8">
                <Image
                  src={selectedProject.images[activeImageIndex].url}
                  alt={selectedProject.images[activeImageIndex].caption}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev / Next controls */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#c5a880] hover:text-black text-white transition-all border border-white/15 z-20"
                    aria-label="Previous Perspective"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#c5a880] hover:text-black text-white transition-all border border-white/15 z-20"
                    aria-label="Next Perspective"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Bottom Angle Selector */}
              {selectedProject.images.length > 1 && (
                <div className="w-full bg-black/85 backdrop-blur-md p-3 border-t border-white/10 flex items-center justify-between gap-4 z-20">
                  <div className="flex items-center gap-2 overflow-x-auto py-1">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={img.url}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                          activeImageIndex === idx
                            ? "border-[#c5a880] ring-2 ring-[#c5a880]/40 scale-105"
                            : "border-white/15 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image src={img.url} alt="" fill className="object-cover" />
                      </button>
                    ))}
                  </div>

                  <div className="text-right text-[11px] font-mono text-zinc-300 whitespace-nowrap hidden sm:block">
                    Perspective {activeImageIndex + 1} of {selectedProject.images.length}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Architectural Dossier */}
            <div className="w-full lg:w-[440px] bg-[#faf8f5] dark:bg-[#121215] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-none border-t lg:border-t-0 lg:border-l border-[#e8e4dd] dark:border-white/10 text-zinc-900 dark:text-white">
              <div>
                {/* Category & Location */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#c5a880] mb-2 uppercase tracking-widest">
                  <span>{selectedProject.category}</span>
                  <span>{selectedProject.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-light text-zinc-900 dark:text-white mb-1.5 leading-snug">
                  {selectedProject.title}
                </h3>
                <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-5">
                  {selectedProject.subtitle}
                </p>

                {/* Perspective Caption */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-white/[0.04] border border-[#e8e4dd] dark:border-white/10 mb-5 shadow-sm">
                  <span className="text-[9px] font-mono text-[#c5a880] uppercase tracking-widest block mb-1 font-semibold">
                    Current Spatial View:
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-200 leading-relaxed font-light">
                    {selectedProject.images[activeImageIndex].caption}
                  </p>
                </div>

                {/* Design Concept */}
                <div className="mb-5">
                  <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                    Spatial Philosophy
                  </h4>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Specified Materials */}
                <div className="mb-5">
                  <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Materiality Schedule</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.materials.map((mat) => (
                      <span
                        key={mat}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-[#e8e4dd] dark:border-white/10 text-[10px] font-mono text-zinc-800 dark:text-zinc-300 shadow-sm"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spatial Highlights */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Architectural Highlights</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((item, i) => (
                      <li key={i} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2 font-light">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-[#e8e4dd] dark:border-white/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={closeProjectModal}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#c5a880] hover:bg-[#b5976e] text-black font-semibold text-xs font-mono uppercase tracking-widest transition-all shadow-md"
                >
                  <span>Commission a Similar Space</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span>Stack: {selectedProject.software.join(" · ")}</span>
                  <span>Scope: {selectedProject.scope}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
