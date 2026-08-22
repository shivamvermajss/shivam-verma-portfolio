"use client";

import React from "react";
import { Container } from "@/components/primitives/Container";
import { Badge } from "@/components/primitives/Badge";
import { Reveal } from "@/components/primitives/Reveal";
import { SkillBentoGrid } from "./SkillBentoGrid";
import { InfiniteMarquee } from "./InfiniteMarquee";
import { cn } from "@/lib/utils";

export interface SkillsSectionProps {
  className?: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <section
      id="skills"
      aria-label="Technologies & Technical Skills"
      className={cn(
        "relative w-full py-12 sm:py-16 md:py-18 lg:py-20 scroll-mt-28 md:scroll-mt-32 overflow-hidden",
        className
      )}
    >
      {/* Visual Atmosphere: Subtle Transition Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139, 92, 246, 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Editorial Section Header */}
        <Reveal variant="fade-up">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl sm:max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent" dot>
                03 / TECH STACK
              </Badge>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
              TECH STACK{" "}
              <span className="gradient-accent-text font-extrabold">& SKILLS</span>
            </h2>

            <p className="text-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
              Technologies I use to design, build, and ship full-stack web applications.
            </p>
          </div>
        </Reveal>

        {/* Primary Interactive Bento Grid & Constellation */}
        <SkillBentoGrid />

        {/* Infinite Horizontal Technology Stream */}
        <Reveal variant="fade-up" delay={0.15}>
          <InfiniteMarquee />
        </Reveal>
      </Container>
    </section>
  );
};
