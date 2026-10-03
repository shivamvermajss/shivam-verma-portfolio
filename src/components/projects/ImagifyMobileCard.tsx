"use client";

import React from "react";
import Image from "next/image";
import { Lock, ArrowUpRight } from "lucide-react";
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
        "relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden select-none group/showcase",
        "bg-gradient-to-br from-[#0F1026]/95 via-[#0B0C18]/95 to-[#07070F]/95",
        "border border-white/[0.12] shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.18)]",
        "p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between min-h-[560px] sm:min-h-[620px] lg:min-h-[660px]",
        className
      )}
    >
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,rgba(99,102,241,0.28),rgba(168,85,247,0.12),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Background Subtle Tech Dot Matrix Grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Header Pill Bar (Clean & Professional URL Bar) */}
      <div className="relative z-20 w-full flex items-center justify-between gap-3 mb-4 sm:mb-6 px-1 sm:px-2">
        {/* URL Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.12] shadow-inner max-w-[260px] sm:max-w-none truncate">
          <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-mono text-xs text-[#E4E4E7] tracking-wide truncate">
            {displayUrl}
          </span>
        </div>

        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono font-semibold text-[11px] tracking-wider">ONLINE</span>
        </div>
      </div>

      {/* Central Phone Mockup Composition Container */}
      <div className="relative z-10 my-auto flex items-center justify-center w-full py-4 sm:py-6">
        {/* The Realistic iPhone 16 Pro Flagship Mockup Chassis */}
        <div className="relative group/phone transition-transform duration-500 ease-out group-hover/showcase:scale-[1.015]">
          {/* Metallic Side Button Tabs */}
          {/* Left Buttons: Action Button, Volume Up, Volume Down */}
          <div
            className="absolute -left-[3.5px] top-20 w-[3.5px] h-6 bg-[#383A4E] rounded-l-sm z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -left-[3.5px] top-30 w-[3.5px] h-10 bg-[#383A4E] rounded-l-sm z-0"
            aria-hidden="true"
          />
          <div
            className="absolute -left-[3.5px] top-44 w-[3.5px] h-10 bg-[#383A4E] rounded-l-sm z-0"
            aria-hidden="true"
          />

          {/* Right Button: Power / Siri Key */}
          <div
            className="absolute -right-[3.5px] top-28 w-[3.5px] h-14 bg-[#383A4E] rounded-r-sm z-0"
            aria-hidden="true"
          />

          {/* Phone Outer Chassis (Brushed Dark Titanium with Outer Ring) */}
          <div
            className={cn(
              "relative z-10 w-[250px] xs:w-[270px] sm:w-[290px] md:w-[305px] aspect-[851/1847]",
              "rounded-[44px] sm:rounded-[48px] p-[7.5px] sm:p-[8.5px]",
              "bg-gradient-to-b from-[#2E3043] via-[#151624] to-[#25273A]",
              "border border-white/20",
              "shadow-[0_28px_65px_-12px_rgba(0,0,0,0.95),0_0_40px_rgba(99,102,241,0.25)]"
            )}
          >
            {/* Phone Inner Black Bezel */}
            <div className="relative w-full h-full rounded-[38px] sm:rounded-[42px] overflow-hidden bg-black p-[2px]">
              {/* Speaker Grill Slit in the top bezel */}
              <div
                className="absolute top-1 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-[3px] bg-[#1A1B28] rounded-full z-30"
                aria-hidden="true"
              />

              {/* Phone Screen Display Area (Flex Column with dedicated Safe Area Header) */}
              <div className="relative w-full h-full rounded-[36px] sm:rounded-[40px] overflow-hidden bg-[#0A0A10] flex flex-col">
                {/* Top iOS / Flagship Status Bar (Dedicated Safe Area: Camera Notch never overlaps app content) */}
                <div className="relative z-30 w-full h-7 sm:h-8 bg-black flex items-center justify-between px-5 sm:px-6 shrink-0 select-none">
                  {/* Time */}
                  <span className="font-semibold text-white/90 text-[10px] sm:text-[10.5px] font-mono tracking-tight">
                    9:41
                  </span>

                  {/* Centered Sleek Dynamic Island Notch (Isolated safely inside the status bar) */}
                  <div className="w-18 sm:w-20 h-4.5 sm:h-5 bg-[#0D0E18] border border-white/10 rounded-full flex items-center justify-between px-2 shadow-inner">
                    {/* Camera Lens with glint */}
                    <div className="w-2 h-2 rounded-full bg-[#050510] border border-[#2A2B42] flex items-center justify-center">
                      <span className="w-0.5 h-0.5 rounded-full bg-indigo-500/70" />
                    </div>
                    {/* Sensor Dot */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A0B16]" />
                  </div>

                  {/* Right Status: Signal + 5G + Battery */}
                  <div className="flex items-center gap-1.5 text-white/90">
                    <div className="flex items-end gap-[1.5px] h-2">
                      <span className="w-[1.5px] h-[2.5px] bg-white rounded-xs" />
                      <span className="w-[1.5px] h-[4px] bg-white rounded-xs" />
                      <span className="w-[1.5px] h-[6px] bg-white rounded-xs" />
                      <span className="w-[1.5px] h-[8px] bg-white rounded-xs" />
                    </div>
                    <span className="text-[8.5px] font-bold font-mono">5G</span>
                    <div className="w-3.5 h-1.5 rounded-[2px] border border-white/80 p-[0.8px] flex items-center">
                      <div className="h-full w-full bg-emerald-400 rounded-[0.5px]" />
                    </div>
                  </div>
                </div>

                {/* App Viewport: Imagify Screenshot starts cleanly below the notch! */}
                <div className="relative w-full flex-1 overflow-hidden bg-[#edf0fd]">
                  {/* Real High-Resolution Mobile Screenshot from public/imagify.png */}
                  <Image
                    src="/imagify.png"
                    alt="Imagify — AI Image Generation SaaS Platform Mobile UI"
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 310px, 350px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover/phone:scale-[1.02]"
                  />

                  {/* Subtle Screen Glass Sheen Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-10"
                    aria-hidden="true"
                  />

                  {/* Bottom iOS Home Indicator Line */}
                  <div
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-1 bg-black/25 rounded-full z-30 pointer-events-none shadow-xs"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Circular Action Button (Dunzo Corner ↗ Button Equivalent) */}
      <div className="relative z-20 w-full flex items-center justify-end mt-2">
        {/* Soft Decorative Curved Pedestal behind Button (Matching Dunzo's Bottom-Right Curve) */}
        <div
          className="absolute -bottom-8 -right-8 w-36 h-36 rounded-tl-[64px] bg-gradient-to-br from-indigo-500/[0.12] via-purple-500/[0.05] to-transparent pointer-events-none border-t border-l border-white/[0.08] backdrop-blur-xs"
          aria-hidden="true"
        />

        {/* Circular Action Button */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} live application at ${displayUrl}`}
          className={cn(
            "relative z-30 group/btn flex items-center justify-center",
            "w-12 h-12 sm:w-14 sm:h-14 rounded-full",
            "bg-white/[0.08] hover:bg-indigo-600 active:bg-indigo-700",
            "border border-white/20 hover:border-indigo-400",
            "text-white shadow-[0_12px_32px_rgba(0,0,0,0.7),0_0_25px_rgba(99,102,241,0.35)]",
            "backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          )}
        >
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300 text-white" />
          <span className="sr-only">Launch Live Application</span>
        </a>
      </div>
    </div>
  );
};
