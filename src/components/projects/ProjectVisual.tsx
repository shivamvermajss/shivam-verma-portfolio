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
  { src: string; width: number; height: number }
> = {
  quickchat: { src: "/quick chat.png", width: 1408, height: 3040 },
  staysphere: { src: "/staysphere.png", width: 1536, height: 2752 },
  threadly: { src: "/threadly.png", width: 1408, height: 3040 },
  "youtube-watch-party": {
    src: "/youtube watch party.png",
    width: 1408,
    height: 3040,
  },
  "smart-meet": { src: "/smartmeet.png", width: 1408, height: 3040 },
  imagify: { src: "/imagify.png", width: 851, height: 1847 },
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
  const imgWidth = screenshotMeta?.width ?? 1408;
  const imgHeight = screenshotMeta?.height ?? 3040;

  const displayUrl = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <div
      className={cn(
        "relative w-full h-full bg-[#0d0d12] rounded-xl p-4 flex flex-col items-center justify-center gap-3 overflow-hidden select-none group/mockup",
        "border border-white/[0.08]",
        className
      )}
    >
      {/* Subtle Ambient Glow behind the mobile screenshot */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-full bg-purple-500/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle URL Pill (live apps) or Minimal "App Interface" Label */}
      <div className="relative z-20 flex items-center justify-center w-full">
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

      {/* Single-Bezel Natural 9:16 Mobile Screenshot (No Nested Borders or Extra Shadows) */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {screenshotSrc ? (
          <Image
            src={screenshotSrc}
            alt={`${title} — Mobile Application Preview`}
            width={imgWidth}
            height={imgHeight}
            sizes="(max-width: 640px) 220px, 280px"
            className={cn(
              "w-auto object-contain rounded-[24px] mx-auto transition-transform duration-500 ease-out group-hover/mockup:scale-[1.02]",
              isLarge ? "h-[360px] sm:h-[390px]" : "h-[340px]"
            )}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-[340px] gap-1.5 text-center p-2">
            <Layers className="w-5 h-5 text-indigo-400 opacity-60" />
            <span className="font-sans text-xs text-gray-400">{category}</span>
          </div>
        )}
      </div>
    </div>
  );
};
