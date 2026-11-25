"use client";

import React, { useState } from "react";
import { constellationNodes, ConstellationNode } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Sparkles, Layers, Cpu, Database, Radio, Lock, Code2 } from "lucide-react";

export interface TechConstellationProps {
  className?: string;
}

const getNodeIcon = (id: string) => {
  switch (id) {
    case "center-fullstack":
      return <Cpu className="w-4 h-4 text-indigo-300 animate-pulse" />;
    case "node-react":
      return <Layers className="w-3.5 h-3.5 text-indigo-400" />;
    case "node-node":
    case "node-express":
      return <Code2 className="w-3.5 h-3.5 text-violet-400" />;
    case "node-mongo":
    case "node-sql":
      return <Database className="w-3.5 h-3.5 text-blue-400" />;
    case "node-socket":
      return <Radio className="w-3.5 h-3.5 text-emerald-400" />;
    case "node-jwt":
      return <Lock className="w-3.5 h-3.5 text-purple-400" />;
    default:
      return <Sparkles className="w-3.5 h-3.5 text-indigo-300" />;
  }
};

export const TechConstellation: React.FC<TechConstellationProps> = ({ className }) => {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const activeNode = constellationNodes.find((n) => n.id === activeNodeId);
  const activeConnections = activeNode ? activeNode.connections : [];

  return (
    <div
      className={cn(
        "relative w-full h-[280px] sm:h-[320px] md:h-[350px] rounded-[24px] overflow-hidden",
        "bg-[#08080D] border border-white/[0.1] flex items-center justify-center select-none shadow-card",
        className
      )}
      aria-label="Interactive Full-Stack Technology Constellation"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="lineGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {constellationNodes.map((node) =>
          node.connections.map((targetId) => {
            const target = constellationNodes.find((n) => n.id === targetId);
            if (!target) return null;

            // Only render line once per pair (e.g. node.id < targetId to avoid duplicates)
            if (node.id > target.id) return null;

            const isLineActive =
              activeNodeId === node.id ||
              activeNodeId === target.id ||
              (activeNodeId === "center-fullstack" && (node.isCenter || target.isCenter));

            return (
              <line
                key={`${node.id}-${target.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke={isLineActive ? "url(#lineGradActive)" : "url(#lineGradDefault)"}
                strokeWidth={isLineActive ? 2.5 : 1.5}
                strokeDasharray={isLineActive ? "none" : "4,4"}
                className="transition-all duration-300 ease-out"
              />
            );
          })
        )}
      </svg>

      {/* Interactive Constellation Nodes */}
      {constellationNodes.map((node) => {
        const isHovered = activeNodeId === node.id;
        const isConnectedToActive = activeConnections.includes(node.id);
        const isCenter = node.isCenter;

        return (
          <div
            key={node.id}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            tabIndex={0}
            role="button"
            aria-label={`${node.name} (${node.category})`}
            onMouseEnter={() => setActiveNodeId(node.id)}
            onMouseLeave={() => setActiveNodeId(null)}
            onFocus={() => setActiveNodeId(node.id)}
            onBlur={() => setActiveNodeId(null)}
            className={cn(
              "absolute z-10 flex flex-col items-center justify-center gap-1.5",
              "transition-all duration-200 cursor-pointer outline-none",
              isHovered && "scale-110 z-20"
            )}
          >
            {/* Center Node / Outer Ring */}
            <div
              className={cn(
                "flex items-center justify-center gap-2 rounded-full backdrop-blur-md transition-all duration-300",
                isCenter
                  ? "px-4 py-2 sm:px-5 sm:py-2.5 bg-indigo-950/95 border-2 border-indigo-500/80 shadow-[0_0_30px_rgba(99,102,241,0.5)] ring-4 ring-indigo-500/20"
                  : "px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#12121D]/95 border border-white/[0.14] shadow-md hover:border-indigo-400 hover:bg-[#1A1A2E]",
                isHovered && "border-indigo-400 bg-indigo-900/70 shadow-[0_0_24px_rgba(99,102,241,0.6)]",
                isConnectedToActive && !isHovered && "border-indigo-500/50 bg-[#18182E] shadow-[0_0_16px_rgba(99,102,241,0.25)]"
              )}
            >
              {getNodeIcon(node.id)}
              <span
                className={cn(
                  "font-mono text-xs sm:text-[13px] tracking-tight",
                  isCenter ? "font-bold text-white tracking-wider" : "font-semibold text-[#F5F5F7]",
                  isHovered && "text-white font-bold"
                )}
              >
                {node.name}
              </span>
            </div>

            {/* Sub-label category */}
            <span
              className={cn(
                "text-[10px] sm:text-[11px] font-mono tracking-wider uppercase font-medium transition-all duration-200",
                isHovered || isCenter
                  ? "opacity-100 text-indigo-300 font-semibold"
                  : isConnectedToActive
                  ? "opacity-90 text-indigo-300/80"
                  : "opacity-75 text-[#A1A1AA]"
              )}
            >
              {node.category}
            </span>
          </div>
        );
      })}

      {/* Bottom Hint Strip */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/[0.1] text-[10.5px] font-mono text-[#A1A1AA] pointer-events-none hidden sm:flex items-center gap-1.5">
        <Sparkles className="w-3 h-3 text-indigo-400" />
        Hover nodes to trace full-stack architecture relationships
      </div>
    </div>
  );
};
