"use client";

import React, { useState } from "react";
import { StoryChapter } from "@/types/portfolio";
import { StoryAccordionItem } from "./StoryAccordionItem";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StoryAccordionProps {
  chapters: StoryChapter[];
  defaultOpenId?: string;
  onActiveChange?: (activeId: string | null) => void;
  className?: string;
}

export const StoryAccordion: React.FC<StoryAccordionProps> = ({
  chapters,
  defaultOpenId = "building",
  onActiveChange,
  className,
}) => {
  const [activeStoryId, setActiveStoryId] = useState<string | null>(defaultOpenId);

  const handleToggle = (id: string) => {
    const nextId = activeStoryId === id ? null : id;
    setActiveStoryId(nextId);
    onActiveChange?.(nextId);
  };

  const handleHoverChange = (id: string, isHovered: boolean) => {
    if (isHovered) {
      onActiveChange?.(id);
    } else {
      onActiveChange?.(activeStoryId);
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {/* Editorial Section Sub-label */}
      <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider">
        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
        <span>DEVELOPER JOURNEY</span>
      </div>

      {/* Accordion List */}
      <div className="space-y-2.5" role="tablist" aria-label="Developer Journey Chapters">
        {chapters.map((chapter) => (
          <StoryAccordionItem
            key={chapter.id}
            chapter={chapter}
            isOpen={activeStoryId === chapter.id}
            onToggle={() => handleToggle(chapter.id)}
            onHoverChange={(isHovered) => handleHoverChange(chapter.id, isHovered)}
          />
        ))}
      </div>
    </div>
  );
};
