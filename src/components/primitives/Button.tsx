"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";
import { Spotlight } from "./Spotlight";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "pill";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
  magneticStrength?: number;
  magneticMaxOffset?: number;
  enableSpotlight?: boolean;
  spotlightSize?: number;
  spotlightColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      isMagnetic = false,
      magneticStrength = 0.35,
      magneticMaxOffset = 8,
      enableSpotlight = true,
      spotlightSize = 90,
      spotlightColor,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "h-9 px-4 text-xs gap-1.5 rounded-[12px]",
      md: "h-11 px-6 text-sm gap-2 rounded-[14px]",
      lg: "h-13 px-8 text-base gap-2.5 rounded-[16px]",
    };

    const variantClasses = {
      primary:
        "gradient-primary text-white shadow-accent hover:brightness-105 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]",
      secondary:
        "glass-01 text-[#F5F5F7] border border-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.06)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500",
      ghost:
        "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[rgba(255,255,255,0.05)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500",
      pill: "glass-01 text-[#F5F5F7] rounded-full border border-[rgba(255,255,255,0.12)] hover:border-indigo-500/50 hover:bg-indigo-500/10 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500",
    };

    const defaultSpotlightColor =
      spotlightColor ??
      (variant === "primary"
        ? "rgba(255, 255, 255, 0.16)"
        : "rgba(99, 102, 241, 0.16)");

    const isSpotlightActive = enableSpotlight && !disabled && (variant === "primary" || variant === "secondary");

    const innerButton = (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out outline-none select-none cursor-pointer overflow-hidden",
          "hover:scale-[1.02] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {isSpotlightActive && (
          <Spotlight
            size={spotlightSize}
            color={defaultSpotlightColor}
            opacity={0.8}
            className="absolute inset-0 w-full h-full rounded-[inherit] pointer-events-none z-0"
          >
            <div className="w-full h-full" />
          </Spotlight>
        )}
        {leftIcon && <span className="relative z-10 inline-flex shrink-0">{leftIcon}</span>}
        <span className="relative z-10">{children}</span>
        {rightIcon && <span className="relative z-10 inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );

    if (isMagnetic && !disabled) {
      return (
        <Magnetic strength={magneticStrength} maxOffset={magneticMaxOffset}>
          {innerButton}
        </Magnetic>
      );
    }

    return innerButton;
  }
);

Button.displayName = "Button";
