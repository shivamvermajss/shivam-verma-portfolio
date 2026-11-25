"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { Spotlight } from "@/components/primitives/Spotlight";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectActions } from "./ProjectActions";
import {
  Sparkles,
  CreditCard,
  ShieldCheck,
  Coins,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeaturedProjectProps {
  project: Project;
  className?: string;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  className,
}) => {
  const engineeringPillars = [
    {
      icon: <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />,
      title: "Clipdrop AI Engine",
      subtitle: "Prompt-to-image synthesis pipeline",
    },
    {
      icon: <Coins className="w-4 h-4 text-amber-400 shrink-0" />,
      title: "Credit-Based SaaS",
      subtitle: "Atomic user balance & deduction",
    },
    {
      icon: <CreditCard className="w-4 h-4 text-purple-400 shrink-0" />,
      title: "Dual Payment Rails",
      subtitle: "Razorpay & Stripe checkout",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />,
      title: "JWT & Bcrypt Security",
      subtitle: "Encrypted sessions & route guards",
    },
  ];

  // Primary tech stack pills
  const primaryTechStack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Clipdrop AI",
    "Razorpay",
    "Stripe",
    "JWT",
  ];

  return (
    <Spotlight
      color="rgba(99, 102, 241, 0.22)"
      size={500}
      className={cn("w-full rounded-[32px] sm:rounded-[36px] overflow-hidden", className)}
    >
      <article
        aria-label={`Featured Project: ${project.title}`}
        className={cn(
          "relative rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10",
          "glass-03 bg-[#0A0A12]/95 border border-white/[0.12]",
          "shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_1.5px_rgba(255,255,255,0.22)]",
          "transition-all duration-500 ease-out hover:border-indigo-500/40 hover:shadow-[0_24px_80px_rgba(99,102,241,0.22)]"
        )}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),rgba(168,85,247,0.06),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Header Row - Single Category Badge & Clean Status */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase font-sans bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              FEATURED SAAS PROJECT
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-gray-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Platform
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Content (Left) & Device Showcase Visual (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Project Details & Technical Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full gap-6">
            {/* Title, Subtitle, and Description */}
            <div className="space-y-3">
              <h3 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase font-sans">
                {project.tagline}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-sans">
                {project.description}
              </p>
            </div>

            {/* Key Features (2x2 Grid) */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-gray-300 tracking-wider uppercase font-sans">
                KEY FEATURES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {engineeringPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200 flex items-start gap-3.5 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] group-hover:scale-105 transition-transform shrink-0">
                      {pillar.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white tracking-tight font-sans">
                        {pillar.title}
                      </div>
                      <div className="text-sm text-gray-300 font-sans leading-normal mt-0.5">
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Tech Stack Pills */}
            <div className="space-y-2.5">
              <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase font-sans">
                TECH STACK
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {primaryTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium font-sans text-gray-200 bg-white/[0.05] border border-white/[0.10] hover:border-indigo-400/30 hover:bg-white/[0.08] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Live Demo and View GitHub */}
            <ProjectActions
              liveUrl={project.liveUrl || project.demoUrl}
              githubUrl={project.githubUrl}
              liveDemoLabel="Live Demo"
              gitHubLabel="View GitHub"
              projectTitle={project.title}
              size="md"
              className="pt-0"
            />
          </div>

          {/* Right Column: Dominant Showcase Visual */}
          <div className="lg:col-span-5 w-full flex items-stretch">
            <ProjectVisual
              projectId={project.id}
              title={project.title}
              category={project.category}
              liveUrl={project.liveUrl || project.demoUrl}
              isFeatured={true}
              className="w-full h-full shadow-2xl transition-all duration-500"
            />
          </div>
        </div>
      </article>
    </Spotlight>
  );
};
