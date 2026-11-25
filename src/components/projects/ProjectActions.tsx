"use client";

import React from "react";
import { Button } from "@/components/primitives/Button";
import { ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export interface ProjectActionsProps {
  liveUrl?: string;
  githubUrl?: string;
  liveDemoLabel?: string;
  gitHubLabel?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  projectTitle: string;
}

const DEFAULT_GITHUB_URL = "https://github.com/shivamvermajss?tab=repositories";

export const ProjectActions: React.FC<ProjectActionsProps> = ({
  liveUrl,
  githubUrl,
  liveDemoLabel = "Live Demo",
  gitHubLabel = "View GitHub",
  className,
  size = "sm",
  projectTitle,
}) => {
  const hasLive = Boolean(liveUrl);
  const resolvedGithubUrl = githubUrl || DEFAULT_GITHUB_URL;

  // Projects with no Live URL (e.g., QuickChat & Smart Meet):
  // Primary clickable View GitHub CTA + subtle clickable Source Available pill button for symmetry
  if (!hasLive) {
    return (
      <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
        <Button
          variant="primary"
          size={size}
          href={resolvedGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View GitHub repository for ${projectTitle}`}
          leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
          className="shadow-accent font-sans"
        >
          {gitHubLabel}
        </Button>

        <Button
          variant="ghost"
          size={size}
          href={resolvedGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code for ${projectTitle}`}
          leftIcon={<Code2 className="w-3.5 h-3.5 text-indigo-400" />}
          className="border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white rounded-full font-sans"
        >
          Source Available
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      <Button
        variant="primary"
        size={size}
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live demo for ${projectTitle}`}
        rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
        className="shadow-accent font-sans"
      >
        {liveDemoLabel}
      </Button>

      <Button
        variant="secondary"
        size={size}
        href={resolvedGithubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View GitHub repository for ${projectTitle}`}
        leftIcon={<GithubIcon className="w-3.5 h-3.5" />}
        className="font-sans"
      >
        {gitHubLabel}
      </Button>
    </div>
  );
};
