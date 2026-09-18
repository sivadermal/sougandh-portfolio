"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  CheckCircle,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Building2,
  Sparkles,
  Clock,
} from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Modular Kitchen & Joinery Design",
    scope: "1,500 – 3,000 sq.ft",
    message: "",
  });

  const spacePresets = [
    {
      label: "3BHK Villa in Kerala",
      type: "Full Residential Interior Architecture",
      scope: "1,500 – 3,000 sq.ft",
      brief:
        "Planning a full interior design for our 3BHK residence in Kerala (~2,400 sq.ft). Looking for a warm minimalist aesthetic blending teakwood, Kerala terracotta accents, open living spaces, and a modern modular kitchen.",
    },
    {
      label: "Modular Kitchen & Bar",
      type: "Modular Kitchen & Joinery Design",
      scope: "Under 1,500 sq.ft",
      brief:
        "Interested in a contemporary L-shaped modular kitchen with a waterfall breakfast island, fluted oak millwork, rose-gold glass cabinetry, and integrated task lighting.",
    },
    {
      label: "Master Sanctuary Suite",
      type: "Master Sanctuary / Bedroom Renovation",
      scope: "Under 1,500 sq.ft",
      brief:
        "Looking to renovate our master bedroom suite. We love the chocolate leather headboard design, smoked-glass illuminated wardrobe vitrine, and floating marble media console.",
    },
    {
      label: "3D Photometric CGI",
      type: "Photometric 3D Architectural CGI",
      scope: "3,000 – 5,000 sq.ft",
      brief:
        "We have completed AutoCAD architectural layouts and require photorealistic 3D interior renders, material palettes, and a cinematic walkthrough video in 3ds Max / V-Ray.",
    },
  ];

  const applyPreset = (preset: typeof spacePresets[0]) => {
    setFormData((prev) => ({
      ...prev,
      projectType: preset.type,
      scope: preset.scope,
      message: preset.brief,
    }));
  };

  const getFormattedMessage = () => {
    return (
      `*New Architectural Commission Inquiry*\n\n` +
      `🏛️ *Project Typology:* ${formData.projectType}\n` +
      `👤 *Client Name:* ${formData.name || "Client"}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone / WhatsApp:* ${formData.phone || "Not provided"}\n` +
      `📐 *Estimated Scope:* ${formData.scope}\n\n` +
      `💬 *Project Vision & Details:*\n${formData.message}\n\n` +
      `_Sent from Studio Sougandh Rajan Portfolio_`
    );
  };

  const getWhatsAppUrl = () => {
    const encoded = encodeURIComponent(getFormattedMessage());
    return `https://wa.me/919995069961?text=${encoded}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Architectural Commission: ${formData.projectType} — ${formData.name || "Inquiry"}`
    );
    const body = encodeURIComponent(
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Project Typology: ${formData.projectType}\n` +
      `Estimated Scope: ${formData.scope}\n\n` +
      `Project Vision & Details:\n${formData.message}\n`
    );
    return `mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
    }
    setFormSubmitted(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFormattedMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 sm:px-12 bg-[#faf8f5] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 relative border-t border-[#e8e4dd] dark:border-white/[0.08] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Studio Channels, Practice Visual & PDF Banner (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#c5a880] uppercase">
                  VII. Inquiries & Commissions
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-zinc-900 dark:text-white mb-5 leading-[1.1]">
                Initiate a Collaboration
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
                Accepting select commissions for bespoke residential architecture, luxury modular kitchens, master suite renovations, and photorealistic 3D architectural CGI worldwide.
              </p>

              {/* Direct Studio Channels */}
              <div className="space-y-3 mb-6">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] hover:border-[#c5a880] transition-all flex items-center gap-4 group shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-[#faf8f5] dark:bg-white/5 group-hover:bg-[#c5a880] group-hover:text-black transition-colors">
                    <Mail className="w-4 h-4 text-[#c5a880] group-hover:text-black" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-medium">
                      Direct Inquiries
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-900 dark:text-white group-hover:text-[#c5a880] transition-colors">
                      {DESIGNER_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919995069961"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] hover:border-[#c5a880] transition-all flex items-center gap-4 group shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-[#faf8f5] dark:bg-white/5 group-hover:bg-[#c5a880] group-hover:text-black transition-colors">
                    <Phone className="w-4 h-4 text-[#c5a880] group-hover:text-black" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-medium">
                      Studio Phone & WhatsApp
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-900 dark:text-white group-hover:text-[#c5a880] transition-colors">
                      {DESIGNER_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] flex items-center gap-4 shadow-sm">
                  <div className="p-2.5 rounded-xl bg-[#faf8f5] dark:bg-white/5">
                    <MapPin className="w-4 h-4 text-[#c5a880]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block font-medium">
                      Studio Location
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-900 dark:text-white">
                      Kannur, Kerala, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Studio Practice & Visual Anchor — Fills the Left Column Space */}
              <div className="rounded-2xl overflow-hidden border border-[#e8e4dd] dark:border-white/[0.08] bg-white dark:bg-[#121215] shadow-sm mb-6">
                <div className="relative w-full h-36 bg-black">
                  <Image
                    src="/images/projects/IMG-20260817-WA0024.jpg"
                    alt="Kerala Courtyard Residence"
                    fill
                    className="object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-[#c5a880] uppercase tracking-widest block">
                        Kerala Practice
                      </span>
                      <span className="text-sm font-serif font-light">
                        Kannur & Remote Worldwide
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono text-zinc-300 border border-white/10">
                      On-Site & Virtual
                    </span>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-2 gap-3 text-[11px] font-mono border-t border-[#e8e4dd] dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Mon–Sat · 9am–7pm</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <Building2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Turnkey Oversight</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Portfolio PDF Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#c5a880]/15 via-[#c5a880]/5 to-transparent border border-[#c5a880]/30 flex items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="text-sm font-serif text-zinc-900 dark:text-white font-medium mb-1">
                  14-Page Portfolio Dossier
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light">
                  Complete architectural drawings, photometrics & case studies.
                </p>
              </div>
              <a
                href={DESIGNER_INFO.cvPdfUrl}
                download
                className="p-3 rounded-xl bg-[#c5a880] hover:bg-[#b5976e] text-black transition-all flex-shrink-0 shadow-md"
                title="Download Dossier"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Commission Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121215] border border-[#e8e4dd] dark:border-white/[0.08] shadow-xl dark:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-zinc-900 dark:text-white">
                    Project Commission Form
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/20 text-[10px] font-mono text-[#c5a880] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#c5a880]" />
                    Direct Dispatch
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-6 uppercase tracking-wider">
                  Provide your space parameters or select an inspiration preset below.
                </p>

                {/* Quick Inspiration Presets — Fills Space with 1-Click Briefs */}
                <div className="mb-6 p-4 rounded-2xl bg-[#faf8f5] dark:bg-white/[0.02] border border-[#e8e4dd] dark:border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2.5 font-medium">
                    Quick-Fill Project Inspiration:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {spacePresets.map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => applyPreset(preset)}
                        className="px-3 py-1.5 rounded-lg text-[11px] font-mono bg-white dark:bg-white/5 hover:bg-[#c5a880] hover:text-black dark:hover:bg-[#c5a880] dark:hover:text-black border border-[#e8e4dd] dark:border-white/10 text-zinc-700 dark:text-zinc-300 transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <span>+</span>
                        <span>{preset.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#c5a880]/10 border border-[#c5a880]/30 text-center flex flex-col items-center gap-4 animate-in fade-in duration-300 my-auto">
                  <CheckCircle className="w-12 h-12 text-[#c5a880]" />
                  <div>
                    <h4 className="text-2xl font-serif text-zinc-900 dark:text-white mb-1">
                      Inquiry Dispatched to Studio
                    </h4>
                    <p className="text-xs font-mono text-[#c5a880] uppercase tracking-wider">
                      Connected to +91 9995069961 & sougandhsou200@gmail.com
                    </p>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md font-light leading-relaxed">
                    Thank you, <strong className="text-zinc-900 dark:text-white font-medium">{formData.name || "Client"}</strong>. Your project brief has been formatted. If WhatsApp did not open automatically, choose an option below:
                  </p>

                  {/* Summary Box */}
                  <div className="w-full text-left p-4 rounded-xl bg-white dark:bg-black/30 border border-[#e8e4dd] dark:border-white/10 text-xs font-mono space-y-1.5 text-zinc-700 dark:text-zinc-300">
                    <div className="flex justify-between border-b border-zinc-200 dark:border-white/10 pb-1 text-[#c5a880] font-semibold">
                      <span>{formData.projectType}</span>
                      <span>{formData.scope}</span>
                    </div>
                    <p><span className="text-zinc-500">Contact:</span> {formData.email} {formData.phone ? `· ${formData.phone}` : ""}</p>
                    <p><span className="text-zinc-500">Message:</span> &ldquo;{formData.message}&rdquo;</p>
                  </div>

                  {/* Dispatch Action Buttons */}
                  <div className="w-full flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={getMailtoUrl()}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c5a880] hover:bg-[#b5976e] text-black text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>

                    <button
                      onClick={handleCopy}
                      className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-zinc-200 dark:bg-white/10 hover:bg-zinc-300 dark:hover:bg-white/20 text-zinc-900 dark:text-white text-xs font-mono transition-all"
                      title="Copy message to clipboard"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        projectType: "Modular Kitchen & Joinery Design",
                        scope: "1,500 – 3,000 sq.ft",
                        message: "",
                      });
                    }}
                    className="mt-2 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-900 dark:hover:text-white underline transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sivadath"
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-white/5 border border-[#e8e4dd] dark:border-white/10 focus:border-[#c5a880] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sivadathdermal899@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-white/5 border border-[#e8e4dd] dark:border-white/10 focus:border-[#c5a880] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98638 83574"
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-white/5 border border-[#e8e4dd] dark:border-white/10 focus:border-[#c5a880] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                        Project Typology *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-[#18181c] border border-[#e8e4dd] dark:border-white/10 focus:border-[#c5a880] focus:outline-none text-sm text-zinc-900 dark:text-white font-sans"
                      >
                        <option value="Modular Kitchen & Joinery Design">Modular Kitchen & Joinery Design</option>
                        <option value="Full Residential Interior Architecture">Full Residential Interior Architecture</option>
                        <option value="Master Sanctuary / Bedroom Renovation">Master Sanctuary / Bedroom Renovation</option>
                        <option value="Photometric 3D Architectural CGI">Photometric 3D Architectural CGI</option>
                        <option value="Courtyard & Living Renovation">Courtyard & Living Renovation</option>
                        <option value="Commercial / Hospitality Space">Commercial / Hospitality Space</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider font-medium">
                        Estimated Area / Space Parameters *
                      </label>
                      <span className="text-[10px] font-mono text-[#c5a880]">
                        Selected: {formData.scope}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        "Under 1,500 sq.ft",
                        "1,500 – 3,000 sq.ft",
                        "3,000 – 5,000 sq.ft",
                        "5,000+ sq.ft",
                      ].map((scopeOption) => (
                        <button
                          key={scopeOption}
                          type="button"
                          onClick={() => setFormData({ ...formData, scope: scopeOption })}
                          className={`p-2.5 rounded-xl text-[11px] font-mono text-center border transition-all ${
                            formData.scope === scopeOption
                              ? "bg-[#c5a880] text-black font-semibold border-[#c5a880] shadow-sm scale-[1.02]"
                              : "bg-[#faf8f5] dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 border-[#e8e4dd] dark:border-white/10"
                          }`}
                        >
                          {scopeOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5 font-medium">
                      Project Vision & Location Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your space dimensions, preferred materials (e.g. teakwood, terracotta, calacatta marble), site location in Kerala or elsewhere, and anticipated timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] dark:bg-white/5 border border-[#e8e4dd] dark:border-white/10 focus:border-[#c5a880] focus:outline-none text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#c5a880] hover:bg-[#b5976e] text-black font-semibold text-xs font-mono uppercase tracking-[0.2em] transition-all shadow-lg shadow-[#c5a880]/15 mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Architectural Commission</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
