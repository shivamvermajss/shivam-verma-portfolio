"use client";

import React from "react";
import { BentoTiltWrapper } from "./BentoTiltWrapper";
import { Badge } from "@/components/primitives/Badge";
import { portfolioData } from "@/data/portfolioData";
import { MapPin, Code2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IdentityCardProps {
  className?: string;
  isActive?: boolean;
  isConnected?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
}

export const IdentityCard: React.FC<IdentityCardProps> = ({
  className,
  isActive = false,
  isConnected = false,
  onHoverChange,
}) => {
  const { personal } = portfolioData;
  const availabilityLabel =
    typeof personal.availability === "string"
      ? personal.availability
      : personal.availability.label;

  return (
    <BentoTiltWrapper
      cardId="identity"
      isActive={isActive}
      isConnected={isConnected}
      onHoverChange={onHoverChange}
      spotlightColor="rgba(99, 102, 241, 0.22)"
      spotlightSize={380}
      className={cn("w-full h-full", className)}
    >
      <article
        aria-label={`Developer Identity: ${personal.name}`}
        className="relative h-full rounded-[24px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden"
      >
        {/* Subtle decorative atmosphere */}
        <div
          className={cn(
            "pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-indigo-500/15 blur-3xl transition-opacity duration-300",
            isActive ? "opacity-100" : isConnected ? "opacity-75" : "opacity-40"
          )}
          aria-hidden="true"
        />

        <div className="space-y-5">
          {/* Header Row: Identity Monogram & Status Pill */}
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              {/* SV Monogram Badge with subtle scale on hover */}
              <div
                className={cn(
                  "relative flex items-center justify-center w-12 h-12 rounded-2xl gradient-primary text-white font-bold text-base shadow-accent font-mono shrink-0 transition-transform duration-200",
                  isActive && "scale-105"
                )}
              >
                <span>SV</span>
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl border pointer-events-none transition-colors duration-200",
                    isActive ? "border-white/40 shadow-[0_0_12px_rgba(255,255,255,0.3)]" : "border-white/25"
                  )}
                  aria-hidden="true"
                />
              </div>

              <div>
                <span className="text-[10.5px] font-mono text-[#71717A] uppercase tracking-wider block">
                  DEVELOPER IDENTITY
                </span>
                <span
                  className={cn(
                    "text-xs font-mono font-semibold transition-colors duration-200",
                    isActive ? "text-indigo-200" : isConnected ? "text-indigo-300" : "text-indigo-300/90"
                  )}
                >
                  VERIFIED PROFILE
                </span>
              </div>
            </div>

            <Badge
              variant="success"
              dot
              size="sm"
              className={cn(
                "shrink-0 font-mono text-[10.5px] transition-all duration-200",
                isActive && "border-emerald-500/40 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
              )}
            >
              {availabilityLabel.toUpperCase()}
            </Badge>
          </div>

          {/* Core Name & Title */}
          <div className="space-y-1.5">
            <h3
              className={cn(
                "text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200",
                isActive ? "text-white" : "text-[#F5F5F7]"
              )}
            >
              {personal.name}
            </h3>
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-indigo-300">
              <Code2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{personal.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pt-1">
              {personal.tagline}
            </p>
          </div>
        </div>

        {/* Footer: Location & Stack Focus */}
        <div className="pt-4 mt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#71717A]">
          <span className="flex items-center gap-1.5 text-[#A1A1AA]">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{personal.location}</span>
          </span>

          <span
            className={cn(
              "flex items-center gap-1 transition-colors duration-200",
              isActive || isConnected ? "text-indigo-300" : "text-indigo-300/80"
            )}
          >
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>Full-Stack Engineer</span>
          </span>
        </div>
      </article>
    </BentoTiltWrapper>
  );
};
