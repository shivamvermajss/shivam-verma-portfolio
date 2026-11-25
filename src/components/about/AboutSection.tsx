"use client";

import React, { useState } from "react";
import { Container } from "@/components/primitives/Container";
import { AboutStory } from "./AboutStory";
import { AboutBento, BentoCardId } from "./AboutBento";
import { ResumeModal } from "./ResumeModal";
import { cn } from "@/lib/utils";

export interface AboutSectionProps {
  className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  const [highlightedBentoNode, setHighlightedBentoNode] = useState<BentoCardId | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [resumeTrigger, setResumeTrigger] = useState<HTMLElement | null>(null);

  const handleOpenResume = (triggerEl?: HTMLElement) => {
    setResumeTrigger(triggerEl ?? null);
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <>
      <section
        id="about"
        aria-label="About Shivam Verma - Full Stack Developer"
        className={cn(
          "relative w-full py-16 sm:py-20 md:py-24 lg:py-28 scroll-mt-28 md:scroll-mt-32 overflow-hidden",
          className
        )}
      >
        {/* Section atmosphere: soft indigo glow connecting from Experience above */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-72 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99, 102, 241, 0.07), transparent 75%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* 12-column split: Story (5) / Identity Bento (7) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
            {/* Left: Narrative Story Column — sticky on desktop */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <AboutStory
                onStoryFocusChange={setHighlightedBentoNode}
                onOpenResume={handleOpenResume}
              />
            </div>

            {/* Right: Interactive Developer Identity Bento */}
            <div className="lg:col-span-7">
              <AboutBento externalActiveId={highlightedBentoNode} />
            </div>
          </div>
        </Container>
      </section>

      {/* Resume Quick View Modal — outside scroll container for correct stacking */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        triggerEl={resumeTrigger}
      />
    </>
  );
};
