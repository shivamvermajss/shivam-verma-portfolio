"use client";

import React from "react";
import { Badge } from "@/components/primitives/Badge";
import { projectsSectionCopy } from "@/data/projects";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow?: string;
  title?: string;
  highlightedTitle?: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow = projectsSectionCopy.eyebrow,
  title = projectsSectionCopy.title,
  highlightedTitle = projectsSectionCopy.highlightedTitle,
  description = projectsSectionCopy.description,
  className,
}) => {
  return (
    <div className={cn("space-y-3 sm:space-y-3.5 max-w-2xl sm:max-w-3xl", className)}>
      <div className="flex items-center gap-2">
        <Badge variant="accent" dot>
          {eyebrow}
        </Badge>
      </div>

      <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
        {title}{" "}
        <span className="gradient-accent-text font-extrabold">{highlightedTitle}</span>
      </h2>

      <p className="text-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );
};
