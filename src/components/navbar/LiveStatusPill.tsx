"use client";

import React from "react";
import { Magnetic } from "@/components/primitives/Magnetic";
import { Spotlight } from "@/components/primitives/Spotlight";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { AvailabilityStatus } from "@/types/portfolio";
import { cn } from "@/lib/utils";

export interface LiveStatusPillProps {
  statusText?: string | AvailabilityStatus;
  onClick?: () => void;
  compact?: boolean;
  className?: string;
}

export const LiveStatusPill: React.FC<LiveStatusPillProps> = ({
  statusText = "Available for Work",
  onClick,
  compact = false,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const label = typeof statusText === "object" ? statusText.label : statusText;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      e.preventDefault();
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const content = (
    <Spotlight
      size={70}
      color="rgba(34, 197, 94, 0.12)"
      opacity={0.6}
      className="rounded-full"
    >
      <a
        href="#contact"
        onClick={handleClick}
        aria-label={`Status: ${label}. Click to jump to contact.`}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-full transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
          compact
            ? "p-2 rounded-full bg-emerald-500/[0.10] border border-emerald-400/25 hover:border-emerald-400/45 hover:bg-emerald-500/[0.18] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
            : "px-3 py-1.5 rounded-full bg-emerald-500/[0.07] hover:bg-emerald-500/[0.13] border border-emerald-400/20 hover:border-emerald-400/40 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]",
          className
        )}
      >
        {/* Ambient Pulse Beacon Indicator */}
        <span className="relative flex h-2 w-2 z-10" aria-hidden="true">
          {!prefersReducedMotion && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 duration-1000" />
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
        </span>

        {!compact && (
          <span className="relative z-10 text-[11.5px] font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors duration-200">
            {label}
          </span>
        )}
      </a>
    </Spotlight>
  );

  return (
    <Magnetic strength={0.15} maxOffset={2} proximityRadius={15}>
      {content}
    </Magnetic>
  );
};
