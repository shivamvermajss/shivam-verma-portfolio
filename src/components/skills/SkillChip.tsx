"use client";

import React, { useState } from "react";
import { SkillItem } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Sparkles, Layers, Terminal, Database, Radio, Wrench, Binary } from "lucide-react";

export interface SkillChipProps {
  skill: SkillItem;
  className?: string;
  showCategoryBadge?: boolean;
}

const getCategoryIcon = (category: SkillItem["category"], isCore?: boolean) => {
  const iconClasses = isCore ? "w-3.5 h-3.5" : "w-3.5 h-3.5 opacity-90";
  switch (category) {
    case "frontend":
      return <Layers className={cn(iconClasses, "text-indigo-400")} />;
    case "backend":
      return <Terminal className={cn(iconClasses, "text-violet-400")} />;
    case "database":
      return <Database className={cn(iconClasses, "text-blue-400")} />;
    case "realtime":
      return <Radio className={cn(iconClasses, "text-emerald-400")} />;
    case "tools":
      return <Wrench className={cn(iconClasses, "text-zinc-400")} />;
    case "coreCS":
      return <Binary className={cn(iconClasses, "text-purple-400")} />;
    case "languages":
    default:
      return <Sparkles className={cn(iconClasses, "text-indigo-300")} />;
  }
};

export const SkillChip: React.FC<SkillChipProps> = ({
  skill,
  className,
  showCategoryBadge = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasProjects = skill.usedInProjects && skill.usedInProjects.length > 0;
  const isCore = Boolean(skill.isCore);

  return (
    <div
      tabIndex={0}
      role="listitem"
      aria-label={`${skill.name}${skill.description ? `: ${skill.description}` : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={cn(
        "group relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-mono",
        "transition-all duration-200 ease-out cursor-default select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/80 focus-visible:border-indigo-500",
        "hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(99,102,241,0.18)] hover:border-indigo-400/50 hover:text-white",
        isCore
          ? "bg-indigo-950/30 border border-indigo-500/35 text-white shadow-[0_0_12px_rgba(99,102,241,0.12)] hover:bg-indigo-900/40"
          : "bg-white/[0.04] border border-white/[0.09] text-[#E4E4E7] hover:bg-white/[0.08]",
        className
      )}
    >
      <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
        {getCategoryIcon(skill.category, isCore)}
      </span>

      <span className={cn("font-medium tracking-tight", isCore ? "text-white font-semibold" : "text-[#F5F5F7]")}>
        {skill.name}
      </span>

      {hasProjects && (
        <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[9.5px] font-mono tracking-wider uppercase rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
          PROJECTS
        </span>
      )}

      {/* Subtle Accessible Hover Tooltip */}
      {skill.description && (
        <div
          role="tooltip"
          aria-hidden={!isHovered}
          className={cn(
            "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-30",
            "px-3 py-1.5 rounded-lg text-xs font-sans font-normal text-[#F5F5F7] tracking-normal",
            "bg-[#12121A]/95 border border-white/[0.16] shadow-2xl backdrop-blur-md whitespace-nowrap",
            "transition-all duration-200 ease-out",
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1"
          )}
        >
          {skill.description}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#12121A]" />
        </div>
      )}
    </div>
  );
};
