"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { NavLinkItem } from "./NavLinkItem";
import { SPRING_PRESETS } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useMediaQuery";

import { NavItem } from "@/types/portfolio";

export interface NavLinksProps {
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  items,
  activeId,
  onSelect,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="list"
      onMouseLeave={() => setHoveredId(null)}
      className="relative flex items-center gap-1 p-1 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]"
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <div key={item.id} className="relative flex items-center justify-center">
            {/* Active Pill Spring Indicator */}
            {isActive && (
              <motion.div
                layoutId="active-nav-indicator"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : SPRING_PRESETS.responsive
                }
                className="absolute inset-0 rounded-full bg-white/[0.09] border border-white/[0.14] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_2px_8px_rgba(0,0,0,0.4)] pointer-events-none"
              />
            )}

            {/* Hover Pill Indicator */}
            {isHovered && !isActive && (
              <motion.div
                layoutId="hover-nav-indicator"
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 450, damping: 35 }
                }
                className="absolute inset-0 rounded-full bg-white/[0.04] border border-white/[0.06] pointer-events-none"
              />
            )}

            <NavLinkItem
              id={item.id}
              label={item.label}
              href={item.href}
              isActive={isActive}
              onClick={onSelect}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => {
                if (hoveredId === item.id) {
                  setHoveredId(null);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
