"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
  label: string; // Accessible aria-label mandatory
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = "glass",
      size = "md",
      isMagnetic = false,
      label,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "w-8 h-8 rounded-full text-xs",
      md: "w-10 h-10 rounded-full text-sm",
      lg: "w-12 h-12 rounded-full text-base",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-b from-indigo-500/85 via-indigo-600/90 to-purple-600/90 text-white border border-white/25 border-t-white/40 shadow-[0_4px_16px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)] backdrop-blur-xl hover:brightness-110",
      secondary:
        "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.14] border-t-white/[0.28] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl backdrop-saturate-[180%]",
      ghost:
        "text-neutral-300 hover:text-white hover:bg-white/[0.08] backdrop-blur-md rounded-full",
      glass:
        "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] border-t-white/[0.24] shadow-[0_2px_10px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.22)] backdrop-blur-xl",
    };

    const buttonElement = (
      <button
        ref={ref}
        aria-label={label}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 ease-out outline-none cursor-pointer",
          "hover:scale-[1.04] active:scale-[0.95] focus-visible:ring-2 focus-visible:ring-indigo-500",
          "disabled:opacity-50 disabled:pointer-events-none disabled:transform-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    );

    if (isMagnetic && !disabled) {
      return <Magnetic>{buttonElement}</Magnetic>;
    }

    return buttonElement;
  }
);

IconButton.displayName = "IconButton";
