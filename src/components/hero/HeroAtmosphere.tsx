"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";

export interface HeroAtmosphereProps {
  className?: string;
  disabled?: boolean;
}

export const HeroAtmosphere: React.FC<HeroAtmosphereProps> = ({
  className,
  disabled = false,
}) => {
  const hasPointer = useHasPointer();
  const prefersReducedMotion = useReducedMotion();

  const isSpotlightEnabled = hasPointer && !prefersReducedMotion && !disabled;

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none z-0",
        className
      )}
      aria-hidden="true"
    >
      {/* Layer 0: Obsidian Deep Base Gradient */}
      <div className="absolute inset-0 bg-[#070709]" />

      {/* Layer 1: Ambient Indigo Field & Aurora (Focused around Hero Visual Stage) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] lg:w-[1050px] h-[360px] sm:h-[520px] lg:h-[620px] pointer-events-none opacity-20 filter blur-[100px] sm:blur-[130px] rounded-full animate-aurora z-0">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.28) 0%, rgba(139, 92, 246, 0.12) 45%, rgba(59, 130, 246, 0.05) 70%, transparent 85%)",
          }}
        />
      </div>

      {/* Layer 1b: Secondary Ambient Atmospheric Depth Glow (Right Side Focus) */}
      <div className="absolute top-1/3 right-[5%] sm:right-[12%] w-[450px] sm:w-[600px] h-[300px] sm:h-[400px] opacity-15 filter blur-[120px] rounded-full pointer-events-none z-0">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.20) 0%, rgba(99, 102, 241, 0.08) 60%, transparent 80%)",
          }}
        />
      </div>

      {/* Layer 2: Interactive Pointer Spotlight (Follows cursor via CSS variables) */}
      {isSpotlightEnabled && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out z-0"
          style={{
            opacity: "var(--hero-spotlight-opacity, 0)",
            background:
              "radial-gradient(520px circle at var(--hero-spotlight-x, 50%) var(--hero-spotlight-y, 50%), rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.05) 40%, transparent 75%)",
          }}
        />
      )}

      {/* Layer 3: Technical Micro-Dot Grid Texture (Subtle Editorial Pattern) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 40%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
};
