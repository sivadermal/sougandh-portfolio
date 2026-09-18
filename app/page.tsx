"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import ProjectsGallery from "@/components/ProjectsGallery";
import ProjectViewer from "@/components/ProjectViewer";
import MaterialitySection from "@/components/MaterialitySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToWorks = () => {
    const el = document.getElementById("selected-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
      {/* Editorial Studio Navigation */}
      <Navbar />

      {/* 192-Frame Architectural Canvas Walkthrough Hero */}
      <ScrollyCanvas
        totalFrames={192}
        frameFolder="/sequence/bedroom"
        onExploreClick={scrollToWorks}
      />

      {/* Curated Editorial Projects Showcase & Case Studies */}
      <ProjectsGallery />

      {/* Interactive Multi-Angle Perspective Comparison Studio */}
      <ProjectViewer />

      {/* Tactile Materiality Flat-Lay Palette */}
      <MaterialitySection />

      {/* The Studio, Civil Engineering Pedigree & Credentials */}
      <AboutSection />

      {/* Architectural Services & 4-Stage Turnkey Workflow */}
      <ServicesSection />

      {/* Commission & Consultation Inquiry */}
      <ContactSection />

      {/* Architectural Monograph Footer */}
      <Footer />
    </main>
  );
}
