"use client";

import React, { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";

export interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: number;
  color?: string;
  opacity?: number;
  disabled?: boolean;
}

/**
 * High-Performance Cursor-Aware Spotlight Primitive.
 * Uses direct CSS custom properties (--spotlight-x, --spotlight-y, --spotlight-opacity)
 * to avoid React state re-renders during pointer tracking.
 * Automatically disabled on touch devices and reduced-motion preferences.
 */
export const Spotlight = React.forwardRef<HTMLDivElement, SpotlightProps>(
  (
    {
      children,
      className,
      size = 300,
      color = "rgba(99, 102, 241, 0.15)",
      opacity = 0.8,
      disabled = false,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const containerRef = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;
    const hasPointer = useHasPointer();
    const prefersReducedMotion = useReducedMotion();

    const isEnabled = hasPointer && !prefersReducedMotion && !disabled;

    const handlePointerMove = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        if (!containerRef.current || !isEnabled) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty("--spotlight-x", `${x}px`);
        containerRef.current.style.setProperty("--spotlight-y", `${y}px`);
        containerRef.current.style.setProperty("--spotlight-opacity", `${opacity}`);
      },
      [containerRef, isEnabled, opacity]
    );

    const handlePointerEnter = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        if (!containerRef.current || !isEnabled) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty("--spotlight-x", `${x}px`);
        containerRef.current.style.setProperty("--spotlight-y", `${y}px`);
        containerRef.current.style.setProperty("--spotlight-opacity", `${opacity}`);
      },
      [containerRef, isEnabled, opacity]
    );

    const handlePointerLeave = useCallback(() => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--spotlight-opacity", "0");
    }, [containerRef]);

    return (
      <div
        ref={containerRef}
        onPointerMove={isEnabled ? handlePointerMove : undefined}
        onPointerEnter={isEnabled ? handlePointerEnter : undefined}
        onPointerLeave={isEnabled ? handlePointerLeave : undefined}
        style={
          {
            "--spotlight-size": `${size}px`,
            "--spotlight-color": color,
            "--spotlight-opacity": "0",
            ...props.style,
          } as React.CSSProperties
        }
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {/* Cursor-following radial spotlight overlay */}
        {isEnabled && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-200 ease-out z-10"
            style={{
              opacity: "var(--spotlight-opacity, 0)",
              background: `radial-gradient(var(--spotlight-size, ${size}px) circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--spotlight-color, ${color}), transparent 70%)`,
            }}
            aria-hidden="true"
          />
        )}
        {children}
      </div>
    );
  }
);

Spotlight.displayName = "Spotlight";
