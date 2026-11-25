"use client";

import React from "react";
import Image from "next/image";
import { Lock, Layers } from "lucide-react";
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
    imageClass: "object-cover object-top scale-[1.05] origin-top",
  },
  staysphere: {
    src: "/staysphere.png",
    imageClass: "object-cover object-center scale-[1.06]",
  },
  threadly: {
    src: "/threadly.png",
    imageClass: "object-cover object-center scale-[1.08]",
  },
  "youtube-watch-party": {
    src: "/youtube watch party.png",
    imageClass: "object-cover object-center scale-[1.09]",
  },
  "smart-meet": {
    src: "/smartmeet.png",
    imageClass: "object-cover object-center scale-[1.05]",
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
    screenshotMeta?.imageClass ?? "object-cover object-center scale-[1.05]";
  const isStaySphere = projectId === "staysphere";

  const displayUrl = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <div
      className={cn(
        "relative w-full bg-[#0d0d11] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 overflow-hidden select-none group/mockup",
        "border border-white/[0.08]",
        isLarge ? "min-h-[365px] h-full" : "min-h-[365px] sm:min-h-[375px]",
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

      {/* Subtle URL Pill (live apps) or Minimal "App Interface" Label */}
      <div className="relative z-20 flex items-center justify-center w-full shrink-0">
        {displayUrl ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/[0.08] max-w-[240px] truncate">
            <Lock className="w-3 h-3 text-emerald-400/90 shrink-0" />
            <span className="font-sans text-xs text-gray-300 truncate">
              {displayUrl}
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80 shrink-0" />
            <span className="font-sans text-xs text-gray-400">
              App Interface
            </span>
          </div>
        )}
      </div>

      {/* Unified Centered Phone-Shaped Clipping Wrapper (No Double CSS Bezels) */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {screenshotSrc ? (
          <div
            className={cn(
              "relative mx-auto aspect-[9/19] rounded-[28px] overflow-hidden bg-[#09090b] shadow-2xl transition-transform duration-500 ease-out group-hover/mockup:scale-[1.02]",
              isLarge ? "h-[290px] sm:h-[330px]" : "h-[290px] sm:h-[300px]"
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
