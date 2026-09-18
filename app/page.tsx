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
    <main className="min-h-screen bg-[#0a0a0c] text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* 192-Frame Canvas Scrollytelling Engine — Direct Hero Walkthrough */}
      <ScrollyCanvas
        totalFrames={192}
        frameFolder="/sequence/bedroom"
        onExploreClick={scrollToWorks}
      />

      {/* Curated Projects Gallery & Filterable Case Studies */}
      <ProjectsGallery />

      {/* Interactive Multi-Angle Perspective Comparison Stage */}
      <ProjectViewer />

      {/* Tactile Materiality Palette & Swatches */}
      <MaterialitySection />

      {/* Biography, Polytechnic Background & Skills */}
      <AboutSection />

      {/* Design Services & 4-Stage Workflow */}
      <ServicesSection />

      {/* Contact & Inquiries Form + PDF Download */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

