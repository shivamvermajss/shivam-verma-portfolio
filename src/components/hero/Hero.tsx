"use client";

import React, { useRef, useCallback } from "react";
import { Container } from "@/components/primitives/Container";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import { HeroAtmosphere } from "./HeroAtmosphere";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";

export interface HeroProps {
  onViewWork?: () => void;
  onResumeClick?: () => void;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onResumeClick,
  className,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasPointer = useHasPointer();
  const prefersReducedMotion = useReducedMotion();

  const isSpotlightEnabled = hasPointer && !prefersReducedMotion;

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (!sectionRef.current || !isSpotlightEnabled) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = `${(e.clientX - rect.left).toFixed(1)}px`;
    const y = `${(e.clientY - rect.top).toFixed(1)}px`;

    sectionRef.current.style.setProperty("--hero-spotlight-x", x);
    sectionRef.current.style.setProperty("--hero-spotlight-y", y);
    sectionRef.current.style.setProperty("--hero-spotlight-opacity", "1");
  }, [isSpotlightEnabled]);

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (!sectionRef.current || !isSpotlightEnabled) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = `${(e.clientX - rect.left).toFixed(1)}px`;
    const y = `${(e.clientY - rect.top).toFixed(1)}px`;

    sectionRef.current.style.setProperty("--hero-spotlight-x", x);
    sectionRef.current.style.setProperty("--hero-spotlight-y", y);
    sectionRef.current.style.setProperty("--hero-spotlight-opacity", "1");
  }, [isSpotlightEnabled]);

  const handlePointerLeave = useCallback(() => {
    if (!sectionRef.current) return;
    sectionRef.current.style.setProperty("--hero-spotlight-opacity", "0");
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction & Identity"
      onPointerMove={isSpotlightEnabled ? handlePointerMove : undefined}
      onPointerEnter={isSpotlightEnabled ? handlePointerEnter : undefined}
      onPointerLeave={isSpotlightEnabled ? handlePointerLeave : undefined}
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      {/* Restrained Layered Background Atmosphere */}
      <HeroAtmosphere />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Primary Identity & Headline (7 Columns Desktop) */}
          <div className="lg:col-span-7 min-w-0 flex flex-col justify-center">
            <HeroContent
              onViewWork={onViewWork}
              onResumeClick={onResumeClick}
            />
          </div>

          {/* Right Column: Developer Visual & Bento System (5 Columns Desktop) */}
          <div className="lg:col-span-5 min-w-0 flex justify-center lg:justify-end w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
