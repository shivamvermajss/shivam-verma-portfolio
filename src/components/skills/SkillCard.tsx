"use client";

import React from "react";
import { SkillCategory } from "@/data/skills";
import { Spotlight } from "@/components/primitives/Spotlight";
import { Badge } from "@/components/primitives/Badge";
import { SkillChip } from "./SkillChip";
import { cn } from "@/lib/utils";

export interface SkillCardProps {
  category: SkillCategory;
  className?: string;
  colSpanClasses?: string;
  spotlightColor?: string;
  badgeVariant?: "default" | "accent" | "outline" | "success";
}

export const SkillCard: React.FC<SkillCardProps> = ({
  category,
  className,
  colSpanClasses = "col-span-1",
  spotlightColor = "rgba(139, 92, 246, 0.14)",
  badgeVariant = "default",
}) => {
  return (
    <Spotlight
      color={spotlightColor}
      size={340}
      className={cn("w-full h-full rounded-[24px]", colSpanClasses, className)}
    >
      <article
        aria-label={`${category.title} Skills`}
        className={cn(
          "relative h-full rounded-[24px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden",
          "glass-02 bg-[#0C0C12]/90 border border-white/[0.1] shadow-card",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/[0.22] hover:shadow-accent"
        )}
      >
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.07]">
            <Badge variant={badgeVariant} size="sm">
              {category.eyebrow}
            </Badge>
            <span className="font-mono text-[10.5px] text-[#A1A1AA] uppercase tracking-wider font-medium">
              {category.skills.length} TECHNOLOGIES
            </span>
          </div>

          {/* Title & Concise Role Description */}
          <div className="space-y-1.5 pt-0.5">
            <h4 className="text-lg sm:text-xl font-bold text-[#F5F5F7] tracking-tight">
              {category.title}
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
              {category.description}
            </p>
          </div>
        </div>

        {/* Chips List */}
        <div className="pt-4 mt-3.5 border-t border-white/[0.07]">
          <div className="flex flex-wrap gap-2 sm:gap-2.5" role="list">
            {category.skills.map((skill) => (
              <SkillChip key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </article>
    </Spotlight>
  );
};
