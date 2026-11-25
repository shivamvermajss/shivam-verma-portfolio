"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";
import { SPRING_PRESETS } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // Proportional pull factor (0.1 - 0.5)
  maxOffset?: number; // Maximum displacement in pixels
  distance?: number; // Backwards-compatible alias for maxOffset
  proximityRadius?: number; // Proximity margin beyond bounding box
  disabled?: boolean;
  className?: string;
}

/**
 * High-performance Magnetic interaction primitive.
 * Uses MotionValues and Springs to avoid React state re-renders during pointer tracking.
 * Strictly respects pointer:fine capability and prefers-reduced-motion.
 */
export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.3,
  maxOffset,
  distance = 8,
  proximityRadius = 30,
  disabled = false,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasPointer = useHasPointer();
  const prefersReducedMotion = useReducedMotion();

  // Determine effective max offset (maxOffset prop takes precedence over distance)
  const effectiveMaxOffset = maxOffset ?? distance;

  // Direct GPU-accelerated motion values (bypasses React reconciliation on pointermove)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth physical spring physics
  const springX = useSpring(x, {
    stiffness: SPRING_PRESETS.responsive.stiffness,
    damping: SPRING_PRESETS.responsive.damping,
    mass: SPRING_PRESETS.responsive.mass,
  });

  const springY = useSpring(y, {
    stiffness: SPRING_PRESETS.responsive.stiffness,
    damping: SPRING_PRESETS.responsive.damping,
    mass: SPRING_PRESETS.responsive.mass,
  });

  const isEnabled = hasPointer && !prefersReducedMotion && !disabled;

  useEffect(() => {
    // Reset motion values when disabled or unmounting
    if (!isEnabled) {
      x.set(0);
      y.set(0);
    }
  }, [isEnabled, x, y]);

  // If magnetic is disabled or device lacks fine pointer, render clean static wrapper
  if (!isEnabled) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Check proximity radius
    const distanceToCenter = Math.hypot(deltaX, deltaY);
    const maxRadius = Math.max(rect.width, rect.height) / 2 + proximityRadius;

    if (distanceToCenter > maxRadius) {
      x.set(0);
      y.set(0);
      return;
    }

    // Calculate clamped displacement
    const pullX = Math.min(
      Math.max(deltaX * strength, -effectiveMaxOffset),
      effectiveMaxOffset
    );
    const pullY = Math.min(
      Math.max(deltaY * strength, -effectiveMaxOffset),
      effectiveMaxOffset
    );

    x.set(pullX);
    y.set(pullY);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
};
