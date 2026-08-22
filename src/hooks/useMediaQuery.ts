"use client";

import { useEffect, useState } from "react";

/**
 * Hook to match media queries efficiently
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

/**
 * Hook to detect mobile viewports (<768px)
 */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/**
 * Hook to detect reduced motion preference
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Hook to detect pointer availability (fine cursor vs touch)
 */
export function useHasPointer(): boolean {
  return useMediaQuery("(pointer: fine)");
}
