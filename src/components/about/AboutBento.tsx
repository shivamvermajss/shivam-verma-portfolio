"use client";

import React, { useState } from "react";
import { IdentityCard } from "./IdentityCard";
import { EducationIdentityCard } from "./EducationIdentityCard";
import { TechnicalFocusCard } from "./TechnicalFocusCard";
import { BentoTiltWrapper } from "./BentoTiltWrapper";
import { Reveal } from "@/components/primitives/Reveal";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export type BentoCardId =
  | "identity"
  | "education"
  | "technical-focus"
  | "engineering-approach";

export const BENTO_CONNECTIONS: Record<BentoCardId, BentoCardId[]> = {
  identity: ["education", "technical-focus"],
  education: ["identity"],
  "technical-focus": ["identity", "engineering-approach"],
  "engineering-approach": ["technical-focus"],
};

export interface AboutBentoProps {
  className?: string;
  externalActiveId?: BentoCardId | null;
}

export const AboutBento: React.FC<AboutBentoProps> = ({
  className,
  externalActiveId = null,
}) => {
  const [activeCardId, setActiveCardId] = useState<BentoCardId | null>(null);

  // Use internal activeCardId if present, otherwise externalActiveId from story accordion
  const currentActiveId = activeCardId || externalActiveId;

  // Compute connected nodes based on currentActiveId
  const isNodeActive = (id: BentoCardId) => currentActiveId === id;
  const isNodeConnected = (id: BentoCardId) =>
    currentActiveId !== null && BENTO_CONNECTIONS[currentActiveId]?.includes(id);

  const handleHoverChange = (id: BentoCardId, isHovered: boolean) => {
    if (isHovered) {
      setActiveCardId(id);
    } else {
      setActiveCardId((current) => (current === id ? null : current));
    }
  };

  return (
    <div className={cn("space-y-3.5", className)}>
      {/* Primary Dominant Identity Card */}
      <Reveal variant="fade-up" delay={0.08}>
        <IdentityCard
          isActive={isNodeActive("identity")}
          isConnected={isNodeConnected("identity")}
          onHoverChange={(isHovered) => handleHoverChange("identity", isHovered)}
        />
      </Reveal>

      {/* Two-Column Mid Row: Education & Technical Focus */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
        <Reveal variant="fade-up" delay={0.12} className="h-full">
          <EducationIdentityCard
            isActive={isNodeActive("education")}
            isConnected={isNodeConnected("education")}
            onHoverChange={(isHovered) => handleHoverChange("education", isHovered)}
          />
        </Reveal>

        <Reveal variant="fade-up" delay={0.16} className="h-full">
          <TechnicalFocusCard
            isActive={isNodeActive("technical-focus")}
            isConnected={isNodeConnected("technical-focus")}
            onHoverChange={(isHovered) => handleHoverChange("technical-focus", isHovered)}
          />
        </Reveal>
      </div>

      {/* Bottom Subtle Engineering Philosophy Pill / Strip */}
      <Reveal variant="fade-up" delay={0.2}>
        <BentoTiltWrapper
          cardId="engineering-approach"
          isActive={isNodeActive("engineering-approach")}
          isConnected={isNodeConnected("engineering-approach")}
          onHoverChange={(isHovered) => handleHoverChange("engineering-approach", isHovered)}
          maxTiltDeg={1.5}
          spotlightColor="rgba(99, 102, 241, 0.1)"
          spotlightSize={240}
          className="rounded-2xl"
        >
          <div className="p-3.5 sm:p-4 rounded-2xl flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <ShieldCheck
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  isNodeActive("engineering-approach") || isNodeConnected("engineering-approach")
                    ? "text-emerald-400"
                    : "text-emerald-400/80"
                )}
              />
              <span
                className={cn(
                  "font-medium transition-colors duration-200",
                  isNodeActive("engineering-approach") ? "text-white" : "text-[#F5F5F7]"
                )}
              >
                Verified Engineering Milestone Foundation
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-[#71717A]">
              <span className="hover:text-indigo-300 transition-colors">Clean Architecture</span>
              <span>·</span>
              <span className="hover:text-indigo-300 transition-colors">Scalable APIs</span>
              <span>·</span>
              <span className="hover:text-indigo-300 transition-colors">High Performance</span>
            </div>
          </div>
        </BentoTiltWrapper>
      </Reveal>
    </div>
  );
};
