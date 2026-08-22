"use client";

import React, { useRef } from "react";
import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { StoryAccordion } from "./StoryAccordion";
import { ExplorationGrid } from "./ExplorationGrid";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AboutStoryProps {
  className?: string;
  onStoryFocusChange?: (nodeId: "identity" | "education" | "technical-focus" | "engineering-approach" | null) => void;
  onOpenResume?: (triggerEl?: HTMLElement) => void;
}

export const AboutStory: React.FC<AboutStoryProps> = ({
  className,
  onStoryFocusChange,
  onOpenResume,
}) => {
  const about = portfolioData.about || {
    eyebrow: "05 / ABOUT ME",
    heading: {
      line1: "THE PERSON",
      line2: "BEHIND THE CODE.",
    },
    introParagraphs: [
      "I'm a final-year Computer Science student and full-stack developer focused on engineering practical, high-performance web applications from responsive interfaces to scalable backend architectures.",
    ],
    storyChapters: [
      {
        id: "building",
        number: "01",
        title: "BUILDING",
        preview: "Turning frontend interfaces, backend APIs, and data models into complete systems.",
        content:
          "I engineer practical end-to-end web applications with the MERN stack, bridging responsive user interfaces with robust RESTful APIs, secure JWT authentication, and database schemas. My project work is where individual technologies come together into dependable, deployed systems.",
        metadata: ["FULL-STACK", "MERN", "WEB APPLICATIONS"],
        connectedBentoNode: "technical-focus" as const,
      },
      {
        id: "how-i-work",
        number: "02",
        title: "HOW I WORK",
        preview: "Iterative engineering driven by architecture design, testing, and continuous learning.",
        content:
          "I prioritize learning by building. From wireframing component hierarchies to architecting schema models and API routes, I iterate through debugging, optimization, and real-world implementation to ensure clean code and scalable structure.",
        metadata: ["APIS", "AUTHENTICATION", "DATA FLOW", "PERFORMANCE"],
        connectedBentoNode: "engineering-approach" as const,
      },
      {
        id: "whats-next",
        number: "03",
        title: "WHAT'S NEXT",
        preview: "Expanding technical depth across modern full-stack architectures and high-impact systems.",
        content:
          "As a final-year Computer Science student, I'm focused on deepening full-stack engineering practices, mastering distributed systems patterns, and contributing to production-grade applications that solve meaningful real-world problems.",
        metadata: ["FULL-STACK DEV", "CONTINUOUS LEARNING", "PRODUCTION QUALITY"],
        connectedBentoNode: "identity" as const,
      },
    ],
    explorationHeading: {
      title: "WHAT I EXPLORE",
      subtitle: "Areas that shape the way I build, design systems, and learn.",
    },
    explorationCards: [
      {
        id: "explore-build",
        number: "01",
        title: "BUILD",
        description:
          "Turning responsive interfaces, RESTful APIs, data schemas, and deployment pipelines into complete, dependable web applications.",
        tags: ["FULL-STACK", "MERN", "DEPLOYMENT"],
        iconName: "Layers",
      },
      {
        id: "explore-systems",
        number: "02",
        title: "SYSTEMS",
        description:
          "Connecting frontend state with robust backend APIs, JWT authentication, real-time WebSockets, and database persistence.",
        tags: ["APIS", "AUTH", "DATA FLOW"],
        iconName: "GitBranch",
      },
      {
        id: "explore-learn",
        number: "03",
        title: "LEARN",
        description:
          "Expanding technical depth through verified certifications in AI foundations, SWE job simulations, and cybersecurity courses.",
        tags: ["AI FOUNDATIONS", "SWE SIMULATION", "SECURITY"],
        iconName: "Compass",
      },
      {
        id: "explore-iterate",
        number: "04",
        title: "ITERATE",
        description:
          "Refining application workflows through debugging, schema optimization, performance tuning, and responsive UI polish.",
        tags: ["DEBUGGING", "PERFORMANCE", "RESPONSIVE UI"],
        iconName: "RefreshCw",
      },
    ],
    attributes: [
      { label: "DEGREE", value: "B.Tech in Computer Science" },
      { label: "FOCUS", value: "Full Stack Development (MERN)" },
      { label: "INSTITUTION", value: "JSS Academy of Tech. Education" },
      { label: "LOCATION", value: "Noida, Uttar Pradesh" },
    ],
  };

  const resumeTriggerRef = useRef<HTMLButtonElement>(null);

  const handleContactClick = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleActiveStoryChange = (activeStoryId: string | null) => {
    if (!activeStoryId || !onStoryFocusChange) {
      onStoryFocusChange?.(null);
      return;
    }
    const chapter = about.storyChapters?.find((c) => c.id === activeStoryId);
    onStoryFocusChange(chapter?.connectedBentoNode || null);
  };

  return (
    <div className={cn("space-y-5 sm:space-y-6", className)}>
      {/* Section Eyebrow & Main Heading */}
      <Reveal variant="fade-up">
        <div className="space-y-3.5">
          <div className="flex items-center gap-2">
            <Badge variant="accent" dot>
              {about.eyebrow}
            </Badge>
          </div>

          <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F7] leading-tight">
            {about.heading.line1}{" "}
            <span className="gradient-accent-text font-extrabold">
              {about.heading.line2}
            </span>
          </h2>
        </div>
      </Reveal>

      {/* Concise Intro Narrative */}
      <Reveal variant="fade-up" delay={0.04}>
        <div className="text-body text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
          {about.introParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </Reveal>

      {/* Developer Journey Micro-Accordion */}
      {about.storyChapters && about.storyChapters.length > 0 && (
        <Reveal variant="fade-up" delay={0.08}>
          <StoryAccordion
            chapters={about.storyChapters}
            defaultOpenId="building"
            onActiveChange={handleActiveStoryChange}
          />
        </Reveal>
      )}

      {/* Engineering Traits & Exploration Cards Grid */}
      {about.explorationCards && about.explorationCards.length > 0 && (
        <Reveal variant="fade-up" delay={0.12}>
          <ExplorationGrid
            cards={about.explorationCards}
            heading={about.explorationHeading}
          />
        </Reveal>
      )}

      {/* Identity Attributes — concise, visually secondary to heading */}
      <Reveal variant="fade-up" delay={0.15}>
        <div className="rounded-2xl bg-white/[0.015] border border-white/[0.07] overflow-hidden">
          {/* Compact label row */}
          <div className="px-4 py-2.5 border-b border-white/[0.05]">
            <span className="text-[10px] font-mono text-indigo-300/80 font-semibold uppercase tracking-widest">
              IDENTITY PARAMETERS
            </span>
          </div>
          {/* Grid of attributes */}
          <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.05]">
            {about.attributes.map((attr, idx) => (
              <div key={idx} className="px-4 py-3 space-y-0.5">
                <span className="text-[9.5px] font-mono text-[#71717A] uppercase tracking-wider block">
                  {attr.label}
                </span>
                <span className="text-[11.5px] font-medium text-[#E4E4E7] leading-snug">
                  {attr.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA group: Connect & Collaborate (primary) + View Resume (secondary) */}
      <Reveal variant="fade-up" delay={0.18}>
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Primary CTA */}
          <Button
            variant="secondary"
            size="md"
            isMagnetic
            onClick={handleContactClick}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            aria-label="Scroll to contact section"
          >
            Connect & Collaborate
          </Button>

          {/* Resume entry point — visually paired with primary CTA */}
          {onOpenResume && (
            <button
              ref={resumeTriggerRef}
              type="button"
              id="resume-open-trigger"
              onClick={() => onOpenResume(resumeTriggerRef.current ?? undefined)}
              aria-label="Open resume quick view"
              className={cn(
                // Match Button size="md" height: h-10 = 40px
                "inline-flex items-center gap-2 h-10 px-4 rounded-xl",
                "text-[13px] font-mono font-semibold tracking-wide",
                "bg-white/[0.03] border border-white/[0.1] text-[#A1A1AA]",
                "hover:bg-indigo-500/[0.08] hover:border-indigo-500/35 hover:text-indigo-200",
                "active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                "transition-all duration-150 cursor-pointer"
              )}
            >
              <FileText className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              VIEW RESUME
            </button>
          )}
        </div>
      </Reveal>
    </div>
  );
};
