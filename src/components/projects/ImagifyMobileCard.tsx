"use client";

import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImagifyMobileCardProps {
  liveUrl?: string;
  title?: string;
  category?: string;
  className?: string;
}

export const ImagifyMobileCard: React.FC<ImagifyMobileCardProps> = ({
  liveUrl = "https://imagify-coral.vercel.app",
  title = "Imagify",
  category = "AI / SaaS",
  className,
}) => {
  const displayUrl = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "imagify-coral.vercel.app";

  return (
    <div
      className={cn(
        "relative w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden select-none group/showcase",
        "bg-gradient-to-br from-[#0F1026]/90 via-[#0B0C18]/95 to-[#07070F]/95",
        "border border-white/[0.12] shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.18)]",
        "p-5 sm:p-6 flex flex-col items-center justify-between min-h-[480px]",
        className
      )}
    >
      {/* Background Subtle Tech Dot Matrix Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Pill Bar — Only subtle URL pill */}
      <div className="relative z-20 w-full flex items-center justify-center mb-3 px-1">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/[0.08] shadow-inner max-w-full truncate">
          <Lock className="w-3 h-3 text-emerald-400/90 shrink-0" />
          <span className="font-sans text-xs text-gray-300 tracking-normal truncate">
            {displayUrl}
          </span>
        </div>
      </div>

      {/* Central Visual Composition: Single Cleanly Centered Phone Mockup with Ambient Glow */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center py-2">
        {/* Subtle radial purple/indigo ambient glow behind the phone */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-[420px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(99,102,241,0.18),rgba(168,85,247,0.10),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Sleek Foreground Mobile Phone Mockup */}
        <div className="relative z-20 group/phone transition-transform duration-500 ease-out group-hover/showcase:scale-[1.02]">
          {/* Metallic Side Button Tabs */}
          <div
            className="absolute -left-[3px] top-16 w-[3px] h-5 bg-[#383A4E] rounded-l-xs z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#383A4E] rounded-l-xs z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -left-[3px] top-34 w-[3px] h-8 bg-[#383A4E] rounded-l-xs z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -right-[3px] top-22 w-[3px] h-11 bg-[#383A4E] rounded-r-xs z-0"
            aria-hidden="true"
          />

          {/* Phone Outer Chassis (Brushed Titanium) */}
          <div
            className={cn(
              "relative z-10 w-[215px] xs:w-[225px] sm:w-[235px] md:w-[240px] aspect-[851/1847]",
              "rounded-[38px] sm:rounded-[42px] p-[6.5px] sm:p-[7.5px]",
              "bg-gradient-to-b from-[#2E3043] via-[#151624] to-[#25273A]",
              "border border-white/20",
              "shadow-[0_24px_55px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(99,102,241,0.22)]"
            )}
          >
            {/* Phone Inner Black Bezel */}
            <div className="relative w-full h-full rounded-[32px] sm:rounded-[35px] overflow-hidden bg-black p-[2px]">
              {/* Speaker Grill Slit */}
              <div
                className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-[2.5px] bg-[#1A1B28] rounded-full z-30"
                aria-hidden="true"
              />

              {/* Phone Screen Display Area */}
              <div className="relative w-full h-full rounded-[30px] sm:rounded-[33px] overflow-hidden bg-[#0A0A10] flex flex-col">
                {/* Status Bar with Dynamic Island */}
                <div className="relative z-30 w-full h-6.5 bg-black flex items-center justify-between px-4 shrink-0 select-none">
                  {/* Time */}
                  <span className="font-semibold text-white/90 text-[9.5px] font-sans tracking-tight">
                    9:41
                  </span>

                  {/* Centered Dynamic Island */}
                  <div className="w-16 h-3.5 bg-[#0D0E18] border border-white/10 rounded-full flex items-center justify-between px-1.5 shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#050510] border border-[#2A2B42] flex items-center justify-center">
                      <span className="w-0.5 h-0.5 rounded-full bg-indigo-500/70" />
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#0A0B16]" />
                  </div>

                  {/* Signal & Battery */}
                  <div className="flex items-center gap-1 text-white/90">
                    <span className="text-[8px] font-bold font-sans">5G</span>
                    <div className="w-3 h-1.5 rounded-[2px] border border-white/80 p-[0.8px] flex items-center">
                      <div className="h-full w-full bg-emerald-400 rounded-[0.5px]" />
                    </div>
                  </div>
                </div>

                {/* App Viewport with Ambient Contrast-Softening Vignette */}
                <div className="relative w-full flex-1 overflow-hidden bg-[#edf0fd]">
                  <Image
                    src="/imagify.png"
                    alt={`${title} — Platform Mobile Preview`}
                    fill
                    priority
                    sizes="(max-width: 640px) 235px, 260px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover/phone:scale-[1.02]"
                  />

                  {/* Subtle Contrast-Softening Vignette to prevent harsh white glare */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5 pointer-events-none z-10"
                    aria-hidden="true"
                  />

                  {/* Subtle Screen Glass Sheen */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none z-10"
                    aria-hidden="true"
                  />

                  {/* Bottom iOS Home Indicator */}
                  <div
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/25 rounded-full z-30 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
