"use client";

import React from "react";
import { Project } from "@/types/portfolio";
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

  const categoryBadge = (
    <div className="flex items-center justify-start pb-3 border-b border-white/[0.06]">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase font-sans bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        {project.category}
      </span>
    </div>
  );

  const projectDetails = (
    <div className="space-y-4">
      {/* Title, Subtitle, and Full Description */}
      <div className="space-y-1.5">
        <h4 className="font-sans text-2xl font-bold tracking-tight text-white">
          {project.title}
        </h4>
        <p className="font-sans text-sm font-medium text-indigo-300/90 leading-snug">
          {project.tagline}
        </p>
        <p className="font-sans text-sm text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Engineering Highlights (Max 3) */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="space-y-2">
          <div className="font-sans text-xs font-medium tracking-wider uppercase text-gray-400">
            Engineering Highlights
          </div>
          <div className="flex flex-wrap gap-2">
            {project.highlights.slice(0, 3).map((highlight, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 font-sans text-xs text-gray-200 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                {highlight}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack (Kept well-proportioned directly below Engineering Highlights) */}
      <div className="space-y-2">
        <div className="font-sans text-xs font-medium tracking-wider uppercase text-gray-400">
          Tech Stack
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(project.technologies || project.tags).slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="font-sans text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md hover:border-indigo-400/30 hover:bg-white/[0.08] transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const actionFooter = (
    <div className="mt-auto pt-4 border-t border-white/[0.06]">
      <ProjectActions
        liveUrl={project.liveUrl || project.demoUrl}
        githubUrl={project.githubUrl}
        projectTitle={project.title}
        size="sm"
        className="pt-0"
      />
    </div>
  );

  return (
    <Spotlight
      color="rgba(139, 92, 246, 0.14)"
      size={300}
      className={cn("w-full h-full rounded-[24px]", colSpanClasses, className)}
    >
      <article
        aria-label={`Project: ${project.title}`}
        className={cn(
          "relative h-full rounded-[24px] p-5 sm:p-6 flex flex-col justify-between gap-4 overflow-hidden font-sans",
          "glass-02 bg-[#0C0C12]/85 border border-white/[0.08] shadow-card",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/[0.18] hover:shadow-accent"
        )}
      >
        {isLarge ? (
          <>
            {categoryBadge}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-1">
              {/* Left Column: Centered Content Distribution & Bottom-Aligned CTA */}
              <div className="md:col-span-7 flex flex-col h-full">
                <div className="flex flex-col justify-center gap-6 py-4 my-auto">
                  {projectDetails}
                </div>
                {actionFooter}
              </div>

              {/* Right Column: Vertically Centered Smartphone Mockup */}
              <div className="md:col-span-5 flex flex-col items-center justify-center h-full">
                <ProjectVisual
                  projectId={project.id}
                  title={project.title}
                  category={project.category}
                  liveUrl={project.liveUrl || project.demoUrl}
                  image={project.image || project.thumbnailUrl}
                  isFeatured={false}
                  isLarge={true}
                  className="w-full h-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4">
              {categoryBadge}
              <div className="w-full">
                <ProjectVisual
                  projectId={project.id}
                  title={project.title}
                  category={project.category}
                  liveUrl={project.liveUrl || project.demoUrl}
                  image={project.image || project.thumbnailUrl}
                  isFeatured={false}
                />
              </div>
              {projectDetails}
            </div>
            {actionFooter}
          </>
        )}
      </article>
    </Spotlight>
  );
};
