"use client";

import React from "react";
import { Magnetic } from "@/components/primitives/Magnetic";
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
    <Magnetic strength={0.18} maxOffset={3} proximityRadius={18}>
      <a
        href={href}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "relative z-10 block px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight select-none transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
          isActive
            ? "text-white font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
            : "text-neutral-300 hover:text-white"
        )}
      >
        {label}
      </a>
    </Magnetic>
  );
};
