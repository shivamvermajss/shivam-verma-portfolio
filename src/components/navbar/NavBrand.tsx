"use client";

import React from "react";

export interface NavBrandProps {
  onClick?: () => void;
  name?: string;
  descriptor?: string;
}

export const NavBrand: React.FC<NavBrandProps> = ({
  onClick,
  name = "SHIVAM",
  descriptor = "FULL STACK DEVELOPER",
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else {
      e.preventDefault();
      const about = document.getElementById("about");
      if (about) {
        about.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      href="#about"
      onClick={handleClick}
      aria-label={`${name} - ${descriptor}`}
      className="group relative flex items-center gap-2.5 px-2 py-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-200 select-none"
    >
      {/* Brand Initial Badge — Apple Glass Container */}
      <div className="relative flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-b from-indigo-500/80 to-purple-600/90 border border-white/30 shadow-[0_2px_10px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md text-white font-semibold text-xs group-hover:scale-105 transition-all duration-300 shrink-0">
        <span className="font-mono tracking-tight font-bold text-[11px] md:text-xs">
          {name.charAt(0)}
        </span>
      </div>

      {/* Brand Text & Subtitle */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-[12.5px] font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <span className="hidden sm:block text-[8.5px] font-mono uppercase tracking-wider text-neutral-400 group-hover:text-indigo-300 transition-colors duration-200">
          {descriptor}
        </span>
      </div>
    </a>
  );
};
