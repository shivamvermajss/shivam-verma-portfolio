"use client";

import React from "react";
import { BentoTiltWrapper } from "./BentoTiltWrapper";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EducationIdentityCardProps {
  className?: string;
  isActive?: boolean;
  isConnected?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
}

export const EducationIdentityCard: React.FC<EducationIdentityCardProps> = ({
  className,
  isActive = false,
  isConnected = false,
  onHoverChange,
}) => {
  const edu =
    portfolioData.about?.educationHighlight || {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "JSS Academy of Technical Education",
      period: "2023 — 2026",
      score: "7.77 CGPA",
      scoreLabel: "Cumulative GPA",
      location: "Noida, U.P.",
    };

  return (
    <BentoTiltWrapper
      cardId="education"
      isActive={isActive}
      isConnected={isConnected}
      onHoverChange={onHoverChange}
      spotlightColor="rgba(139, 92, 246, 0.18)"
      spotlightSize={300}
      className={cn("w-full h-full", className)}
    >
      <article
        aria-label={`Academic Foundation: ${edu.degree}`}
        className="relative h-full rounded-[24px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
      >
        <div className="space-y-3.5">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <GraduationCap
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  isActive || isConnected ? "text-indigo-300" : "text-indigo-400"
                )}
              />
              <span className="text-[10.5px] font-mono text-[#71717A] uppercase tracking-wider font-semibold">
                ACADEMIC FOUNDATION
              </span>
            </div>

            <span
              className={cn(
                "px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold transition-all duration-200",
                isActive
                  ? "bg-indigo-500/25 text-white border border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.25)]"
                  : isConnected
                  ? "bg-indigo-950/80 text-indigo-200 border border-indigo-500/40"
                  : "bg-indigo-950/60 text-indigo-200 border border-indigo-500/30"
              )}
            >
              {edu.score}
            </span>
          </div>

          {/* Degree & Institution */}
          <div className="space-y-1">
            <h4
              className={cn(
                "text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors duration-200",
                isActive ? "text-white" : "text-[#F5F5F7]"
              )}
            >
              {edu.degree}
            </h4>
            <p className="text-xs sm:text-sm text-indigo-300 font-medium">
              {edu.institution}
            </p>
          </div>
        </div>

        {/* Footer: Timeline & Location */}
        <div className="pt-3 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#71717A]">
          <span className="flex items-center gap-1.5 text-[#A1A1AA]">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            {edu.period}
          </span>
          <span className="flex items-center gap-1 text-[#A1A1AA]">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            {edu.location}
          </span>
        </div>
      </article>
    </BentoTiltWrapper>
  );
};
