"use client";

import React from "react";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeader } from "./SectionHeader";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectGrid } from "./ProjectGrid";
import { featuredProject, secondaryProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export interface ProjectsSectionProps {
  className?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
  return (
    <section
      id="projects"
      aria-label="Selected Engineering Work & Projects"
      className={cn(
        "relative w-full py-14 sm:py-18 md:py-22 lg:py-24 scroll-mt-28 md:scroll-mt-32 overflow-hidden",
        className
      )}
    >
      {/* Visual Atmosphere: Subtle Transition Glow from Hero to Projects */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99, 102, 241, 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 space-y-10 sm:space-y-12 lg:space-y-16">
        {/* Section Editorial Header */}
        <Reveal variant="fade-up">
          <SectionHeader />
        </Reveal>

        {/* Primary Featured Project (Imagify - Case Study Preview) */}
        {featuredProject && (
          <Reveal variant="fade-up" delay={0.1}>
            <FeaturedProject project={featuredProject} />
          </Reveal>
        )}

        {/* Secondary Projects Bento Grid (QuickChat, StaySphere, Threadly, YouTube Watch Party, Smart Meet) */}
        {secondaryProjects.length > 0 && (
          <Reveal variant="fade-up" delay={0.15}>
            <ProjectGrid projects={secondaryProjects} />
          </Reveal>
        )}
      </Container>
    </section>
  );
};
