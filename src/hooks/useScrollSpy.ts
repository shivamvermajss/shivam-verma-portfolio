"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export interface ScrollSpyOptions {
  offset?: number;
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSpy(
  sectionIds: string[],
  options: ScrollSpyOptions = {}
) {
  const { offset = 100, rootMargin = "-20% 0px -70% 0px" } = options;
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll handler that compensates for floating navbar height
  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (!element) return;

      isProgrammaticScroll.current = true;
      setActiveSection(id);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      const navHeight = offset;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      // Unlock manual scroll spy after scroll animation finishes (~800ms)
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 850);
    },
    [offset]
  );

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    // IntersectionObserver implementation for smooth, battery-friendly tracking
    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isProgrammaticScroll.current) return;

      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const bestEntry = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        );
        setActiveSection(bestEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin,
      threshold: [0.1, 0.3, 0.5, 0.8],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // Fallback scroll listener for top/bottom edge cases
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // If scrolled to top
      if (scrollY < 50 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
        return;
      }

      // If scrolled to very bottom, activate the last section
      if (scrollY + clientHeight >= scrollHeight - 50 && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [sectionIds, rootMargin]);

  return { activeSection, scrollToSection, setActiveSection };
}
