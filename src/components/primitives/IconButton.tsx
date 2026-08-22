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
      sm: "w-8 h-8 rounded-[10px]",
      md: "w-10 h-10 rounded-[12px]",
      lg: "w-12 h-12 rounded-[14px]",
    };

    const variantClasses = {
      primary: "gradient-primary text-white shadow-accent hover:brightness-110",
      secondary: "bg-[#13131A] text-[#F5F5F7] border border-[rgba(255,255,255,0.09)] hover:border-[rgba(255,255,255,0.18)]",
      ghost: "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[rgba(255,255,255,0.06)]",
      glass: "glass-01 text-[#F5F5F7] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.08)]",
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
