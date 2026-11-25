"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { fadeUpVariants, fadeInVariants } from "@/lib/motion";

export interface RevealProps {
  children: React.ReactNode;
  variant?: "fade-up" | "fade";
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariants = variant === "fade-up" ? fadeUpVariants : fadeInVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={selectedVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
