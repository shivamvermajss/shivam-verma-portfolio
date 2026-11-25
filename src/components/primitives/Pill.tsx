import React from "react";
import { cn } from "@/lib/utils";

export interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  active?: boolean;
  interactive?: boolean;
}

export const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ children, className, active = false, interactive = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border select-none transition-all duration-200",
          active
            ? "bg-indigo-500/15 border-indigo-500/40 text-indigo-300 shadow-accent"
            : "glass-01 border-[rgba(255,255,255,0.08)] text-[#A1A1AA]",
          interactive && !active && "hover:border-[rgba(255,255,255,0.18)] hover:text-[#F5F5F7] hover:bg-[rgba(255,255,255,0.06)] cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Pill.displayName = "Pill";
