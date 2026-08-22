import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./Spotlight";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  enableSpotlight?: boolean;
  spotlightColor?: string;
  header?: React.ReactNode;
}

export const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      children,
      className,
      colSpan = 1,
      rowSpan = 1,
      enableSpotlight = true,
      spotlightColor = "rgba(139, 92, 246, 0.14)",
      header,
      ...props
    },
    ref
  ) => {
    const colSpanClasses = {
      1: "col-span-1",
      2: "col-span-1 md:col-span-2",
      3: "col-span-1 md:col-span-3",
      4: "col-span-1 md:col-span-2 lg:col-span-4",
    };

    const rowSpanClasses = {
      1: "row-span-1",
      2: "row-span-1 md:row-span-2",
      3: "row-span-1 md:row-span-3",
    };

    const cardContent = (
      <div
        ref={ref}
        className={cn(
          "glass-02 relative rounded-[26px] p-6 md:p-8 flex flex-col justify-between overflow-hidden",
          "border border-[rgba(255,255,255,0.08)] transition-all duration-300 ease-out",
          "hover:-translate-y-[2px] hover:border-[rgba(255,255,255,0.18)] hover:shadow-accent",
          colSpanClasses[colSpan],
          rowSpanClasses[rowSpan],
          className
        )}
        {...props}
      >
        {header && <div className="mb-4">{header}</div>}
        <div className="relative z-10 flex-1">{children}</div>
      </div>
    );

    if (enableSpotlight) {
      return (
        <Spotlight
          color={spotlightColor}
          className={cn("rounded-[26px]", colSpanClasses[colSpan], rowSpanClasses[rowSpan])}
        >
          {cardContent}
        </Spotlight>
      );
    }

    return cardContent;
  }
);

BentoCard.displayName = "BentoCard";
