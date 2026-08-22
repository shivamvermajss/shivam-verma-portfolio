"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { useIsMobile, useReducedMotion } from "@/hooks/useMediaQuery";

export interface ResponsiveMotionProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  mobileProps?: HTMLMotionProps<"div">;
}

export const ResponsiveMotion: React.FC<ResponsiveMotionProps> = ({
  children,
  mobileProps,
  className,
  ...desktopProps
}) => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const activeProps = isMobile && mobileProps ? mobileProps : desktopProps;

  return (
    <motion.div className={className} {...activeProps}>
      {children}
    </motion.div>
  );
};
