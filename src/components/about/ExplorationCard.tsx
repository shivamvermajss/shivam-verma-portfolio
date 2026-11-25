"use client";

import React from "react";
import { Spotlight } from "@/components/primitives/Spotlight";
import { ExplorationCard as ExplorationCardType } from "@/types/portfolio";
import { Layers, GitBranch, Compass, RefreshCw, Code2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  GitBranch,
  Compass,
  RefreshCw,
  Code2,
};

export interface ExplorationCardProps {
  card: ExplorationCardType;
  className?: string;
}

export const ExplorationCard: React.FC<ExplorationCardProps> = ({
  card,
  className,
}) => {
  const Icon = ICON_MAP[card.iconName] || Layers;

  return (
    <Spotlight
      color="rgba(99, 102, 241, 0.12)"
      size={220}
      className={cn("w-full h-full rounded-xl", className)}
    >
      <article
        aria-label={`${card.title}: ${card.description}`}
        className={cn(
          "group relative h-full rounded-xl p-3.5 flex flex-col justify-between overflow-hidden",
          "glass-02 bg-[#0C0C12]/90 border border-white/[0.07] shadow-card",
          "transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-indigo-500/25 hover:shadow-accent"
        )}
      >
        <div className="space-y-2">
          {/* Top Row: Icon + Title + Number */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Icon className="w-3 h-3 text-indigo-400/90 group-hover:text-indigo-300 transition-colors shrink-0" />
              <h4 className="text-[11px] font-bold font-mono tracking-wider text-[#E4E4E7] group-hover:text-white uppercase transition-colors">
                {card.title}
              </h4>
            </div>
            <span className="text-[9.5px] font-mono font-bold text-indigo-400/60 shrink-0">
              {card.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-[11px] text-[#71717A] leading-relaxed group-hover:text-[#A1A1AA] transition-colors">
            {card.description}
          </p>
        </div>

        {/* Evidence tags — visually muted, supporting role only */}
        {card.tags && card.tags.length > 0 && (
          <div className="pt-2.5 mt-2 border-t border-white/[0.04] flex flex-wrap gap-1">
            {card.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-1.5 py-px rounded text-[9px] font-mono bg-white/[0.03] border border-white/[0.05] text-indigo-300/60 group-hover:text-indigo-300/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Spotlight>
  );
};
