import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  spacing?: "default" | "compact" | "large" | "none";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, spacing = "default", ...props }, ref) => {
    const spacingClasses = {
      default: "py-16 md:py-24 lg:py-32",
      compact: "py-10 md:py-16 lg:py-20",
      large: "py-24 md:py-36 lg:py-44",
      none: "py-0",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative w-full overflow-hidden", spacingClasses[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
