"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolioData";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "I", label: "Walkthrough", href: "#cinematic-experience" },
    { num: "II", label: "Works", href: "#selected-works" },
    { num: "III", label: "Perspectives", href: "#perspectives" },
    { num: "IV", label: "Materiality", href: "#materiality" },
    { num: "V", label: "Studio", href: "#about" },
    { num: "VI", label: "Services", href: "#services" },
    { num: "VII", label: "Inquire", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f5]/92 dark:bg-[#09090b]/88 backdrop-blur-md border-b border-[#e8e4dd] dark:border-white/[0.08] py-3.5 shadow-sm dark:shadow-2xl"
          : "bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Architectural Studio Brand */}
        <a href="#" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880] group-hover:scale-125 transition-transform" />
            <span className={`font-serif tracking-[0.22em] text-base sm:text-lg font-light transition-colors ${
              scrolled
                ? "text-zinc-900 dark:text-white group-hover:text-[#c5a880]"
                : "text-white group-hover:text-[#c5a880]"
            }`}>
              SOUGANDH RAJAN
            </span>
          </div>
          <span className={`text-[9px] font-mono tracking-[0.3em] uppercase pl-3.5 transition-colors ${
            scrolled ? "text-zinc-500 dark:text-zinc-400" : "text-zinc-300/80"
          }`}>
            Interior Architecture & 3D · Kerala
          </span>
        </a>

        {/* Editorial Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-7 text-[11px] font-mono tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1.5 transition-colors relative py-1 group ${
                scrolled
                  ? "text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                  : "text-zinc-200 hover:text-white"
              }`}
            >
              <span className="text-[9px] text-[#c5a880] font-sans opacity-70 group-hover:opacity-100 transition-opacity">
                {link.num}.
              </span>
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-xl transition-all border ${
              scrolled
                ? "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 hover:border-[#c5a880]"
                : "bg-black/40 border-white/15 text-white hover:bg-black/60"
            }`}
            title={theme === "dark" ? "Switch to Light Gallery Mode" : "Switch to Dark Obsidian Mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#d4af37]" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>

          {/* Portfolio PDF Download */}
          <a
            href={DESIGNER_INFO.cvPdfUrl}
            download
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-[11px] font-mono tracking-wider uppercase transition-all ${
              scrolled
                ? "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 hover:border-[#c5a880]"
                : "bg-black/40 border-white/15 text-zinc-200 hover:text-white hover:border-white/30"
            }`}
            title="Download Official 14-Page Portfolio PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Portfolio PDF</span>
          </a>

          {/* Inquire CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#c5a880] hover:bg-[#b5976e] text-black text-[11px] font-mono uppercase tracking-[0.15em] font-semibold transition-all shadow-md hover:shadow-lg shadow-[#c5a880]/15"
          >
            <span>Commission</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg border ${
              scrolled
                ? "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-white"
                : "bg-black/40 border-white/15 text-white"
            }`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#d4af37]" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-800" />
            )}
          </button>

          <a
            href={DESIGNER_INFO.cvPdfUrl}
            download
            className={`p-2 rounded-lg border ${
              scrolled
                ? "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-white"
                : "bg-black/40 border-white/15 text-white"
            }`}
            title="Download PDF"
          >
            <Download className="w-4 h-4 text-[#c5a880]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              scrolled
                ? "bg-white dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-white"
                : "bg-black/40 border-white/15 text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#faf8f5]/98 dark:bg-[#0c0c0e]/98 backdrop-blur-2xl border-b border-[#e8e4dd] dark:border-white/10 px-6 py-6 transition-all shadow-2xl">
          <nav className="flex flex-col gap-3 text-xs font-mono tracking-widest uppercase text-zinc-800 dark:text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 border-b border-zinc-200 dark:border-white/5 hover:text-[#c5a880] transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[#c5a880]">{link.num}</span>
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                toggleTheme();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-900 dark:text-white"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-[#d4af37]" /> : <Moon className="w-4 h-4 text-zinc-800" />}
              <span>Switch to {theme === "dark" ? "Light Gallery" : "Dark Obsidian"}</span>
            </button>
            <a
              href={DESIGNER_INFO.cvPdfUrl}
              download
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white dark:bg-white/10 border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-900 dark:text-white"
            >
              <Download className="w-4 h-4 text-[#c5a880]" />
              <span>Official 14-Page Portfolio (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#c5a880] text-black font-semibold text-xs font-mono uppercase tracking-widest"
            >
              <span>Commission a Space</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
