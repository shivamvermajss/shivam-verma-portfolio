"use client";

import { useEffect, useState, useRef } from "react";

export interface ScrollDirectionOptions {
  threshold?: number;
  hideOffset?: number;
}

export function useScrollDirection(options: ScrollDirectionOptions = {}) {
  const { threshold = 15, hideOffset = 100 } = options;
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const prevScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);

      const diff = currentScrollY - prevScrollY.current;

      if (Math.abs(diff) >= threshold) {
        if (diff > 0 && currentScrollY > hideOffset) {
          // Scrolling down past hide threshold
          setScrollDirection("down");
          setIsVisible(false);
        } else if (diff < 0) {
          // Scrolling up
          setScrollDirection("up");
          setIsVisible(true);
        }
      }

      if (currentScrollY <= hideOffset) {
        setIsVisible(true);
      }

      prevScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, hideOffset]);

  return { scrollY, isScrolled, scrollDirection, isVisible };
}
