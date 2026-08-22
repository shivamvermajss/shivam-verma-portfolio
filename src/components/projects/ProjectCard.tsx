"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/primitives/Badge";
import { Pill } from "@/components/primitives/Pill";
import { Spotlight } from "@/components/primitives/Spotlight";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectActions } from "./ProjectActions";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className,
}) => {
  const isLarge = project.bentoSpan?.colSpan === 2;

  const colSpanClasses = isLarge
    ? "col-span-1 md:col-span-2 lg:col-span-2"
    : "col-span-1";

  const priorityLabel = project.priority
    ? `0${project.priority} // ${project.category.toUpperCase()}`
    : project.category.toUpperCase();

  return (
    <Spotlight
      color="rgba(139, 92, 246, 0.14)"
      size={300}
      className={cn("w-full h-full rounded-[24px]", colSpanClasses, className)}
    >
      <article
        aria-label={`Project: ${project.title}`}
        className={cn(
          "relative h-full rounded-[24px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden",
          "glass-02 bg-[#0C0C12]/80 border border-white/[0.08] shadow-card",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/[0.18] hover:shadow-accent"
        )}
      >
        <div className="space-y-3.5">
          {/* Top Category & Priority Indicator */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/[0.05]">
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
            <span className="font-mono text-[10px] text-[#71717A] tracking-wider uppercase">
              {priorityLabel}
            </span>
          </div>

          {/* Project Visual Mockup */}
          <div className="w-full">
            <ProjectVisual
              projectId={project.id}
              title={project.title}
              category={project.category}
              liveUrl={project.liveUrl || project.demoUrl}
              isFeatured={false}
            />
          </div>

          {/* Title & Tagline & Description */}
          <div className="space-y-1.5 pt-0.5">
            <h4 className="text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
              {project.title}
            </h4>
            <p className="text-xs font-mono font-medium text-indigo-300/90 tracking-wide">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-[14.5px] leading-relaxed text-[#A1A1AA] line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Engineering Highlights (Max 3) */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 pt-0.5">
              <div className="text-metadata text-[10px] text-[#71717A] tracking-wider">
                ENGINEERING HIGHLIGHTS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.highlights.slice(0, 3).map((highlight, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-[#D4D4D8]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Area: Technologies + Action Buttons */}
        <div className="space-y-3 pt-4 mt-4 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1">
            {(project.technologies || project.tags).slice(0, 5).map((tech) => (
              <Pill key={tech} className="text-[11px] px-2.5 py-0.5">
                {tech}
              </Pill>
            ))}
          </div>

          <ProjectActions
            liveUrl={project.liveUrl || project.demoUrl}
            githubUrl={project.githubUrl}
            projectTitle={project.title}
            size="sm"
          />
        </div>
      </article>
    </Spotlight>
  );
};
