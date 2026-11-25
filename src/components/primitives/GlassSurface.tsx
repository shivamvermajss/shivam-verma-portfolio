import React from "react";
import { cn } from "@/lib/utils";

export interface GlassSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  level?: "glass-01" | "glass-02" | "glass-03";
  hoverEffect?: boolean;
}

export const GlassSurface = React.forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ children, className, level = "glass-02", hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          level,
          "relative overflow-hidden transition-all duration-300 ease-out",
          hoverEffect && "hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(24,24,36,0.8)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassSurface.displayName = "GlassSurface";
