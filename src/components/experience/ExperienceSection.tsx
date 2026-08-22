"use client";

import React from "react";
import { Container } from "@/components/primitives/Container";
import { Badge } from "@/components/primitives/Badge";
import { Reveal } from "@/components/primitives/Reveal";
import { Divider } from "@/components/primitives/Divider";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { CredentialsGrid } from "./CredentialsGrid";
import { cn } from "@/lib/utils";

export interface ExperienceSectionProps {
  className?: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className }) => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience & Verified Milestones"
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
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 102, 241, 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Editorial Section Header */}
        <Reveal variant="fade-up">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl sm:max-w-3xl">
            <div className="flex items-center gap-2">
              <Badge variant="accent" dot>
                04 / EXPERIENCE
              </Badge>
            </div>

            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7]">
              EXPERIENCE{" "}
              <span className="gradient-accent-text font-extrabold">& CREDENTIALS</span>
            </h2>

            <p className="text-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
              Professional experience, internships and verified milestones.
            </p>
          </div>
        </Reveal>

        {/* Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* Subtle Section Divider */}
        <Divider gradient className="opacity-60" />

        {/* Verified Credentials Subsection */}
        <CredentialsGrid />
      </Container>
    </section>
  );
};

