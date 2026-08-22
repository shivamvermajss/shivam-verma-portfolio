"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { Badge } from "@/components/primitives/Badge";
import { Spotlight } from "@/components/primitives/Spotlight";
import { SkillChip } from "./SkillChip";
import { ArrowRight, Layers, Terminal, Database, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FullStackAnchorCardProps {
  className?: string;
}

export const FullStackAnchorCard: React.FC<FullStackAnchorCardProps> = ({ className }) => {
  const fullstackCategory = skillsData.fullstack;

  return (
    <Spotlight
      color="rgba(99, 102, 241, 0.2)"
      size={420}
      className={cn("w-full h-full rounded-[26px]", className)}
    >
      <article
        aria-label="Core Full-Stack Development Competency"
        className={cn(
          "relative h-full rounded-[26px] p-6 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden",
          "glass-02 bg-[#0C0C12]/95 border border-white/[0.12] shadow-card",
          "transition-all duration-300 ease-out hover:-translate-y-[2px] hover:border-indigo-500/50 hover:shadow-accent"
        )}
      >
        <div className="space-y-4 sm:space-y-5">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <Badge variant="accent" dot size="md">
                {fullstackCategory.eyebrow}
              </Badge>
              <span className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider font-medium">
                MERN Ecosystem
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Verified in Production
            </span>
          </div>

          {/* Headline & Description */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Building end-to-end web applications
            </h3>
            <p className="text-body text-sm sm:text-[15px] leading-relaxed text-[#A1A1AA] max-w-2xl">
              {fullstackCategory.description}
            </p>
          </div>

          {/* Subtle Architecture Relationship Flow Strip */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-2.5">
            <div className="text-metadata text-[10.5px] text-[#A1A1AA] font-mono tracking-wider uppercase font-semibold">
              CORE ARCHITECTURE PIPELINE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Step 1: Frontend */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.035] border border-white/[0.07]">
                <Layers className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13px] font-semibold text-[#F5F5F7]">Client Tier</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA] truncate">React.js · Tailwind CSS</div>
                </div>
              </div>

              {/* Step 2: REST APIs */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.035] border border-white/[0.07]">
                <Terminal className="w-4.5 h-4.5 text-violet-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13px] font-semibold text-[#F5F5F7]">Service Tier</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA] truncate">Node.js · Express · JWT</div>
                </div>
              </div>

              {/* Step 3: Database */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.035] border border-white/[0.07]">
                <Database className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13px] font-semibold text-[#F5F5F7]">Data Tier</div>
                  <div className="text-[11px] font-mono text-[#A1A1AA] truncate">MongoDB · Mongoose ODM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Chips Row */}
        <div className="pt-4 sm:pt-5 mt-4 border-t border-white/[0.08] space-y-2.5">
          <div className="text-metadata text-[10.5px] text-[#A1A1AA] font-mono tracking-wider uppercase font-semibold">
            PRIMARY FULL-STACK TOOLKIT
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {fullstackCategory.skills.map((skill) => (
              <SkillChip key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </article>
    </Spotlight>
  );
};
