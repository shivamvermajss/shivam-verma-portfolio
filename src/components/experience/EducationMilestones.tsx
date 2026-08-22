"use client";

import React from "react";
import { educationData } from "@/data/experience";
import { Spotlight } from "@/components/primitives/Spotlight";
import { Badge } from "@/components/primitives/Badge";
import { Reveal } from "@/components/primitives/Reveal";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EducationMilestonesProps {
  className?: string;
}

export const EducationMilestones: React.FC<EducationMilestonesProps> = ({ className }) => {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Sub-header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-indigo-400" />
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F7]">
            Academic Foundation
          </h3>
        </div>
        <span className="text-xs font-mono text-[#A1A1AA]">
          COMPUTER SCIENCE & ENGINEERING
        </span>
      </div>

      {/* Grid: 3 Columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {educationData.map((edu, idx) => (
          <Reveal key={edu.id} variant="fade-up" delay={0.08 * (idx + 1)} className="h-full">
            <Spotlight
              color={edu.isPrimary ? "rgba(99, 102, 241, 0.18)" : "rgba(139, 92, 246, 0.1)"}
              size={300}
              className="w-full h-full rounded-[22px]"
            >
              <article
                aria-label={`${edu.degree} at ${edu.institution}`}
                className={cn(
                  "relative h-full rounded-[22px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden",
                  "glass-02 bg-[#0C0C12]/85 border border-white/[0.09] shadow-card",
                  "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-accent",
                  edu.isPrimary && "border-indigo-500/30 bg-[#0E0E18]/95 ring-1 ring-indigo-500/20"
                )}
              >
                <div className="space-y-3">
                  {/* Top Row: Year & Score */}
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06]">
                    <span className="flex items-center gap-1 text-xs font-mono text-[#A1A1AA]">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {edu.period}
                    </span>

                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold",
                      edu.isPrimary
                        ? "bg-indigo-950/60 text-indigo-200 border border-indigo-500/30"
                        : "bg-white/[0.04] text-[#E4E4E7] border border-white/[0.08]"
                    )}>
                      {edu.score}
                    </span>
                  </div>

                  {/* Degree & Field */}
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-[17px] font-bold text-[#F5F5F7] tracking-tight leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-indigo-300/90 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Bottom: Location */}
                <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#71717A]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.location}
                  </span>
                  <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
                    {edu.scoreLabel}
                  </span>
                </div>
              </article>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
