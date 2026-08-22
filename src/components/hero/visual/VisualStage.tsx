"use client";

import React from "react";
import { useVisualPointer } from "@/hooks/useVisualPointer";
import { cn } from "@/lib/utils";

export interface VisualStageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const VisualStage: React.FC<VisualStageProps> = ({
  children,
  className,
  disabled = false,
  ...props
}) => {
  const { containerRef, isEnabled, handlers } = useVisualPointer({
    maxRotationDeg: 5.0,
    maxTranslationPx: 7.5,
    disabled,
  });

  return (
    <div
      ref={containerRef}
      {...(isEnabled ? handlers : {})}
      className={cn(
        "group relative w-full rounded-[28px] border border-white/[0.1] glass-02 p-5 sm:p-6 shadow-card select-none will-change-transform",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform:
          "perspective(1000px) rotateX(var(--stage-rx, 0deg)) rotateY(var(--stage-ry, 0deg)) translate3d(var(--stage-tx, 0px), var(--stage-ty, 0px), 0) scale(var(--stage-scale, 1))",
      }}
      {...props}
    >
      {/* Layer 0: Dynamic Specular Spotlight Follower & Ambient Sheen */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-300 z-0"
        style={{
          background:
            "radial-gradient(420px circle at var(--stage-spotlight-x, 50%) var(--stage-spotlight-y, 50%), rgba(99, 102, 241, 0.22), rgba(139, 92, 246, 0.1) 35%, transparent 70%)",
          opacity: "var(--stage-spotlight-opacity, 0)",
        }}
        aria-hidden="true"
      />

      {/* Layer 0: Specular Edge Rim Light */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/[0.12] z-0"
        aria-hidden="true"
      />

      {/* Layer 0: Noise Texture & Ambient Atmospheric Glow */}
      <div
        className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0 rounded-[28px] overflow-hidden"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/12 rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3D Depth Content Stage */}
      <div
        className="relative z-10 space-y-4 sm:space-y-5"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
};
