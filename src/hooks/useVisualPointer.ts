"use client";

import { useRef, useEffect, useCallback } from "react";
import { useHasPointer, useReducedMotion } from "@/hooks/useMediaQuery";

export interface VisualPointerOptions {
  maxRotationDeg?: number;
  maxTranslationPx?: number;
  disabled?: boolean;
}

export function useVisualPointer({
  maxRotationDeg = 5.0,
  maxTranslationPx = 7.5,
  disabled = false,
}: VisualPointerOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasFinePointer = useHasPointer();
  const prefersReducedMotion = useReducedMotion();
  const isInteractingRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // Target coordinates (normalized -1 to 1) and raw mouse client position
  const targetRef = useRef({ x: 0, y: 0, clientX: 0, clientY: 0 });
  // Interpolated coordinates for LERP smoothing
  const currentRef = useRef({ x: 0, y: 0, clientX: 0, clientY: 0 });

  const isEnabled = hasFinePointer && !prefersReducedMotion && !disabled;

  const updateCSSProperties = useCallback(
    (nx: number, ny: number, clientX: number, clientY: number, active: boolean) => {
      const el = containerRef.current;
      if (!el) return;

      const rotY = (nx * maxRotationDeg).toFixed(3);
      const rotX = (-ny * maxRotationDeg).toFixed(3);
      const transX = (nx * maxTranslationPx).toFixed(2);
      const transY = (ny * maxTranslationPx).toFixed(2);

      // Differential spatial depth parallax offsets
      const coreX = (nx * (maxTranslationPx * 1.30)).toFixed(2);
      const coreY = (ny * (maxTranslationPx * 1.30)).toFixed(2);
      const nodesX = (nx * (maxTranslationPx * 1.00)).toFixed(2);
      const nodesY = (ny * (maxTranslationPx * 1.00)).toFixed(2);
      const cardsX = (nx * (maxTranslationPx * 0.70)).toFixed(2);
      const cardsY = (ny * (maxTranslationPx * 0.70)).toFixed(2);

      const rect = el.getBoundingClientRect();
      const spotX = `${clientX - rect.left}px`;
      const spotY = `${clientY - rect.top}px`;

      el.style.setProperty("--stage-rx", `${rotX}deg`);
      el.style.setProperty("--stage-ry", `${rotY}deg`);
      el.style.setProperty("--stage-tx", `${transX}px`);
      el.style.setProperty("--stage-ty", `${transY}px`);
      el.style.setProperty("--stage-core-tx", `${coreX}px`);
      el.style.setProperty("--stage-core-ty", `${coreY}px`);
      el.style.setProperty("--stage-nodes-tx", `${nodesX}px`);
      el.style.setProperty("--stage-nodes-ty", `${nodesY}px`);
      el.style.setProperty("--stage-cards-tx", `${cardsX}px`);
      el.style.setProperty("--stage-cards-ty", `${cardsY}px`);
      el.style.setProperty("--stage-spotlight-x", spotX);
      el.style.setProperty("--stage-spotlight-y", spotY);
      el.style.setProperty("--stage-spotlight-opacity", active ? "1" : "0");
      el.style.setProperty("--stage-scale", active ? "1.012" : "1.000");
    },
    [maxRotationDeg, maxTranslationPx]
  );

  const animate = useCallback(() => {
    const target = targetRef.current;
    const current = currentRef.current;

    // Smooth linear interpolation factor (0.12 = responsive & silky)
    const lerpFactor = 0.12;

    current.x += (target.x - current.x) * lerpFactor;
    current.y += (target.y - current.y) * lerpFactor;
    current.clientX += (target.clientX - current.clientX) * lerpFactor;
    current.clientY += (target.clientY - current.clientY) * lerpFactor;

    const isNearRest =
      !isInteractingRef.current &&
      Math.abs(current.x) < 0.001 &&
      Math.abs(current.y) < 0.001;

    if (isNearRest) {
      current.x = 0;
      current.y = 0;
      updateCSSProperties(0, 0, current.clientX, current.clientY, false);
      rafIdRef.current = null;
      return;
    }

    updateCSSProperties(
      current.x,
      current.y,
      current.clientX,
      current.clientY,
      isInteractingRef.current
    );

    rafIdRef.current = requestAnimationFrame(animate);
  }, [updateCSSProperties]);

  const startLoop = useCallback(() => {
    if (!rafIdRef.current) {
      rafIdRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isEnabled) return;
      isInteractingRef.current = true;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      const boundedX = Math.max(-1, Math.min(1, x));
      const boundedY = Math.max(-1, Math.min(1, y));

      targetRef.current = {
        x: boundedX,
        y: boundedY,
        clientX: e.clientX,
        clientY: e.clientY,
      };

      startLoop();
    },
    [isEnabled, startLoop]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isEnabled || !isInteractingRef.current) return;

      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      // Bound strictly between -1 and 1
      const boundedX = Math.max(-1, Math.min(1, x));
      const boundedY = Math.max(-1, Math.min(1, y));

      targetRef.current = {
        x: boundedX,
        y: boundedY,
        clientX: e.clientX,
        clientY: e.clientY,
      };

      startLoop();
    },
    [isEnabled, startLoop]
  );

  const handlePointerLeave = useCallback(() => {
    if (!isEnabled) return;
    isInteractingRef.current = false;
    targetRef.current = {
      x: 0,
      y: 0,
      clientX: currentRef.current.clientX,
      clientY: currentRef.current.clientY,
    };
    startLoop();
  }, [isEnabled, startLoop]);

  // Clean up RAF loop on unmount or when disabled
  useEffect(() => {
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, []);

  // Reset transforms if disabled dynamically
  useEffect(() => {
    if (!isEnabled) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      currentRef.current = { x: 0, y: 0, clientX: 0, clientY: 0 };
      targetRef.current = { x: 0, y: 0, clientX: 0, clientY: 0 };
      updateCSSProperties(0, 0, 0, 0, false);
    }
  }, [isEnabled, updateCSSProperties]);

  return {
    containerRef,
    isEnabled,
    handlers: {
      onPointerEnter: handlePointerEnter,
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
    },
  };
}

