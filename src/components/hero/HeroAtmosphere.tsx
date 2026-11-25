"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useMediaQuery";

export interface HeroAtmosphereProps {
  className?: string;
  disabled?: boolean;
}

export const HeroAtmosphere: React.FC<HeroAtmosphereProps> = ({
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Autoplay prevented by browser policy; poster image remains visible
        });
      }
    }
  }, [prefersReducedMotion]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none z-0",
        className
      )}
      style={{
        contain: "strict",
      }}
      aria-hidden="true"
    >
      {/* Base Obsidian Foundation */}
      <div className="absolute inset-0 bg-[#070709]" />

      {/* Layer 1: Hardware-Accelerated 60fps Space/Earth Background Video */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          contain: "paint layout size",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero.png"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover object-top pointer-events-none select-none"
          style={{
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            willChange: "transform",
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Layer 2a: Dark Readability Overlay — Targeted at Text / Content Area (Left & Bottom) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(7, 7, 9, 0.65) 0%, rgba(7, 7, 9, 0.35) 42%, rgba(7, 7, 9, 0.08) 68%, transparent 100%)",
        }}
      />

      {/* Layer 2b: Vertical Gradient (Subtle bottom fade for smooth section transition) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#070709] via-[#070709]/40 via-20% to-transparent pointer-events-none" />

      {/* Layer 2c: Top Subtle Fade for Navbar Harmony */}
      <div className="absolute inset-x-0 top-0 h-24 z-[1] bg-gradient-to-b from-[#070709]/45 to-transparent pointer-events-none" />

      {/* Layer 3: Cosmic Indigo / Purple Identity Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] sm:h-[450px] opacity-25 filter blur-[90px] rounded-full pointer-events-none z-[2]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(99, 102, 241, 0.30) 0%, rgba(139, 92, 246, 0.15) 40%, rgba(59, 130, 246, 0.05) 65%, transparent 85%)",
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Layer 4: Soft Edge Vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 60%, rgba(7, 7, 9, 0.35) 90%, rgba(7, 7, 9, 0.70) 100%)",
        }}
      />

      {/* Layer 5: Technical Precision Micro-Dot Matrix */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] z-[2]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
};


