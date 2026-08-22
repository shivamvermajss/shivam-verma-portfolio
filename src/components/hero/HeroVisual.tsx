"use client";

import React from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { VisualStage } from "./visual/VisualStage";
import { VisualCore } from "./visual/VisualCore";
import { CapabilityGrid } from "./visual/CapabilityGrid";
import { SpatialOverlay } from "./visual/SpatialOverlay";
import { cn } from "@/lib/utils";

export interface HeroVisualProps {
  className?: string;
  disabled?: boolean;
}

const MOBILE_TECH = ["React", "Node.js", "MongoDB", "JavaScript"];

export const HeroVisual: React.FC<HeroVisualProps> = ({
  className,
  disabled = false,
}) => {
  return (
    <Reveal
      variant="fade-up"
      delay={0.2}
      className={cn("w-full max-w-[480px] xl:max-w-[500px]", className)}
    >
      <VisualStage disabled={disabled}>
        {/* Layer 1: Developer Identity Core Focal Point (translateZ: 30px) */}
        <VisualCore />

        {/* Layer 2: 4 Verified Engineering Capability Pillars (translateZ: 14px) */}
        <CapabilityGrid />

        {/* Mobile Static Fallback: 4 Primary Technologies (Visible only on < sm: screens) */}
        <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center gap-1.5 sm:hidden">
          <span className="text-metadata text-[#71717A] mr-1 text-[9.5px]">CORE:</span>
          {MOBILE_TECH.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[10.5px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#A1A1AA]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Layer 3: Spatial Overlay (True Absolute Spatial Floating Technology Nodes) */}
        <SpatialOverlay />
      </VisualStage>
    </Reveal>
  );
};
