"use client";

import React from "react";
import { ExplorationCard as ExplorationCardType } from "@/types/portfolio";
import { ExplorationCard } from "./ExplorationCard";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExplorationGridProps {
  cards: ExplorationCardType[];
  heading?: {
    title: string;
    subtitle: string;
  };
  className?: string;
}

export const ExplorationGrid: React.FC<ExplorationGridProps> = ({
  cards,
  heading = {
    title: "WHAT I EXPLORE",
    subtitle: "Areas that shape the way I build, design systems, and learn.",
  },
  className,
}) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      {/* Compact sub-section label */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-indigo-300/90 font-semibold uppercase tracking-widest">
          <Compass className="w-3 h-3 text-indigo-400/80 shrink-0" />
          <span>{heading.title}</span>
        </div>

        <p className="text-[11px] font-mono text-[#52525B]">
          {heading.subtitle}
        </p>
      </div>

      {/* 2×2 compact grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5">
        {cards.map((card) => (
          <ExplorationCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
