"use client";

import React from "react";
import { Zap, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CapabilityGridProps {
  className?: string;
}

export const CapabilityGrid: React.FC<CapabilityGridProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-3",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        transform:
          "translate3d(var(--stage-cards-tx, 0px), var(--stage-cards-ty, 0px), 14px)",
      }}
    >
      {/* Pillar 1: Full Stack Architecture */}
      <div
        className="group/card p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-200"
        style={{ transform: "translateZ(4px)" }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-metadata text-indigo-400 font-mono text-[9.5px]">
            01 // FULL STACK
          </span>
          <Layers className="w-3.5 h-3.5 text-indigo-400 group-hover/card:scale-110 transition-transform duration-200" />
        </div>
        <h3 className="text-card-heading text-xs font-semibold text-[#F5F5F7] mb-1">
          MERN Architecture
        </h3>
        <p className="text-body-sm text-[11px] text-[#71717A] leading-relaxed">
          Full-stack web applications with React, Node.js, Express, and MongoDB.
        </p>
      </div>

      {/* Pillar 2: Real-Time Systems */}
      <div
        className="group/card p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-200"
        style={{ transform: "translateZ(4px)" }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-metadata text-purple-400 font-mono text-[9.5px]">
            02 // REAL-TIME
          </span>
          <Zap className="w-3.5 h-3.5 text-purple-400 group-hover/card:scale-110 transition-transform duration-200" />
        </div>
        <h3 className="text-card-heading text-xs font-semibold text-[#F5F5F7] mb-1">
          Socket.IO Messaging
        </h3>
        <p className="text-body-sm text-[11px] text-[#71717A] leading-relaxed">
          Real-time messaging, active rooms, and event-driven state (QuickChat).
        </p>
      </div>

      {/* Pillar 3: AI Product Workflows */}
      <div
        className="group/card p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-200"
        style={{ transform: "translateZ(4px)" }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-metadata text-blue-400 font-mono text-[9.5px]">
            03 // AI PRODUCT
          </span>
          <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover/card:scale-110 transition-transform duration-200" />
        </div>
        <h3 className="text-card-heading text-xs font-semibold text-[#F5F5F7] mb-1">
          AI Image Generation
        </h3>
        <p className="text-body-sm text-[11px] text-[#71717A] leading-relaxed">
          AI-powered image generation and credit-based SaaS workflows (Imagify).
        </p>
      </div>

      {/* Pillar 4: Academic Foundation */}
      <div
        className="group/card p-3.5 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-200"
        style={{ transform: "translateZ(4px)" }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-metadata text-emerald-400 font-mono text-[9.5px]">
            04 // ACADEMIC
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 group-hover/card:scale-110 transition-transform duration-200" />
        </div>
        <h3 className="text-card-heading text-xs font-semibold text-[#F5F5F7] mb-1">
          B.Tech CSE (7.77)
        </h3>
        <p className="text-body-sm text-[11px] text-[#71717A] leading-relaxed">
          JSS Academy of Technical Education (2023–2026) · Noida, U.P.
        </p>
      </div>
    </div>
  );
};
