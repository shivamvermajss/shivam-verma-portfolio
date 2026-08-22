"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TechNodeItem {
  id: string;
  name: string;
  symbol: string;
  positionClasses: string;
  depthZ: number;
}

export const VERIFIED_SPATIAL_NODES: TechNodeItem[] = [
  {
    id: "react",
    name: "React",
    symbol: "◇",
    positionClasses: "top-[-14px] left-[6%] sm:top-[-16px] sm:left-[8%]",
    depthZ: 28,
  },
  {
    id: "nodejs",
    name: "Node.js",
    symbol: "◈",
    positionClasses: "top-[-14px] right-[6%] sm:top-[-16px] sm:right-[8%]",
    depthZ: 26,
  },
  {
    id: "express",
    name: "Express.js",
    symbol: "◆",
    positionClasses: "top-[46%] left-[-12px] sm:left-[-18px]",
    depthZ: 24,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    symbol: "◇",
    positionClasses: "top-[50%] right-[-12px] sm:right-[-18px]",
    depthZ: 26,
  },
  {
    id: "javascript",
    name: "JavaScript",
    symbol: "◈",
    positionClasses: "bottom-[-14px] left-[10%] sm:bottom-[-16px] sm:left-[14%]",
    depthZ: 24,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    symbol: "◆",
    positionClasses: "bottom-[-14px] right-[10%] sm:bottom-[-16px] sm:right-[14%]",
    depthZ: 26,
  },
];

export interface SpatialOverlayProps {
  className?: string;
  nodes?: TechNodeItem[];
}

export const SpatialOverlay: React.FC<SpatialOverlayProps> = ({
  className,
  nodes = VERIFIED_SPATIAL_NODES,
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-20 hidden sm:block",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform:
          "translate3d(var(--stage-nodes-tx, 0px), var(--stage-nodes-ty, 0px), 24px)",
      }}
    >
      {/* Hairline Structural Spatial Vector Accents (Aria-hidden for decorative purity) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 overflow-visible"
        aria-hidden="true"
      >
        <line
          x1="12%"
          y1="0"
          x2="22%"
          y2="15%"
          stroke="rgba(99, 102, 241, 0.5)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <line
          x1="88%"
          y1="0"
          x2="78%"
          y2="15%"
          stroke="rgba(99, 102, 241, 0.5)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <line
          x1="0"
          y1="48%"
          x2="10%"
          y2="48%"
          stroke="rgba(99, 102, 241, 0.5)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <line
          x1="100%"
          y1="52%"
          x2="90%"
          y2="52%"
          stroke="rgba(99, 102, 241, 0.5)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Floating Spatial Technology Markers (Semantic HTML for Screen Readers) */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className={cn(
            "group/node absolute inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono",
            "glass-03 border border-white/[0.14] text-[#E4E4E7]",
            "shadow-[0_8px_20px_-4px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.15)]",
            "hover:text-white hover:border-indigo-400/60 hover:bg-[rgba(30,30,42,0.95)]",
            "hover:shadow-[0_0_16px_-2px_rgba(99,102,241,0.45)] hover:[--node-scale:1.028] hover:[--node-z-offset:4px]",
            "transition-all duration-200 cursor-default select-none pointer-events-auto backdrop-blur-md",
            node.positionClasses
          )}
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(calc(${node.depthZ}px + var(--node-z-offset, 0px))) scale(var(--node-scale, 1))`,
          }}
        >
          <span
            className="text-[9.5px] text-indigo-400 font-bold group-hover/node:text-indigo-300 transition-colors"
            aria-hidden="true"
          >
            {node.symbol}
          </span>
          <span className="font-semibold tracking-tight">{node.name}</span>
        </div>
      ))}
    </div>
  );
};
