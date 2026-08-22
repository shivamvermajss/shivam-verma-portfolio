import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  gradient?: boolean;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", gradient = false, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={cn(
            "h-full w-[1px]",
            gradient
              ? "bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
              : "bg-[rgba(255,255,255,0.08)]",
            className
          )}
          {...props}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-[1px]",
          gradient
            ? "bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.12)] to-transparent"
            : "bg-[rgba(255,255,255,0.08)]",
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
