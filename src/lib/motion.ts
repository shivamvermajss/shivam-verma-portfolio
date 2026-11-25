import type { Variants } from "motion/react";

/**
 * Semantic Motion Durations (seconds)
 */
export const MOTION_DURATIONS = {
  FAST: 0.15,
  NORMAL: 0.3,
  SLOW: 0.6,
  CINEMATIC: 1.0,
} as const;

/**
 * Controlled Spring Physics Presets
 * High damping + low mass = physical, non-bouncy, responsive feel
 */
export const SPRING_PRESETS = {
  responsive: {
    type: "spring",
    stiffness: 400,
    damping: 32,
    mass: 0.8,
  },
  smooth: {
    type: "spring",
    stiffness: 300,
    damping: 28,
    mass: 1.0,
  },
  physical: {
    type: "spring",
    stiffness: 220,
    damping: 24,
    mass: 1.2,
  },
} as const;

/**
 * Standard Motion Variants for Framer Motion / Motion
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.NORMAL,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.NORMAL,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_PRESETS.responsive,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};
