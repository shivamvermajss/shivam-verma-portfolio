"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";

export type CursorState = "DEFAULT" | "VIEW" | "OPEN" | "EXPLORE" | "DRAG";

interface CustomCursorProps {
  state?: CursorState;
  text?: string;
  enabled?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  state = "DEFAULT",
  text,
  enabled = true,
}) => {
  const hasPointer = useHasPointer();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!hasPointer || prefersReducedMotion || !enabled) return;

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [hasPointer, prefersReducedMotion, enabled, cursorX, cursorY, isVisible]);

  if (!hasPointer || prefersReducedMotion || !enabled || !isVisible) {
    return null;
  }

  const isExpanded = state !== "DEFAULT";

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
      }}
      className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block"
    >
      <motion.div
        animate={{
          scale: isExpanded ? 2.2 : 1,
          opacity: 0.85,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex items-center justify-center rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/40 w-8 h-8 shadow-accent"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
        {text && isExpanded && (
          <span className="absolute text-[9px] font-semibold tracking-wider text-white uppercase select-none">
            {text || state}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
