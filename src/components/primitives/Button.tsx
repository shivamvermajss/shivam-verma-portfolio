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
      sm: "h-9 px-4 text-xs gap-1.5 rounded-full font-medium tracking-tight",
      md: "h-11 px-5.5 text-sm gap-2 rounded-full font-semibold tracking-tight",
      lg: "h-12.5 px-7 text-[15px] gap-2.5 rounded-full font-semibold tracking-tight",
    };

    const variantClasses = {
      primary:
        "bg-gradient-to-b from-indigo-500/85 via-indigo-600/90 to-purple-600/90 hover:from-indigo-400/90 hover:to-indigo-500/95 text-white border border-white/25 border-t-white/40 shadow-[0_4px_20px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.2)] backdrop-blur-xl backdrop-saturate-150 hover:shadow-[0_6px_28px_rgba(99,102,241,0.5),inset_0_1px_1.5px_rgba(255,255,255,0.6)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]",
      secondary:
        "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/[0.14] border-t-white/[0.28] shadow-[0_4px_18px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-2xl backdrop-saturate-[180%] hover:border-white/[0.30] hover:shadow-[0_6px_24px_rgba(0,0,0,0.45),inset_0_1px_1.5px_rgba(255,255,255,0.35)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500",
      ghost:
        "text-neutral-300 hover:text-white hover:bg-white/[0.08] active:bg-white/[0.14] backdrop-blur-md rounded-full active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500",
      pill: "bg-white/[0.08] hover:bg-white/[0.14] text-white rounded-full border border-white/[0.14] border-t-white/[0.28] shadow-[0_4px_18px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-2xl backdrop-saturate-[180%] hover:border-indigo-400/40 hover:bg-indigo-500/10 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-indigo-500",
    };

    const defaultSpotlightColor =
      spotlightColor ??
      (variant === "primary"
        ? "rgba(255, 255, 255, 0.20)"
        : "rgba(99, 102, 241, 0.18)");

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
