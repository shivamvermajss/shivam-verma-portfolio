import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, variant = "default", size = "md", dot = false, ...props }, ref) => {
    const variantClasses = {
      default: "bg-[rgba(255,255,255,0.06)] text-[#A1A1AA] border border-[rgba(255,255,255,0.08)]",
      accent: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
      success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      outline: "bg-transparent text-[#F5F5F7] border border-[rgba(255,255,255,0.14)]",
    };

    const sizeClasses = {
      sm: "px-2.5 py-0.5 text-[11px] gap-1.5 rounded-full font-medium tracking-wide",
      md: "px-3 py-1 text-xs gap-2 rounded-full font-medium tracking-wide",
    };

    const dotColors = {
      default: "bg-zinc-400",
      accent: "bg-indigo-400 animate-pulse",
      success: "bg-emerald-400 animate-pulse",
      warning: "bg-amber-400",
      outline: "bg-white",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center select-none uppercase tracking-wider",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])} />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
