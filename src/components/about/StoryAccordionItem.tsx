"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { StoryChapter } from "@/types/portfolio";
import { Plus, Minus } from "lucide-react";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export interface StoryAccordionItemProps {
  chapter: StoryChapter;
  isOpen: boolean;
  onToggle: () => void;
  onHoverChange?: (isHovered: boolean) => void;
  className?: string;
}

export const StoryAccordionItem: React.FC<StoryAccordionItemProps> = ({
  chapter,
  isOpen,
  onToggle,
  onHoverChange,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200 overflow-hidden",
        isOpen
          ? "bg-[#0E0E18]/90 border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.08)]"
          : "bg-white/[0.02] border-white/[0.07] hover:border-white/[0.16] hover:bg-white/[0.035]",
        className
      )}
    >
      <button
        type="button"
        id={`story-btn-${chapter.id}`}
        aria-expanded={isOpen}
        aria-controls={`story-panel-${chapter.id}`}
        onClick={onToggle}
        onMouseEnter={() => onHoverChange?.(true)}
        onMouseLeave={() => onHoverChange?.(false)}
        onFocus={() => onHoverChange?.(true)}
        onBlur={() => onHoverChange?.(false)}
        className="w-full p-3.5 sm:p-4 text-left flex flex-col gap-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl select-none"
      >
        {/* Top Header Row: Number + Title + Toggle Icon */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className={cn(
                "text-xs font-mono font-bold tracking-wider transition-colors duration-200",
                isOpen ? "text-indigo-300" : "text-indigo-400/80"
              )}
            >
              {chapter.number}
            </span>
            <span
              className={cn(
                "text-xs sm:text-sm font-mono font-bold tracking-wider uppercase truncate transition-colors duration-200",
                isOpen ? "text-white" : "text-[#F5F5F7]"
              )}
            >
              {chapter.title}
            </span>
          </div>

          <div
            className={cn(
              "w-6 h-6 rounded-lg flex items-center justify-center border transition-all duration-200 shrink-0",
              isOpen
                ? "bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
                : "bg-white/[0.04] border-white/[0.08] text-[#A1A1AA]"
            )}
            aria-hidden="true"
          >
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </div>
        </div>

        {/* Collapsed Preview Line */}
        {!isOpen && (
          <p className="text-xs text-[#71717A] truncate pt-0.5 leading-normal">
            {chapter.preview}
          </p>
        )}
      </button>

      {/* Expanded Content Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`story-panel-${chapter.id}`}
            role="region"
            aria-labelledby={`story-btn-${chapter.id}`}
            initial={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden"
          >
            <div className="px-3.5 sm:px-4 pb-4 pt-1 space-y-3 border-t border-white/[0.06]">
              <p className="text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed pt-1">
                {chapter.content}
              </p>

              {/* Verified Metadata Tags */}
              {chapter.metadata && chapter.metadata.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {chapter.metadata.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
