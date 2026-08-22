"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavItem, AvailabilityStatus } from "@/types/portfolio";
import { LiveStatusPill } from "./LiveStatusPill";
import { Button } from "@/components/primitives/Button";
import { Divider } from "@/components/primitives/Divider";
import { FileText } from "lucide-react";
import { SPRING_PRESETS } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeId: string;
  onSelect: (id: string) => void;
  statusText?: string | AvailabilityStatus;
  resumeUrl?: string;
  onResumeClick?: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  items,
  activeId,
  onSelect,
  statusText = "Available for Work",
  resumeUrl,
  onResumeClick,
  triggerRef,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Handle Escape key, body scroll locking, and focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        // Return focus to menu toggle button
        triggerRef?.current?.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Shift focus into the drawer for screen readers and keyboard users
    const focusTimer = setTimeout(() => {
      const firstInteractive = drawerRef.current?.querySelector<HTMLElement>(
        "a, button, [tabindex]:not([tabindex='-1'])"
      );
      firstInteractive?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, onClose, triggerRef]);

  const handleItemClick = (id: string) => {
    onSelect(id);
    onClose();
    triggerRef?.current?.focus();
  };

  const handleResume = () => {
    if (onResumeClick) {
      onResumeClick();
    } else if (resumeUrl) {
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    } else {
      onSelect("contact");
    }
    onClose();
    triggerRef?.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Subtle Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => {
              onClose();
              triggerRef?.current?.focus();
            }}
            className="absolute inset-0 bg-[#070709]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Frosted Glass Drawer Panel */}
          <motion.div
            ref={drawerRef}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -16, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -12, scale: 0.98 }
            }
            transition={SPRING_PRESETS.responsive}
            className="absolute top-20 left-4 right-4 max-w-lg mx-auto rounded-[24px] glass-03 p-5 sm:p-6 shadow-elevated border border-white/[0.12] overflow-hidden"
          >
            {/* Header / Status section */}
            <div className="flex items-center justify-between pb-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
                Navigation
              </span>
              <LiveStatusPill
                statusText={statusText}
                onClick={() => handleItemClick("contact")}
              />
            </div>

            <Divider className="my-2 opacity-40" />

            {/* Navigation Link List */}
            <nav className="py-2 space-y-1" aria-label="Mobile Navigation">
              {items.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <motion.div
                    key={item.id}
                    initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: prefersReducedMotion ? 0 : 0.03 * index,
                      ...SPRING_PRESETS.responsive,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item.id);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-base font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                        isActive
                          ? "bg-indigo-500/15 border border-indigo-500/30 text-white font-semibold shadow-accent"
                          : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_#818CF8]"
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  </motion.div>
                );
              })}
            </nav>

            <Divider className="my-3 opacity-40" />

            {/* Resume Action CTA */}
            <div className="pt-1">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center min-h-[44px]"
                leftIcon={<FileText className="w-4 h-4" />}
                onClick={handleResume}
                aria-label="View Resume"
              >
                Resume
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
