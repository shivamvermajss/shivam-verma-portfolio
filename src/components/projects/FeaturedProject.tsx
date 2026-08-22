"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/primitives/Badge";
import { Pill } from "@/components/primitives/Pill";
import { Spotlight } from "@/components/primitives/Spotlight";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectActions } from "./ProjectActions";
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  Database,
  Lock,
  CreditCard,
  Layers,
  ArrowRight,
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
  return (
    <Spotlight
      color="rgba(99, 102, 241, 0.2)"
      size={450}
      className={cn("w-full rounded-[28px] overflow-hidden", className)}
    >
      <article
        aria-label={`Featured Project: ${project.title}`}
        className={cn(
          "relative rounded-[28px] p-6 sm:p-8 lg:p-10",
          "glass-02 bg-[#0C0C12]/92 border border-white/[0.1] shadow-elevated",
          "transition-all duration-300 ease-out hover:border-indigo-500/40 hover:shadow-accent"
        )}
      >
        {/* Top Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <Badge variant="accent" dot>
              FEATURED PROJECT
            </Badge>
            <Badge variant="default">
              {project.category}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#71717A]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>01 // FLAGSHIP FULL-STACK SAAS</span>
          </div>
        </div>

        {/* Two-Column Grid: Content (Left) & Flagship Browser Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Project Details & Technical Architecture */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6">
            {/* Title, Subtitle, and Description */}
            <div className="space-y-2.5">
              <h3 className="text-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase font-mono">
                {project.tagline}
              </p>
              <p className="text-body text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                {project.description}
              </p>
            </div>

            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2 pt-0.5">
                <div className="text-metadata text-[10px] sm:text-[11px] text-[#71717A] tracking-wider">
                  ENGINEERING HIGHLIGHTS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.slice(0, 5).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-[#E4E4E7]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="font-medium tracking-wide">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subtle Architecture Summary Strip */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <div className="text-metadata text-[10px] text-[#71717A] tracking-wider">
                FULL-STACK FLOW
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#D4D4D8]">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">React + Vite</span>
                <ArrowRight className="w-3 h-3 text-[#71717A]" />
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">Node + Express</span>
                <ArrowRight className="w-3 h-3 text-[#71717A]" />
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">REST API</span>
                <ArrowRight className="w-3 h-3 text-[#71717A]" />
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">MongoDB</span>
              </div>
            </div>

            {/* Core Stack + Payment Service Badges */}
            <div className="space-y-2 pt-0.5">
              <div className="text-metadata text-[10px] sm:text-[11px] text-[#71717A] tracking-wider">
                PRIMARY TECHNOLOGIES & SERVICES
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {(project.technologies || []).map((tech) => (
                  <Pill key={tech} active className="text-xs px-2.5 py-0.5 sm:px-3 sm:py-1">
                    {tech}
                  </Pill>
                ))}
                {/* Secondary Service Badges */}
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-mono bg-indigo-950/30 text-indigo-300/90 border border-indigo-500/20">
                  <CreditCard className="w-3 h-3 text-indigo-400/80" />
                  Razorpay
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-mono bg-purple-950/30 text-purple-300/90 border border-purple-500/20">
                  <CreditCard className="w-3 h-3 text-purple-400/80" />
                  Stripe
                </span>
              </div>
            </div>

            {/* Actions: Primary LIVE DEMO & Secondary VIEW GITHUB */}
            <ProjectActions
              liveUrl={project.liveUrl || project.demoUrl}
              githubUrl={project.githubUrl}
              liveDemoLabel="Live Demo"
              gitHubLabel="View GitHub"
              projectTitle={project.title}
              size="md"
              className="pt-1"
            />
          </div>

          {/* Right Column: Dominant Flagship Browser Mockup Visual */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <ProjectVisual
              projectId={project.id}
              title={project.title}
              category={project.category}
              liveUrl={project.liveUrl || project.demoUrl}
              isFeatured={true}
              className="w-full shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>
      </article>
    </Spotlight>
  );
};
