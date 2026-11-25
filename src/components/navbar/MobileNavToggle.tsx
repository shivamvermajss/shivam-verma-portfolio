"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface MobileNavToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const MobileNavToggle = React.forwardRef<HTMLButtonElement, MobileNavToggleProps>(
  ({ isOpen, onToggle, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className={cn(
          "relative flex items-center justify-center w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md transition-all duration-200 cursor-pointer select-none",
          isOpen && "bg-white/[0.18] border-white/[0.28]",
          className
        )}
        {...props}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#F5F5F7]"
          aria-hidden="true"
        >
          {/* Top Line */}
          <motion.line
            x1="4"
            x2="20"
            y1={isOpen ? "12" : "7"}
            y2={isOpen ? "12" : "7"}
            animate={{
              y1: isOpen ? 12 : 7,
              y2: isOpen ? 12 : 7,
              rotate: isOpen ? 45 : 0,
            }}
            style={{ originX: "50%", originY: "50%" }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
          />

          {/* Middle Line */}
          <motion.line
            x1="4"
            x2="20"
            y1="12"
            y2="12"
            animate={{
              opacity: isOpen ? 0 : 1,
              scaleX: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.15 }}
          />

          {/* Bottom Line */}
          <motion.line
            x1="4"
            x2="20"
            y1={isOpen ? "12" : "17"}
            y2={isOpen ? "12" : "17"}
            animate={{
              y1: isOpen ? 12 : 17,
              y2: isOpen ? 12 : 17,
              rotate: isOpen ? -45 : 0,
            }}
            style={{ originX: "50%", originY: "50%" }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
          />
        </svg>
      </button>
    );
  }
);

MobileNavToggle.displayName = "MobileNavToggle";
