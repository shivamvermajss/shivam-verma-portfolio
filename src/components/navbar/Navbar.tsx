"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { NavBrand } from "./NavBrand";
import { NavLinks } from "./NavLinks";
import { LiveStatusPill } from "./LiveStatusPill";
import { MobileNavToggle } from "./MobileNavToggle";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { Button } from "@/components/primitives/Button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { SPRING_PRESETS } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { navigationItems, portfolioData } from "@/data/portfolioData";
import { NavItem, AvailabilityStatus } from "@/types/portfolio";
import { FileText } from "lucide-react";

export interface NavbarProps {
  brandName?: string;
  brandDescriptor?: string;
  availabilityText?: string | AvailabilityStatus;
  items?: NavItem[];
  resumeUrl?: string;
  onResumeClick?: () => void;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = portfolioData.personal.name || "SHIVAM",
  brandDescriptor = portfolioData.personal.title || "FULL STACK DEVELOPER",
  availabilityText = portfolioData.personal.availability || "Available for Work",
  items = navigationItems,
  resumeUrl = portfolioData.personal.resumeUrl || portfolioData.resume?.documentUrl || "/resume/Shivam_resume.pdf",
  onResumeClick,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const sectionIds = items.map((item) => item.id);
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds, {
    offset: 90,
  });
  const { isScrolled } = useScrollDirection({ threshold: 20 });
  const prefersReducedMotion = useReducedMotion();

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  const handleResume = (e?: React.MouseEvent) => {
    if (onResumeClick) {
      if (e) e.preventDefault();
      onResumeClick();
    } else if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    } else {
      scrollToSection("contact");
    }
  };

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#09090b] via-[#09090b]/95 to-transparent pt-4 pb-6 pointer-events-none"
      >
        <motion.nav
          role="navigation"
          aria-label="Main Navigation"
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING_PRESETS.smooth}
          className={cn(
            "mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 pointer-events-auto",
            className
          )}
        >
          {/* Floating Pill Outer Glass Shell */}
          <div
            className={cn(
              "relative flex items-center justify-between px-3 py-1.5 md:px-3.5 md:py-2 rounded-full transition-all duration-300",
              "bg-[#0a0a0c]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.14)]",
              isScrolled && "bg-[#0a0a0c]/98 border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.95)]"
            )}
          >
            {/* Left Zone: Brand / Monogram */}
            <div className="flex items-center gap-3 min-w-0 shrink">
              <NavBrand
                name={brandName}
                descriptor={brandDescriptor}
                onClick={() => scrollToSection(items[0]?.id || "about")}
              />
            </div>

            {/* Middle Zone: Desktop Navigation Links (Visible on >= 1024px) */}
            <div className="hidden lg:flex items-center">
              <NavLinks
                items={items}
                activeId={activeSection}
                onSelect={scrollToSection}
              />
            </div>

            {/* Right Zone: Live Status & Resume CTA (Desktop) + Mobile Toggle */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Live Status Pill (Hidden on mobile/tablet, full on desktop >= 1024px) */}
              <div className="hidden lg:block">
                <LiveStatusPill
                  statusText={availabilityText}
                  onClick={handleContactClick}
                />
              </div>

              {/* Resume Action Button (Desktop only >= 1024px) */}
              <div className="hidden lg:block">
                <Button
                  variant="primary"
                  size="sm"
                  isMagnetic
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<FileText className="w-3.5 h-3.5 opacity-90" />}
                  onClick={handleResume}
                  aria-label="View Resume (PDF in new tab)"
                  className="rounded-full px-3.5 h-8 text-[12px] font-semibold bg-gradient-to-b from-indigo-500/90 to-indigo-600/90 hover:from-indigo-400 hover:to-indigo-500 text-white border border-white/25 shadow-[0_4px_16px_rgba(99,102,241,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-200"
                >
                  Resume
                </Button>
              </div>

              {/* Mobile / Tablet Menu Toggle Button (Visible on < 1024px) */}
              <div className="lg:hidden">
                <MobileNavToggle
                  ref={toggleButtonRef}
                  isOpen={isMobileMenuOpen}
                  onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={items}
        activeId={activeSection}
        onSelect={scrollToSection}
        statusText={availabilityText}
        resumeUrl={resumeUrl}
        onResumeClick={handleResume}
        triggerRef={toggleButtonRef}
      />
    </>
  );
};
