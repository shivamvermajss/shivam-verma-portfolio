"use client";

import React from "react";
import { progressMarkers } from "@/data/experience";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProgressMarkersProps {
  className?: string;
}

export const ProgressMarkers: React.FC<ProgressMarkersProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3",
        className
      )}
      aria-label="Verified Career & Educational Progress Markers"
    >
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="text-metadata text-[11px] text-[#A1A1AA] tracking-wider uppercase font-semibold">
            VERIFIED PROGRESS MARKERS
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#71717A] hidden sm:inline">
          AUTHENTICATED ATTESTATIONS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {progressMarkers.map((marker) => (
          <div
            key={marker.id}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <div className="text-xs font-semibold text-[#F5F5F7] truncate">
                {marker.title}
              </div>
              <div className="text-[11px] text-[#A1A1AA] truncate mt-0.5">
                {marker.subtitle}
              </div>
              <div className="text-[10px] font-mono text-indigo-300/80 mt-1">
                {marker.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
