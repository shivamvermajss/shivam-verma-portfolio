"use client";

import React from "react";
import { Magnetic } from "@/components/primitives/Magnetic";
import { Spotlight } from "@/components/primitives/Spotlight";
import { cn } from "@/lib/utils";

export interface NavLinkItemProps {
  id: string;
  label: string;
  href: string;
  isActive: boolean;
  onClick: (id: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const NavLinkItem: React.FC<NavLinkItemProps> = ({
  id,
  label,
  href,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <Magnetic strength={0.25} maxOffset={4} proximityRadius={20}>
      <Spotlight
        size={70}
        color={isActive ? "rgba(99, 102, 241, 0.14)" : "rgba(255, 255, 255, 0.08)"}
        opacity={0.65}
        className="rounded-full"
      >
        <a
          href={href}
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "relative z-10 block px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight select-none transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
            isActive
              ? "text-[#F5F5F7] font-semibold"
              : "text-[#A1A1AA] hover:text-[#F5F5F7]"
          )}
        >
          {label}
        </a>
      </Spotlight>
    </Magnetic>
  );
};
