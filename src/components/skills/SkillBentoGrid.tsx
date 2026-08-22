"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { FullStackAnchorCard } from "./FullStackAnchorCard";
import { SkillCard } from "./SkillCard";
import { TechConstellation } from "./TechConstellation";
import { Reveal } from "@/components/primitives/Reveal";
import { cn } from "@/lib/utils";

export interface SkillBentoGridProps {
  className?: string;
}

export const SkillBentoGrid: React.FC<SkillBentoGridProps> = ({ className }) => {
  return (
    <div className={cn("space-y-5 sm:space-y-6 lg:space-y-7", className)}>
      {/* Primary Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
        {/* 1. Core Full-Stack Anchor Card (Col-span 2 on desktop) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <Reveal variant="fade-up" delay={0.05} className="h-full">
            <FullStackAnchorCard />
          </Reveal>
        </div>

        {/* 2. Languages Card */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.08} className="h-full">
            <SkillCard
              category={skillsData.languages}
              badgeVariant="accent"
              spotlightColor="rgba(99, 102, 241, 0.16)"
            />
          </Reveal>
        </div>

        {/* 3. Frontend Engineering */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.1} className="h-full">
            <SkillCard
              category={skillsData.frontend}
              badgeVariant="default"
              spotlightColor="rgba(139, 92, 246, 0.14)"
            />
          </Reveal>
        </div>

        {/* 4. Backend & Systems */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.12} className="h-full">
            <SkillCard
              category={skillsData.backend}
              badgeVariant="default"
              spotlightColor="rgba(99, 102, 241, 0.14)"
            />
          </Reveal>
        </div>

        {/* 5. Real-Time Systems */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.14} className="h-full">
            <SkillCard
              category={skillsData.realtime}
              badgeVariant="accent"
              spotlightColor="rgba(34, 197, 94, 0.12)"
            />
          </Reveal>
        </div>

        {/* 6. Database & Storage */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.16} className="h-full">
            <SkillCard
              category={skillsData.database}
              badgeVariant="default"
              spotlightColor="rgba(59, 130, 246, 0.14)"
            />
          </Reveal>
        </div>

        {/* 7. Tools & Delivery */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.18} className="h-full">
            <SkillCard
              category={skillsData.tools}
              badgeVariant="default"
              spotlightColor="rgba(161, 161, 170, 0.12)"
            />
          </Reveal>
        </div>

        {/* 8. Core Computer Science */}
        <div className="col-span-1">
          <Reveal variant="fade-up" delay={0.2} className="h-full">
            <SkillCard
              category={skillsData.coreCS}
              badgeVariant="outline"
              spotlightColor="rgba(139, 92, 246, 0.14)"
            />
          </Reveal>
        </div>
      </div>

      {/* Interactive Technology Constellation */}
      <Reveal variant="fade-up" delay={0.22}>
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-metadata text-[11px] text-[#A1A1AA] tracking-wider font-semibold">
                ARCHITECTURE CONSTELLATION
              </span>
            </div>
            <span className="text-[10.5px] font-mono text-[#71717A] hidden sm:inline">
              MERN × REST × SOCKETS
            </span>
          </div>

          <TechConstellation />
        </div>
      </Reveal>
    </div>
  );
};
