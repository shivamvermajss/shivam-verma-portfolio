"use client";

import React from "react";
import { experienceData } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";
import { Reveal } from "@/components/primitives/Reveal";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExperienceTimelineProps {
  className?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ className }) => {
  const primaryExperience = experienceData[0];

  return (
    <div className={cn("relative", className)}>
      {/* Timeline Container with Left Rail */}
      <div className="relative pl-6 sm:pl-8 md:pl-10">
        {/* Vertical Timeline Connector Line */}
        <div
          className="absolute left-2.5 sm:left-3 top-3 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-indigo-500/30 to-transparent"
          aria-hidden="true"
        />

        {/* Active Glowing Timeline Node */}
        <div
          className="absolute left-0 sm:left-0.5 top-3 -translate-x-[2px] z-10 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-950 border-2 border-indigo-400 shadow-[0_0_16px_rgba(99,102,241,0.6)]"
          aria-hidden="true"
        >
          <div className="w-2 h-2 rounded-full bg-indigo-300 animate-pulse" />
        </div>

        {/* Experience Milestone Content */}
        <Reveal variant="fade-up">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span>PROFESSIONAL TIMELINE · 2025</span>
            </div>

            <ExperienceCard item={primaryExperience} />
          </div>
        </Reveal>
      </div>
    </div>
  );
};
