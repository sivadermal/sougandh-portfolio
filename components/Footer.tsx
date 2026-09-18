"use client";

import React from "react";
import { ArrowUp, Download } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 sm:px-12 bg-[#f4f1ea] dark:bg-[#070709] text-zinc-900 dark:text-white border-t border-[#e8e4dd] dark:border-white/[0.08] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#e8e4dd] dark:border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
              <span className="text-xl sm:text-2xl font-serif font-light tracking-[0.2em] text-zinc-900 dark:text-white block">
                SOUGANDH RAJAN
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block pl-3.5">
              Interior Architecture · Photometric 3D Spatial Design · Kannur, Kerala
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={DESIGNER_INFO.cvPdfUrl}
              download
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 hover:border-[#c5a880] border border-[#e8e4dd] dark:border-white/10 text-xs font-mono text-zinc-800 dark:text-zinc-200 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Official Dossier (PDF)</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 hover:bg-[#c5a880] hover:text-black border border-[#e8e4dd] dark:border-white/10 text-xs font-mono text-zinc-800 dark:text-zinc-200 transition-all group shadow-sm"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} V. Sougandh Rajan. All interior architecture concepts, 3D photometrics, and sequence frames reserved.</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${DESIGNER_INFO.email}`} className="hover:text-[#c5a880] transition-colors">
              {DESIGNER_INFO.email}
            </a>
            <span>·</span>
            <a href={`tel:${DESIGNER_INFO.phone}`} className="hover:text-[#c5a880] transition-colors">
              {DESIGNER_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
