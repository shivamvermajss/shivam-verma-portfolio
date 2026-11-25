"use client";

import React, { useRef, useCallback } from "react";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export interface BentoTiltWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cardId?: string;
  isActive?: boolean;
  isConnected?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
  maxTiltDeg?: number;
  spotlightColor?: string;
  spotlightSize?: number;
  className?: string;
}

/**
 * High-performance tactile 3D tilt & spotlight container for Bento cards.
 * Uses direct CSS variables (--tilt-rx, --tilt-ry, --tilt-tz, --spotlight-x, --spotlight-y, --spotlight-opacity)
 * to manipulate transforms and lighting with zero React re-render overhead during mouse movements.
 */
export const BentoTiltWrapper = React.forwardRef<HTMLDivElement, BentoTiltWrapperProps>(
  (
    {
      children,
      cardId,
      isActive = false,
      isConnected = false,
      onHoverChange,
      maxTiltDeg = 2.2,
      spotlightColor = "rgba(99, 102, 241, 0.16)",
      spotlightSize = 340,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const containerRef = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;
    const hasPointer = useHasPointer();
    const prefersReducedMotion = useReducedMotion();

    const isInteractive = hasPointer && !prefersReducedMotion;

    const handlePointerMove = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        if (!containerRef.current || !isInteractive) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate normalized offsets from center [-0.5, 0.5]
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const normX = (x - centerX) / centerX;
        const normY = (y - centerY) / centerY;

        // Calculate ultra-subtle tilt angles
        const rotateX = -normY * maxTiltDeg;
        const rotateY = normX * maxTiltDeg;

        containerRef.current.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
        containerRef.current.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
        containerRef.current.style.setProperty("--tilt-tz", "4px");
        containerRef.current.style.setProperty("--spotlight-x", `${x}px`);
        containerRef.current.style.setProperty("--spotlight-y", `${y}px`);
        containerRef.current.style.setProperty("--spotlight-opacity", "0.85");
      },
      [containerRef, isInteractive, maxTiltDeg]
    );

    const handlePointerEnter = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        onHoverChange?.(true);
        if (!containerRef.current || !isInteractive) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        containerRef.current.style.setProperty("--spotlight-x", `${x}px`);
        containerRef.current.style.setProperty("--spotlight-y", `${y}px`);
        containerRef.current.style.setProperty("--spotlight-opacity", "0.85");
      },
      [containerRef, isInteractive, onHoverChange]
    );

    const handlePointerLeave = useCallback(() => {
      onHoverChange?.(false);
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--tilt-rx", "0deg");
      containerRef.current.style.setProperty("--tilt-ry", "0deg");
      containerRef.current.style.setProperty("--tilt-tz", "0px");
      containerRef.current.style.setProperty("--spotlight-opacity", "0");
    }, [containerRef, onHoverChange]);

    const handleFocus = useCallback(() => {
      onHoverChange?.(true);
    }, [onHoverChange]);

    const handleBlur = useCallback(() => {
      onHoverChange?.(false);
    }, [onHoverChange]);

    return (
      <div
        ref={containerRef}
        tabIndex={0}
        role="region"
        aria-label={`Bento card ${cardId || ""}`}
        onPointerMove={isInteractive ? handlePointerMove : undefined}
        onPointerEnter={isInteractive ? handlePointerEnter : undefined}
        onPointerLeave={isInteractive ? handlePointerLeave : undefined}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={
          {
            perspective: isInteractive ? "1000px" : "none",
            transformStyle: isInteractive ? "preserve-3d" : "flat",
            "--tilt-rx": "0deg",
            "--tilt-ry": "0deg",
            "--tilt-tz": "0px",
            "--spotlight-size": `${spotlightSize}px`,
            "--spotlight-color": spotlightColor,
            "--spotlight-opacity": "0",
            ...props.style,
          } as React.CSSProperties
        }
        className={cn(
          "group relative rounded-[24px] outline-none transition-all duration-300 ease-out cursor-default select-none",
          "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]",
          isActive && "z-20 -translate-y-1 shadow-[0_0_28px_rgba(99,102,241,0.18)]",
          isConnected && !isActive && "border-indigo-500/35 shadow-[0_0_18px_rgba(99,102,241,0.09)]",
          className
        )}
        {...props}
      >
        {/* Tactile Surface Layer with 3D Transform */}
        <div
          className={cn(
            "relative w-full h-full rounded-[24px] overflow-hidden transition-all duration-200 ease-out",
            isActive
              ? "border border-indigo-500/50 bg-[#0E0E18]/95"
              : isConnected
              ? "border border-indigo-500/30 bg-[#0D0D16]/92"
              : "border border-white/[0.1] bg-[#0C0C12]/90 hover:border-white/[0.2]"
          )}
          style={{
            transform: isInteractive
              ? "rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg)) translateZ(var(--tilt-tz, 0px))"
              : "none",
            transition: isInteractive ? "transform 0.18s cubic-bezier(0.25, 1, 0.5, 1)" : undefined,
          }}
        >
          {/* Subtle cursor-following radial spotlight overlay */}
          {isInteractive && (
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-200 ease-out z-10"
              style={{
                opacity: "var(--spotlight-opacity, 0)",
                background: `radial-gradient(var(--spotlight-size, ${spotlightSize}px) circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), var(--spotlight-color, ${spotlightColor}), transparent 70%)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Connection specular highlight rim */}
          {isConnected && !isActive && (
            <div
              className="pointer-events-none absolute inset-0 rounded-[24px] border border-indigo-500/25 animate-pulse"
              aria-hidden="true"
            />
          )}

          {children}
        </div>
      </div>
    );
  }
);

BentoTiltWrapper.displayName = "BentoTiltWrapper";
