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
  Zap,
  Lock,
  CreditCard,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Coins,
  ExternalLink,
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
          "glass-03 bg-[#0A0A12]/92 border border-white/[0.12]",
          "shadow-[0_24px_70px_rgba(0,0,0,0.8),inset_0_1px_1.5px_rgba(255,255,255,0.22)]",
          "transition-all duration-500 ease-out hover:border-indigo-500/40 hover:shadow-[0_24px_80px_rgba(99,102,241,0.22)]"
        )}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-56 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),rgba(168,85,247,0.06),transparent_70%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Header Row */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-5 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <Badge variant="accent" dot className="px-3.5 py-1 text-xs font-semibold tracking-wider">
              ✦ FLAGSHIP SAAS
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-xs text-[#E4E4E7] border-white/[0.14] bg-white/[0.04]">
              {project.category}
            </Badge>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
            <span className="hidden sm:inline-block text-[#71717A]">
              01 // FULL-STACK ARCHITECTURE
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-[11px]">LIVE SAAS</span>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Content (Left) & Flagship Mobile Device Showcase Visual (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Project Details & Technical Architecture */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Title, Subtitle, and Description */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F7]">
                  {project.title}
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/35">
                  v1.0 LIVE
                </span>
              </div>

              <p className="text-xs sm:text-sm font-semibold tracking-wider text-indigo-400 uppercase font-mono">
                {project.tagline}
              </p>

              <p className="text-body text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                {project.description}
              </p>
            </div>

            {/* 4-Core Engineering Pillars (2x2 Frosted Glass Matrix) */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center justify-between text-metadata text-[11px] text-[#71717A] tracking-wider">
                <span>ENGINEERING HIGHLIGHTS</span>
                <span className="text-[10px] font-mono text-indigo-400/80">PRODUCTION-READY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {engineeringPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.16] transition-all duration-200 flex items-start gap-2.5 group"
                  >
                    <div className="p-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#F5F5F7] tracking-tight">
                        {pillar.title}
                      </div>
                      <div className="text-[11px] text-[#A1A1AA] truncate">
                        {pillar.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full-Stack Architecture Pipeline */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-metadata text-[10.5px] text-[#71717A] tracking-wider">
                <span>FULL-STACK ARCHITECTURE FLOW</span>
                <span className="text-[10px] font-mono text-emerald-400">REST API</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-[#D4D4D8]">
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white font-medium">
                  React + Vite
                </span>
                <ArrowRight className="w-3 h-3 text-[#71717A] shrink-0" />
                <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white font-medium">
                  Express API
                </span>
                <ArrowRight className="w-3 h-3 text-[#71717A] shrink-0" />
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-medium">
                  Clipdrop AI
                </span>
                <ArrowRight className="w-3 h-3 text-[#71717A] shrink-0" />
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium">
                  MongoDB Atlas
                </span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-0.5">
              <div className="text-metadata text-[10.5px] text-[#71717A] tracking-wider">
                PRIMARY TECHNOLOGIES & INTEGRATIONS
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {(project.technologies || []).map((tech) => (
                  <Pill key={tech} active className="text-xs px-3 py-1 bg-white/[0.05] border-white/[0.10] text-[#E4E4E7]">
                    {tech}
                  </Pill>
                ))}
              </div>
            </div>

            {/* Action Buttons: VisionOS Glass Buttons */}
            <ProjectActions
              liveUrl={project.liveUrl || project.demoUrl}
              githubUrl={project.githubUrl}
              liveDemoLabel="Live Demo"
              gitHubLabel="View GitHub"
              projectTitle={project.title}
              size="md"
              className="pt-2"
            />
          </div>

          {/* Right Column: Dominant Flagship Mobile Showcase Visual */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <ProjectVisual
              projectId={project.id}
              title={project.title}
              category={project.category}
              liveUrl={project.liveUrl || project.demoUrl}
              isFeatured={true}
              className="w-full shadow-2xl transition-all duration-500 hover:scale-[1.015]"
            />
          </div>
        </div>
      </article>
    </Spotlight>
  );
};
