"use client";

import React, { useState } from "react";
import { ExperienceItem } from "@/data/experience";
import { Spotlight } from "@/components/primitives/Spotlight";
import { Badge } from "@/components/primitives/Badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Zap,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  item: ExperienceItem;
  className?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ item, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Spotlight
      color="rgba(99, 102, 241, 0.2)"
      size={440}
      className={cn("w-full rounded-[24px]", className)}
    >
      <article
        aria-label={`${item.role} at ${item.company}`}
        className={cn(
          "relative w-full rounded-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden",
          "glass-02 bg-[#0C0C12]/95 border border-white/[0.12] shadow-card",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-accent"
        )}
      >
        <div className="space-y-6">
          {/* Top Header Row */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
            <div className="flex items-start gap-3.5 sm:gap-4">
              {/* Organization Micro Identity Icon / Monogram */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-violet-600/20 border border-indigo-500/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                <span className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
                  {item.companyMonogram}
                </span>
              </div>

              {/* Company & Role */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F7]">
                    {item.company}
                  </h3>
                  <Badge variant="accent" size="sm" dot>
                    {item.type}
                  </Badge>
                </div>
                <div className="text-sm sm:text-base font-semibold text-indigo-300">
                  {item.role}
                </div>
              </div>
            </div>

            {/* Date & Location Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                {item.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {item.location}
              </span>
            </div>
          </div>

          {/* Core Summary */}
          <div className="space-y-1.5">
            <div className="text-metadata text-[10.5px] text-[#A1A1AA] font-mono tracking-wider uppercase font-semibold">
              FULL STACK DEVELOPMENT
            </div>
            <p className="text-body text-sm sm:text-base leading-relaxed text-[#D4D4D8]">
              {item.summary}
            </p>
          </div>

          {/* Resume-Backed Documented Impact Metrics Grid */}
          <div className="space-y-2">
            <div className="text-metadata text-[10.5px] text-[#A1A1AA] font-mono tracking-wider uppercase font-semibold">
              DOCUMENTED IMPACT & PERFORMANCE OUTCOMES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {item.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/30 transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                      {metric.value}
                    </span>
                    {idx === 0 && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                    {idx === 1 && <ShieldCheck className="w-4 h-4 text-indigo-400" />}
                    {idx === 2 && <Zap className="w-4 h-4 text-violet-400" />}
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[#F5F5F7] mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] mt-0.5 leading-snug">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Documented Responsibilities Micro-Accordion */}
          <div className="pt-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="flex items-center gap-2 text-xs font-mono font-medium text-indigo-300 hover:text-indigo-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded py-1 cursor-pointer"
            >
              <span>{isExpanded ? "Hide detailed responsibilities" : "View documented responsibilities"}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  isExpanded && "rotate-180"
                )}
              />
            </button>

            {isExpanded && (
              <div className="mt-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2.5 animate-fade-in">
                {item.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#D4D4D8] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Applied Technologies Row */}
        <div className="pt-5 mt-6 border-t border-white/[0.08] space-y-2">
          <div className="text-metadata text-[10.5px] text-[#A1A1AA] font-mono tracking-wider uppercase font-semibold">
            TECHNOLOGIES APPLIED
          </div>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#F5F5F7] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Spotlight>
  );
};
