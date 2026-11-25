import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./Spotlight";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "surface" | "glass" | "elevated";
  enableSpotlight?: boolean;
  spotlightColor?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "glass",
      enableSpotlight = true,
      spotlightColor = "rgba(99, 102, 241, 0.12)",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      surface: "bg-[#0E0E13] border border-[rgba(255,255,255,0.07)]",
      glass: "glass-02",
      elevated: "bg-[#13131A] border border-[rgba(255,255,255,0.09)] shadow-card",
    };

    const cardContent = (
      <div
        ref={ref}
        className={cn(
          "relative rounded-[20px] p-6 transition-all duration-300 ease-out",
          "hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.16)] hover:shadow-elevated",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );

    if (enableSpotlight) {
      return (
        <Spotlight color={spotlightColor} className="rounded-[20px]">
          {cardContent}
        </Spotlight>
      );
    }

    return cardContent;
  }
);

Card.displayName = "Card";
