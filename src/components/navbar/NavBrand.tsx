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
      className="group relative flex items-center gap-2.5 px-2.5 py-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-200 select-none"
    >
      {/* Brand Initial Badge */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full gradient-primary text-white font-bold text-xs shadow-subtle group-hover:scale-105 group-hover:shadow-accent transition-all duration-300 shrink-0">
        <span className="font-mono tracking-tighter font-semibold">
          {name.charAt(0)}
        </span>
        {/* Specular rim overlay */}
        <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
      </div>

      {/* Brand Text & Subtitle */}
      <div className="flex flex-col items-start leading-tight">
        <span className="text-xs font-semibold tracking-tight text-[#F5F5F7] group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <span className="hidden sm:block text-[8.5px] font-mono uppercase tracking-wider text-[#71717A] group-hover:text-indigo-400 transition-colors duration-200">
          {descriptor}
        </span>
      </div>
    </a>
  );
};
