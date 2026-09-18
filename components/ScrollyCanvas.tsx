"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDown } from "lucide-react";

interface ScrollyCanvasProps {
  totalFrames?: number;
  frameFolder?: string;
  onExploreClick?: () => void;
}

export default function ScrollyCanvas({
  totalFrames = 192,
  frameFolder = "/sequence/bedroom",
  onExploreClick,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [activeFrameDisplay, setActiveFrameDisplay] = useState<number>(1);
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const getFrameUrl = useCallback(
    (index: number) => {
      const frameNum = String(index + 1).padStart(4, "0");
      return `${frameFolder}/frame_${frameNum}.jpg`;
    },
    [frameFolder]
  );

  // Draw the specified frame onto the canvas
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Find closest loaded frame if requested frame is not yet ready
    let img: HTMLImageElement | null = imagesRef.current[frameIndex] || null;
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const lower = frameIndex - offset;
        const upper = frameIndex + offset;
        if (lower >= 0 && imagesRef.current[lower]?.complete && imagesRef.current[lower]!.naturalWidth > 0) {
          img = imagesRef.current[lower];
          break;
        }
        if (upper < totalFrames && imagesRef.current[upper]?.complete && imagesRef.current[upper]!.naturalWidth > 0) {
          img = imagesRef.current[upper];
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Aspect ratio cover calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawW: number;
    let drawH: number;
    let drawX: number;
    let drawY: number;

    if (canvasRatio > imgRatio) {
      drawW = width;
      drawH = width / imgRatio;
      drawX = 0;
      drawY = (height - drawH) / 2;
    } else {
      drawH = height;
      drawW = height * imgRatio;
      drawX = (width - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();
  }, [totalFrames]);

  // Initial load: Frame 01 first for instant visual, then batch load remainder
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);

    // 1. Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      setLoadedCount(1);
      drawFrame(0);

      // 2. Load the remaining frames in progressive batches
      let index = 1;
      const batchSize = 6;

      const loadNextBatch = () => {
        if (index >= totalFrames) return;
        const batchEnd = Math.min(index + batchSize, totalFrames);
        let batchLoaded = 0;

        for (let i = index; i < batchEnd; i++) {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => {
            imagesRef.current[i] = img;
            setLoadedCount((prev) => prev + 1);
            batchLoaded++;
            if (batchLoaded === batchEnd - index) {
              index = batchEnd;
              loadNextBatch();
            }
          };
          img.onerror = () => {
            batchLoaded++;
            if (batchLoaded === batchEnd - index) {
              index = batchEnd;
              loadNextBatch();
            }
          };
        }
      };

      loadNextBatch();
    };

    return () => {
      imagesRef.current = [];
    };
  }, [totalFrames, getFrameUrl, drawFrame]);

  // Handle Window Resize to keep canvas sharp
  useEffect(() => {
    const handleResize = () => {
      drawFrame(Math.round(currentFrameRef.current));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // RAF Animation Loop for smooth damping
  useEffect(() => {
    let lastRenderedFrame = -1;

    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * 0.18; // smooth damping
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const currentInt = Math.max(0, Math.min(totalFrames - 1, Math.round(currentFrameRef.current)));

      if (currentInt !== lastRenderedFrame) {
        drawFrame(currentInt);
        lastRenderedFrame = currentInt;
        setActiveFrameDisplay(currentInt + 1);

        // Update active chapter based on progression
        const progress = currentInt / (totalFrames - 1);
        if (progress < 0.25) setActiveChapter(0);
        else if (progress < 0.55) setActiveChapter(1);
        else if (progress < 0.8) setActiveChapter(2);
        else setActiveChapter(3);
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [totalFrames, drawFrame]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      if (scrollHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollHeight));
      targetFrameRef.current = progress * (totalFrames - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

  const chapters = [
    {
      num: "01",
      subtitle: "SYMMETRICAL AXIAL PLAN",
      title: "Stillness & Monumental Alignment",
      description: "Centering the master sanctuary around a bespoke channel-tufted leather headboard, framed by vertical bronze mirrors and warm edge-lit architectural reveals.",
      meta: "Focal Plane · 0° Frontal Axis",
    },
    {
      num: "02",
      subtitle: "MATERIAL TACTILITY",
      title: "Walnut Fluting & Calacatta Marble",
      description: "Vertical acoustic timber panels create rhythmic warmth against polished Calacatta marble, catching daylight and ambient cove reflections.",
      meta: "Material Trajectory · Lateral Orbit",
    },
    {
      num: "03",
      subtitle: "NOCTURNE ILLUMINATION",
      title: "Concealed Layered Luminescence",
      description: "Precision 3000K Kelvin architectural cove lighting, recessed floating plinth glow, and internal illuminated smoked-glass wardrobe vitrines.",
      meta: "Photometric Simulation · Atmospheric Glow",
    },
    {
      num: "04",
      subtitle: "SPATIAL SYNTHESIS",
      title: "Bespoke Millwork & Private Living",
      description: "Harmonizing floor-to-ceiling dressing storage, acoustic fluting, and a floating curved marble media console into one continuous sanctuary.",
      meta: "Complete Composition · 3/4 Spatial Synthesis",
    },
  ];

  const currentChapter = chapters[activeChapter];
  // const loadPercentage = Math.round((loadedCount / totalFrames) * 100);

  return (
    <div
      ref={containerRef}
      id="cinematic-experience"
      className="relative w-full bg-[#09090b] text-white"
      style={{ height: "450vh" }}
    >
      {/* Sticky Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas Engine */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ willChange: "transform" }}
        />

        {/* Ambient Vignette & Architectural Gradient Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-transparent to-black/75 opacity-90" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/80 via-transparent to-black/55" />

        {/* Editorial Project Header (Top Left) */}
        <div className="absolute top-24 left-6 sm:left-12 z-20 flex flex-col gap-1 pointer-events-none">
          {/* <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.28em] text-[#c5a880] uppercase">
              Featured Project · Residence N° 01
            </span>
          </div> */}
          <h1 className="text-xl sm:text-2xl font-serif text-white font-light tracking-wide">
            The Master Sanctuary
          </h1>
          <p className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase hidden sm:block">
            Kannur, Kerala · Photometric 3D Spatial Continuum
          </p>
        </div>

        {/* Spatial Axis Tracker (Top Right) */}
        {/* <div className="absolute top-24 right-6 sm:right-12 z-20 flex items-center gap-3">
          {loadPercentage < 100 ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 tracking-widest uppercase">
              <div className="w-2 h-2 rounded-full border border-t-[#c5a880] border-white/20 animate-spin" />
              <span>Loading Scene {loadPercentage}%</span>
            </div>
          ) : (
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300">
              <span className="text-[#c5a880] font-medium tracking-widest">
                AXIS {String(activeFrameDisplay).padStart(3, "0")}
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">{totalFrames}</span>
            </div>
          )}
        </div> */}

        {/* Cinematic Chapter Story Overlay (Center-Left) */}
        <div className="absolute left-6 sm:left-12 md:left-16 bottom-16 sm:bottom-20 max-w-xl z-20 pointer-events-none">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#c5a880] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#c5a880]/30">
              Chapter {currentChapter.num} · {currentChapter.subtitle}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-white font-light leading-none mb-4 drop-shadow-lg">
            {currentChapter.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-200 font-light leading-relaxed mb-4 max-w-md drop-shadow">
            {currentChapter.description}
          </p>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880]" />
            <span>{currentChapter.meta}</span>
          </div>
        </div>

        {/* Subtle Architectural Scroll Indicator (Center Bottom) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-80">
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-zinc-300">
            Scroll to Navigate Space
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#c5a880] to-transparent animate-pulse" />
        </div>

        {/* Selected Works Quick Link (Bottom Right) */}
        <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center gap-3">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/45 hover:bg-black/70 backdrop-blur-md border border-white/15 text-[11px] text-zinc-200 hover:text-white transition-all uppercase tracking-widest font-mono group"
          >
            <span>Curated Portfolio</span>
            <ArrowDown className="w-3 h-3 text-[#c5a880] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
