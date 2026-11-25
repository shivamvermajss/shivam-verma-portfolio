"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch",
        className
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
