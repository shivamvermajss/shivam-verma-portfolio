"use client";

import React from "react";
import Image from "next/image";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImagifyMobileCard } from "./ImagifyMobileCard";

export interface ProjectVisualProps {
  projectId: string;
  title: string;
  category: string;
  liveUrl?: string;
  image?: string;
  className?: string;
  isFeatured?: boolean;
  isLarge?: boolean;
}

const PROJECT_SCREENSHOTS: Record<
  string,
  { src: string; imageClass: string }
> = {
  quickchat: {
    src: "/quick chat.png",
    imageClass: "object-cover object-top scale-[1.04] origin-top",
  },
  staysphere: {
    src: "/staysphere.png",
    imageClass: "object-cover object-center scale-[1.06]",
  },
  threadly: {
    src: "/threadly.png",
    imageClass: "object-cover object-center scale-[1.03]",
  },
  "youtube-watch-party": {
    src: "/youtube watch party.png",
    imageClass: "object-cover object-center scale-[1.095]",
  },
  "smart-meet": {
    src: "/smartmeet.png",
    imageClass: "object-cover object-center scale-[1.02]",
  },
  imagify: {
    src: "/imagify.png",
    imageClass: "object-cover object-top",
  },
};

export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  projectId,
  title,
  category,
  liveUrl,
  image,
  className,
  isLarge = false,
}) => {
  // Flagship Project Imagify: Render the dedicated featured showcase card
  if (projectId === "imagify") {
    return (
      <ImagifyMobileCard
        liveUrl={liveUrl}
        title={title}
        category={category}
        className={className}
      />
    );
  }

  const screenshotMeta = PROJECT_SCREENSHOTS[projectId];
  const screenshotSrc = image || screenshotMeta?.src;
  const imageClass =
    screenshotMeta?.imageClass ?? "object-cover object-center scale-[1.02]";
  const isStaySphere = projectId === "staysphere";

  return (
    <div
      className={cn(
        "relative w-full bg-[#0d0d11] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 overflow-hidden select-none group/mockup",
        "border border-white/[0.08]",
        isLarge ? "min-h-[365px] h-full" : "h-[360px] sm:h-[370px]",
        className
      )}
    >
      {/* Subtle Ambient Glow behind dark-themed mobile screenshots (omitted on StaySphere) */}
      {!isStaySphere && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-full bg-purple-500/10 blur-2xl pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Standardized App Interface Badge Across All Cards */}
      <div className="relative z-20 flex items-center justify-center w-full shrink-0">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-xs font-sans px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
          <span>App Interface</span>
        </div>
      </div>

      {/* Unified Centered Phone-Shaped Clipping Wrapper (Identical Framing & Bezel Proportions) */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {screenshotSrc ? (
          <div
            className={cn(
              "relative mx-auto aspect-[9/18] rounded-[28px] overflow-hidden bg-[#09090b] shadow-2xl transition-transform duration-500 ease-out group-hover/mockup:scale-[1.02]",
              isLarge ? "h-[290px] sm:h-[315px]" : "h-[290px]"
            )}
          >
            <Image
              src={screenshotSrc}
              alt={`${title} — Mobile Application Preview`}
              fill
              sizes="(max-width: 640px) 180px, 220px"
              className={cn("w-full h-full", imageClass)}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[290px] gap-1.5 text-center p-2">
            <Layers className="w-5 h-5 text-indigo-400 opacity-60" />
            <span className="font-sans text-xs text-gray-400">{category}</span>
          </div>
        )}
      </div>
    </div>
  );
};
