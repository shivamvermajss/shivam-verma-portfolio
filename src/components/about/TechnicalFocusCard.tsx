"use client";

import React from "react";
import { BentoTiltWrapper } from "./BentoTiltWrapper";
import { portfolioData } from "@/data/portfolioData";
import { Cpu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TechnicalFocusCardProps {
  className?: string;
  isActive?: boolean;
  isConnected?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
}

export const TechnicalFocusCard: React.FC<TechnicalFocusCardProps> = ({
  className,
  isActive = false,
  isConnected = false,
  onHoverChange,
}) => {
  const focus =
    portfolioData.about?.technicalFocus || {
      title: "Full-Stack Web Engineering",
      description:
        "Building end-to-end web applications across modern frontend architectures, RESTful APIs, JWT authentication, and database schemas.",
      technologies: ["MERN", "React", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs"],
    };

  const handleViewSkills = (e: React.MouseEvent) => {
    e.stopPropagation();
    const skills = document.getElementById("skills");
    if (skills) {
      skills.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BentoTiltWrapper
      cardId="technical-focus"
      isActive={isActive}
      isConnected={isConnected}
      onHoverChange={onHoverChange}
      spotlightColor="rgba(99, 102, 241, 0.2)"
      spotlightSize={300}
      className={cn("w-full h-full", className)}
    >
      <article
        aria-label={`Technical Focus: ${focus.title}`}
        className="relative h-full rounded-[24px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
      >
        <div className="space-y-3.5">
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Cpu
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  isActive || isConnected ? "text-indigo-300" : "text-indigo-400"
                )}
              />
              <span className="text-[10.5px] font-mono text-[#71717A] uppercase tracking-wider font-semibold">
                TECHNICAL FOCUS
              </span>
            </div>

            <button
              onClick={handleViewSkills}
              aria-label="View Skills and Tech Stack section"
              className="group/link inline-flex items-center gap-1 text-[11px] font-mono text-indigo-300/90 hover:text-indigo-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded px-1 -mr-1 transition-colors"
            >
              <span>VIEW SKILLS</span>
              <ArrowUpRight className="w-3 h-3 text-indigo-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Title & Description */}
          <div className="space-y-1.5">
            <h4
              className={cn(
                "text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors duration-200",
                isActive ? "text-white" : "text-[#F5F5F7]"
              )}
            >
              {focus.title}
            </h4>
            <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed">
              {focus.description}
            </p>
          </div>
        </div>

        {/* Core Stack Pills */}
        <div className="pt-3 mt-4 border-t border-white/[0.08] space-y-1.5">
          <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
            PRIMARY TECH STACK
          </div>
          <div className="flex flex-wrap gap-1.5">
            {focus.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={cn(
                  "px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all duration-200",
                  isActive
                    ? "bg-white/[0.06] border border-white/[0.16] text-white"
                    : isConnected
                    ? "bg-white/[0.04] border border-indigo-500/25 text-indigo-200"
                    : "bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8] hover:border-white/[0.16] hover:text-white"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </BentoTiltWrapper>
  );
};
