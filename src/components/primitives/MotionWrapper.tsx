"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { useReducedMotion } from "@/hooks/useMediaQuery";

export interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
};
