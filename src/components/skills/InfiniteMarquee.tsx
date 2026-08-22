"use client";

import React from "react";
import { marqueeSkills } from "@/data/skills";
import { cn } from "@/lib/utils";

export interface InfiniteMarqueeProps {
  className?: string;
  speed?: "normal" | "slow";
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden py-4 sm:py-5 rounded-2xl",
        "bg-white/[0.025] border border-white/[0.07] select-none",
        className
      )}
      aria-label="Continuously scrolling technical skills stream"
    >
      {/* Left and Right Edge Gradient Masks for Smooth Dissolve */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-[#070709] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-[#070709] to-transparent"
        aria-hidden="true"
      />

      {/* Marquee Track Container */}
      <div className="flex items-center overflow-hidden">
        {/* Track 1: Semantic, accessible to screen readers */}
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center shrink-0">
          {marqueeSkills.map((tech, index) => (
            <div key={`track1-${index}`} className="flex items-center">
              <span className="font-mono text-sm sm:text-base font-semibold tracking-wider text-[#D4D4D8] hover:text-white transition-colors duration-200 px-5 sm:px-8">
                {tech}
              </span>
              <span className="w-2 h-2 rounded-full bg-indigo-500/60 shadow-[0_0_8px_rgba(99,102,241,0.5)] shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Track 2: Visual duplicate for seamless loop (hidden from assistive tech) */}
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center shrink-0" aria-hidden="true">
          {marqueeSkills.map((tech, index) => (
            <div key={`track2-${index}`} className="flex items-center">
              <span className="font-mono text-sm sm:text-base font-semibold tracking-wider text-[#D4D4D8] hover:text-white transition-colors duration-200 px-5 sm:px-8">
                {tech}
              </span>
              <span className="w-2 h-2 rounded-full bg-indigo-500/60 shadow-[0_0_8px_rgba(99,102,241,0.5)] shrink-0" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
