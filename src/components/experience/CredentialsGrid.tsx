"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { credentialsData, CREDENTIAL_FILTERS } from "@/data/credentials";
import { VerifiedCredential, CredentialFilterId } from "@/types/portfolio";
import { CredentialCard } from "./CredentialCard";
import { CertificateModal } from "./CertificateModal";
import { Reveal } from "@/components/primitives/Reveal";
import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";
import { ShieldCheck, Layers, RotateCcw } from "lucide-react";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export interface CredentialsGridProps {
  className?: string;
  onSelectCredential?: (credential: VerifiedCredential) => void;
}

export const CredentialsGrid: React.FC<CredentialsGridProps> = ({
  className,
  onSelectCredential,
}) => {
  const [activeFilter, setActiveFilter] = useState<CredentialFilterId>("all");
  const [selectedCredential, setSelectedCredential] = useState<VerifiedCredential | null>(null);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Filter credentials based on activeFilter
  const filteredCredentials = useMemo(() => {
    if (activeFilter === "all") return credentialsData;
    return credentialsData.filter((cred) => {
      if (cred.domain === activeFilter) return true;
      if (activeFilter === "ai") {
        return cred.domain === "ai" || cred.skills.some((s) => /ai\b|cloud/i.test(s));
      }
      if (activeFilter === "full-stack") {
        return cred.domain === "full-stack" || cred.skills.some((s) => /full stack|mern/i.test(s));
      }
      if (activeFilter === "software-engineering") {
        return cred.domain === "software-engineering" || cred.skills.some((s) => /software engineering|job simulation/i.test(s));
      }
      if (activeFilter === "security") {
        return cred.domain === "security" || cred.skills.some((s) => /security|ethical hacking/i.test(s));
      }
      return false;
    });
  }, [activeFilter]);

  const handleOpenCredential = (cred: VerifiedCredential, element?: HTMLElement) => {
    setSelectedCredential(cred);
    if (element) {
      setTriggerEl(element);
    }
    if (onSelectCredential) {
      onSelectCredential(cred);
    }
  };

  const handleCloseCredential = () => {
    setSelectedCredential(null);
    if (triggerEl) {
      setTimeout(() => {
        triggerEl.focus();
      }, 50);
    }
  };

  return (
    <div className={cn("space-y-6 sm:space-y-8", className)}>
      {/* Editorial Subsection Header */}
      <Reveal variant="fade-up">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="accent" size="sm" dot>
                VERIFIED CREDENTIALS
              </Badge>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F7]">
              Verified Credentials{" "}
              <span className="gradient-accent-text font-extrabold">& Certifications</span>
            </h3>

            <p className="text-body text-sm sm:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
              Certifications, simulations and professional learning milestones backed by authoritative documentation.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-indigo-300 shrink-0 self-start sm:self-auto">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>04 / CREDENTIALS · VERIFIED RECORDS</span>
          </div>
        </div>
      </Reveal>

      {/* Discovery & Filtering Bar */}
      <Reveal variant="fade-up" delay={0.05}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-2 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
          {/* Filter Chips Row */}
          <div
            role="tablist"
            aria-label="Filter credentials by domain"
            className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar scroll-smooth"
          >
            {CREDENTIAL_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              const isAll = filter.id === "all";

              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium whitespace-nowrap select-none transition-all duration-200 cursor-pointer outline-none",
                    "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709]",
                    "active:scale-[0.97]",
                    isActive
                      ? "bg-indigo-500/20 text-white border border-indigo-500/40 shadow-accent font-semibold"
                      : "glass-01 text-[#A1A1AA] border-white/[0.07] hover:border-white/[0.18] hover:text-[#F5F5F7] hover:bg-white/[0.05]"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    {filter.label}
                    {isAll && (
                      <span
                        className={cn(
                          "px-1.5 py-0.2 rounded-md text-[10px] font-mono",
                          isActive
                            ? "bg-indigo-500/30 text-indigo-200"
                            : "bg-white/[0.06] text-[#71717A]"
                        )}
                      >
                        {credentialsData.length}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Contextual Result Counter */}
          <div className="flex items-center gap-2 px-2 text-xs font-mono text-[#71717A] shrink-0 self-end sm:self-auto">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              Showing {filteredCredentials.length}{" "}
              {filteredCredentials.length === 1 ? "credential" : "credentials"}
            </span>
          </div>
        </div>
      </Reveal>

      {/* 2-Column Responsive Grid on Desktop / Tablet, 1-Column on Mobile */}
      {filteredCredentials.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredCredentials.map((cred) => (
              <motion.div
                key={cred.id}
                layout
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.98, y: 10 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.98, y: -8 }
                }
                transition={{
                  duration: 0.24,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="h-full"
              >
                <CredentialCard
                  credential={cred}
                  onView={(selected, trigger) => handleOpenCredential(selected, trigger)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="p-8 sm:p-12 rounded-[24px] glass-02 border border-white/[0.08] text-center space-y-4 max-w-md mx-auto"
        >
          <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mx-auto text-indigo-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h4 className="text-base sm:text-lg font-bold text-[#F5F5F7] tracking-tight">
              NO CREDENTIALS FOUND
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              No verified credentials match the selected category filter.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            isMagnetic
            onClick={() => setActiveFilter("all")}
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            className="mx-auto"
          >
            View All Credentials
          </Button>
        </motion.div>
      )}

      {/* Premium Credential Preview Modal */}
      <CertificateModal
        credential={selectedCredential}
        isOpen={Boolean(selectedCredential)}
        onClose={handleCloseCredential}
      />
    </div>
  );
};
