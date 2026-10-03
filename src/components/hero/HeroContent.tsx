"use client";

import React from "react";
import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroContentProps {
  onViewWork?: () => void;
  onContactClick?: () => void;
}

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const HeroContent: React.FC<HeroContentProps> = ({
  onViewWork,
  onContactClick,
}) => {
  const { personal, socials } = portfolioData;

  const handleScrollToProjects = () => {
    if (onViewWork) {
      onViewWork();
    } else {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScrollToContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const githubSocial = socials.find((s) => s.platform.toLowerCase() === "github");
  const linkedinSocial = socials.find((s) => s.platform.toLowerCase() === "linkedin");

  return (
    <div className="flex flex-col items-start text-left space-y-5 sm:space-y-6 w-full max-w-3xl lg:max-w-4xl">
      {/* 1. Technical Eyebrow */}
      <Reveal variant="fade-up" delay={0.05}>
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="accent" dot size="md">
            {personal.title.toUpperCase()}
          </Badge>
          <span className="text-metadata text-[#71717A] tracking-widest hidden sm:inline-block font-mono text-[11px]">
            MERN · WEB APPLICATIONS · PRODUCTS
          </span>
        </div>
      </Reveal>

      {/* 2. Main Editorial Display Headline */}
      <header className="space-y-3 sm:space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[76px] 2xl:text-[84px] font-extrabold tracking-tight leading-[0.96] text-[#F5F5F7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.75)]">
          <Reveal variant="fade-up" delay={0.08}>
            <span className="block">BUILDING</span>
          </Reveal>
          <Reveal variant="fade-up" delay={0.14}>
            <span className="block">MODERN</span>
          </Reveal>
          <Reveal variant="fade-up" delay={0.20}>
            <span className="block gradient-accent-shimmer">WEB EXPERIENCES.</span>
          </Reveal>
        </h1>

        {/* Personal Identity Context Line */}
        <Reveal variant="fade-up" delay={0.24}>
          <div className="flex items-center gap-3 pt-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white font-display drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              <span className="gradient-accent-text font-extrabold">I&apos;m Shivam — Full-Stack Developer</span>
            </h2>
            <span className="h-px w-12 bg-gradient-to-r from-indigo-500/40 to-transparent hidden sm:inline-block" />
          </div>
        </Reveal>
      </header>

      {/* 3. Concise Tagline with Subtly Highlighted Keywords */}
      <Reveal variant="fade-up" delay={0.28}>
        <p className="text-body max-w-xl text-[#D4D4D8] text-base sm:text-lg lg:text-xl font-normal leading-[1.65] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Full-stack engineer building <span className="text-white font-medium">scalable web applications</span> with <span className="text-indigo-300 font-medium">Next.js</span>, <span className="text-indigo-300 font-medium">MERN</span>, and <span className="text-white font-medium">real-time systems</span>.
        </p>
      </Reveal>

      {/* 4. Action CTA Group & Command Social Row */}
      <Reveal variant="fade-up" delay={0.32}>
        <div className="space-y-4 pt-1">
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4.5">
            <Button
              variant="primary"
              size="lg"
              isMagnetic
              enableSpotlight
              spotlightColor="rgba(255, 255, 255, 0.25)"
              magneticStrength={0.25}
              magneticMaxOffset={6}
              rightIcon={<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />}
              onClick={handleScrollToProjects}
              className="group/btn"
            >
              View My Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              isMagnetic
              magneticStrength={0.20}
              magneticMaxOffset={4}
              rightIcon={<ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />}
              onClick={handleScrollToContact}
              aria-label="Contact Me"
              className="group/btn"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links — Apple Frosted Glass Capsule Buttons */}
          <div className="flex items-center gap-2.5 pt-1">
            {githubSocial && (
              <a
                href={githubSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full",
                  "bg-white/[0.07] hover:bg-white/[0.14] text-neutral-300 hover:text-white",
                  "border border-white/[0.14] border-t-white/[0.26]",
                  "backdrop-blur-xl backdrop-saturate-[180%] shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                  "hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-all duration-200"
                )}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {linkedinSocial && (
              <a
                href={linkedinSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full",
                  "bg-white/[0.07] hover:bg-white/[0.14] text-neutral-300 hover:text-white",
                  "border border-white/[0.14] border-t-white/[0.26]",
                  "backdrop-blur-xl backdrop-saturate-[180%] shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                  "hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-all duration-200"
                )}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                aria-label={`Send email to ${personal.email}`}
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full",
                  "bg-white/[0.07] hover:bg-white/[0.14] text-neutral-300 hover:text-white",
                  "border border-white/[0.14] border-t-white/[0.26]",
                  "backdrop-blur-xl backdrop-saturate-[180%] shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                  "hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-all duration-200"
                )}
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
};
