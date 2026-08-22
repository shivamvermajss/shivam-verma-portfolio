"use client";

import React from "react";
import { Badge } from "@/components/primitives/Badge";
import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

export interface VisualCoreProps {
  className?: string;
  name?: string;
  title?: string;
}

export const VisualCore: React.FC<VisualCoreProps> = ({
  className,
  name = portfolioData.personal.name,
  title = portfolioData.personal.title,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-between border-b border-white/[0.08] pb-3.5",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform:
          "translate3d(var(--stage-core-tx, 0px), var(--stage-core-ty, 0px), 30px)",
      }}
    >
      {/* Central Identity Monogram & Information */}
      <div
        className="flex items-center gap-2.5"
        style={{ transform: "translateZ(10px)" }}
      >
        {/* SV Monogram Badge with Specular Rim */}
        <div
          className="relative flex items-center justify-center w-8 h-8 rounded-xl gradient-primary text-white font-bold text-xs shadow-accent font-mono shrink-0"
          style={{ transform: "translateZ(14px)" }}
        >
          <span>SV</span>
          <div
            className="absolute inset-0 rounded-xl border border-white/25 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Identity Headings */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-[#F5F5F7] tracking-tight">
            {name.toUpperCase()}
          </span>
          <span className="text-[9.5px] font-mono text-[#71717A] uppercase tracking-wider">
            {title.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Available for Work Status Indicator */}
      <div style={{ transform: "translateZ(12px)" }}>
        <Badge variant="success" dot size="sm">
          AVAILABLE FOR WORK
        </Badge>
      </div>
    </div>
  );
};
