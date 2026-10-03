"use client";

import React from "react";
import { Container } from "@/components/primitives/Container";
import { HeroContent } from "./HeroContent";
import { HeroAtmosphere } from "./HeroAtmosphere";
import { cn } from "@/lib/utils";

export interface HeroProps {
  onViewWork?: () => void;
  onContactClick?: () => void;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onContactClick,
  className,
}) => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Identity"
      className={cn(
        "relative min-h-[calc(100vh-5rem)] flex items-center justify-start pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden",
        className
      )}
    >
      {/* Hardware-Accelerated Background Atmosphere */}
      <HeroAtmosphere />

      <Container className="relative z-10 w-full">
        {/* Editorial Composition: Left content ~70%, intentional negative space ~30% on desktop */}
        <div className="w-full lg:max-w-[75%] xl:max-w-[70%]">
          <HeroContent
            onViewWork={onViewWork}
            onContactClick={onContactClick}
          />
        </div>
      </Container>
    </section>
  );
};

