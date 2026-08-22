"use client";

import React from "react";
import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";
import { IconButton } from "@/components/primitives/IconButton";
import { Reveal } from "@/components/primitives/Reveal";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";

export interface HeroContentProps {
  onViewWork?: () => void;
  onResumeClick?: () => void;
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
  onResumeClick,
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

  const handleResume = () => {
    if (onResumeClick) {
      onResumeClick();
    } else if (personal.resumeUrl) {
      window.open(personal.resumeUrl, "_blank", "noopener,noreferrer");
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
    <div className="flex flex-col items-start text-left space-y-5 sm:space-y-6 max-w-2xl">
      {/* 1. Technical Eyebrow */}
      <Reveal variant="fade-up" delay={0.05}>
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge variant="accent" dot size="md">
            {personal.title}
          </Badge>
          <span className="text-metadata text-[#71717A] tracking-widest hidden sm:inline-block font-mono text-[11px]">
            MERN · WEB APPLICATIONS · PRODUCTS
          </span>
        </div>
      </Reveal>

      {/* 2. Main Editorial Display Headline (Strictly Contained within Left Column) */}
      <header>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[44px] xl:text-[54px] 2xl:text-[62px] font-extrabold tracking-tight leading-[0.98] text-[#F5F5F7]">
          <Reveal variant="fade-up" delay={0.08}>
            <span className="block">BUILDING</span>
          </Reveal>
          <Reveal variant="fade-up" delay={0.14}>
            <span className="block gradient-accent-text">MODERN WEB</span>
          </Reveal>
          <Reveal variant="fade-up" delay={0.20}>
            <span className="block">EXPERIENCES.</span>
          </Reveal>
        </h1>
      </header>

      {/* 3. Concise Supporting Copy */}
      <Reveal variant="fade-up" delay={0.26}>
        <p className="text-body max-w-lg text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
          {personal.bio}
        </p>
      </Reveal>

      {/* 4. Action CTA Group */}
      <Reveal variant="fade-up" delay={0.32}>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
          <Button
            variant="primary"
            size="lg"
            isMagnetic
            magneticStrength={0.35}
            magneticMaxOffset={8}
            rightIcon={<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />}
            onClick={handleScrollToProjects}
            className="group/btn shadow-accent"
          >
            View My Work
          </Button>

          <Button
            variant="secondary"
            size="lg"
            isMagnetic
            magneticStrength={0.20}
            magneticMaxOffset={4}
            leftIcon={<FileText className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />}
            onClick={handleResume}
            aria-label="Download Resume"
            className="group/btn"
          >
            Resume
          </Button>
        </div>
      </Reveal>

      {/* 5. Social Identity Badges Row */}
      <Reveal variant="fade-up" delay={0.38}>
        <div className="flex items-center gap-3 pt-1">
          <span className="text-metadata text-[#71717A] mr-1">CONNECT:</span>
          {githubSocial && (
            <div className="transition-transform duration-200 hover:-translate-y-0.5">
              <IconButton
                icon={<GithubIcon className="w-4 h-4" />}
                label="Shivam Verma GitHub Profile"
                onClick={() => window.open(githubSocial.url, "_blank", "noopener,noreferrer")}
                variant="glass"
                size="sm"
                isMagnetic
              />
            </div>
          )}
          {linkedinSocial && (
            <div className="transition-transform duration-200 hover:-translate-y-0.5">
              <IconButton
                icon={<LinkedinIcon className="w-4 h-4" />}
                label="Shivam Verma LinkedIn Profile"
                onClick={() => window.open(linkedinSocial.url, "_blank", "noopener,noreferrer")}
                variant="glass"
                size="sm"
                isMagnetic
              />
            </div>
          )}
          {githubSocial && (
            <a
              href={githubSocial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/social text-metadata text-[#71717A] hover:text-[#F5F5F7] transition-colors duration-200 hidden sm:inline-flex items-center gap-1 font-mono lowercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm"
            >
              <span>github.com/shivamvermajss</span>
              <ExternalLink className="w-3 h-3 opacity-60 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-transform duration-200" />
            </a>
          )}
        </div>
      </Reveal>
    </div>
  );
};
