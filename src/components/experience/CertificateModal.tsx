"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VerifiedCredential } from "@/types/portfolio";
import { Button } from "@/components/primitives/Button";
import {
  X,
  ExternalLink,
  ShieldCheck,
  Calendar,
  FileText,
  Sparkles,
  Link2,
  ChevronDown,
  Lock,
  Loader2,
  AlertCircle,
  Award,
} from "lucide-react";
import { SPRING_PRESETS } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export interface CertificateModalProps {
  credential: VerifiedCredential | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  credential,
  isOpen,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [isLoadingDoc, setIsLoadingDoc] = useState(true);
  const [docLoadError, setDocLoadError] = useState(false);
  const [showVerificationCodes, setShowVerificationCodes] = useState(false);

  // Reset states whenever active credential changes
  useEffect(() => {
    if (isOpen) {
      setIsLoadingDoc(true);
      setDocLoadError(false);
      setShowVerificationCodes(false);
    }
  }, [isOpen, credential?.id]);

  // Body scroll locking and Escape key handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Shift initial focus to close button for screen readers & keyboard navigation
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [isOpen, onClose]);

  if (!credential) return null;

  const isFeatured = Boolean(credential.featured || credential.isPriority);
  const hasVerificationCodes = Boolean(
    credential.enrolmentCode || credential.userVerificationCode
  );
  const competencies = credential.skills || credential.skillsVerified || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="credential-modal-portal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 overflow-y-auto"
        >
          {/* Obsidian Glass Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070709]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Centered Floating Credential Preview Window */}
          <motion.div
            ref={modalRef}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 14 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.96, y: 10 }
            }
            transition={SPRING_PRESETS.responsive}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative z-10 w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] md:max-h-[85vh] flex flex-col rounded-[26px] overflow-hidden",
              "glass-03 bg-[#0D0D14]/98 border border-white/[0.16] shadow-2xl",
              isFeatured && "border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]"
            )}
          >
            {/* Header: Organization Identity, Verified Status & Close */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.08] shrink-0 bg-white/[0.02]">
              <div className="flex flex-wrap items-center gap-2.5 min-w-0 pr-3">
                {/* Verified Status Pill */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.12)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="font-semibold tracking-wider">VERIFIED CREDENTIAL</span>
                </span>

                {/* Organization Label */}
                <span className="font-mono text-xs font-bold text-indigo-300 tracking-wider uppercase truncate">
                  {credential.issuerShort || credential.issuer}
                </span>

                {/* Featured Indicator */}
                {isFeatured && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    FEATURED
                  </span>
                )}
              </div>

              {/* Accessible Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close credential preview"
                className="p-2 rounded-xl text-[#A1A1AA] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-7 space-y-6">
              {/* Document Preview Viewport (Visual Priority) */}
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden bg-[#070709] border border-white/[0.1] shadow-inner flex items-center justify-center">
                {/* PDF In-browser Viewport */}
                {credential.fileUrl && !docLoadError ? (
                  <>
                    {isLoadingDoc && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 bg-[#070709]/90 backdrop-blur-sm">
                        <Loader2 className="w-7 h-7 text-indigo-400 animate-spin" />
                        <span className="text-xs font-mono text-[#A1A1AA]">
                          Loading authenticated credential document...
                        </span>
                      </div>
                    )}

                    <iframe
                      src={`${credential.fileUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                      title={`${credential.title} Certificate Document`}
                      onLoad={() => setIsLoadingDoc(false)}
                      onError={() => {
                        setIsLoadingDoc(false);
                        setDocLoadError(true);
                      }}
                      className="w-full h-full rounded-2xl bg-[#1A1A24] border-0"
                    />

                    {/* Quick Document External Link Overlay */}
                    <div className="absolute top-3 right-3 z-20">
                      <a
                        href={credential.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-[#0D0D14]/90 hover:bg-[#181824] text-indigo-300 hover:text-white border border-white/[0.12] transition-colors shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                        aria-label="Open certificate PDF in a new browser tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="hidden sm:inline">Open in New Tab</span>
                      </a>
                    </div>
                  </>
                ) : (
                  /* Fallback State */
                  <div className="p-6 text-center space-y-3 max-w-md">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto text-indigo-400">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#F5F5F7]">
                        Document Preview Unavailable
                      </h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        In-browser preview is restricted or unavailable on this device. You can open the authentic document directly.
                      </p>
                    </div>
                    {credential.fileUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(credential.fileUrl, "_blank", "noopener,noreferrer")}
                        rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                        className="mx-auto"
                      >
                        Open Certificate Document
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Credential Metadata Card */}
              <div className="space-y-4 pt-1">
                {/* Title & Metadata Timeline */}
                <div className="space-y-2">
                  <h3
                    id="certificate-modal-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#F5F5F7] leading-snug"
                  >
                    {credential.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-[#A1A1AA]">
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{credential.type}</span>
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>
                        {credential.period
                          ? `${credential.period} (Issued ${credential.date || credential.issueDate})`
                          : credential.completionDate
                          ? `Completed ${credential.completionDate} · Issued ${credential.issueDate}`
                          : credential.date || credential.issueDate}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Related Experience Visual Link (SmartBridge & SmartInternz) */}
                {credential.relatedExperienceId && (
                  <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/25 flex items-center gap-2.5 text-xs font-mono text-indigo-200">
                    <Link2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                        RELATED EXPERIENCE TIMELINE
                      </span>
                      <span className="font-semibold text-indigo-300">
                        {credential.issuer} · {credential.relatedExperienceRole || "Full Stack Developer Intern"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Verified Competencies */}
                {competencies.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider font-semibold">
                      DOCUMENTED COMPETENCIES & TOPICS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {competencies.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#E4E4E7]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credential ID Monospace Badge */}
                {credential.credentialId && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.07] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-[#71717A] uppercase tracking-wider block">
                        AUTHENTIC CREDENTIAL IDENTIFIER
                      </span>
                      <span className="text-[#F5F5F7] font-semibold tracking-wide break-all">
                        {credential.credentialId}
                      </span>
                    </div>
                  </div>
                )}

                {/* Forage / JPMorgan Verification Codes Disclosure */}
                {hasVerificationCodes && (
                  <div className="rounded-xl border border-white/[0.07] overflow-hidden bg-white/[0.02]">
                    <button
                      onClick={() => setShowVerificationCodes(!showVerificationCodes)}
                      aria-expanded={showVerificationCodes}
                      className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Source Verification Codes</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          showVerificationCodes && "rotate-180"
                        )}
                      />
                    </button>

                    {showVerificationCodes && (
                      <div className="px-4 pb-3.5 pt-1 space-y-2 border-t border-white/[0.05] text-xs font-mono">
                        {credential.enrolmentCode && (
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <span className="text-[#71717A]">Enrolment Code:</span>
                            <span className="text-indigo-300 font-semibold">{credential.enrolmentCode}</span>
                          </div>
                        )}
                        {credential.userVerificationCode && (
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <span className="text-[#71717A]">User Verification Code:</span>
                            <span className="text-indigo-300 font-semibold">{credential.userVerificationCode}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Actions: Source Verification / Document View & Close */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-white/[0.08] shrink-0 bg-white/[0.02]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717A] hidden sm:flex">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Authentic certificate verified from institutional records</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                {/* Authentic External Verification Link if present (Infosys) */}
                {credential.verificationUrl ? (
                  <Button
                    variant="primary"
                    size="sm"
                    isMagnetic
                    onClick={() => window.open(credential.verificationUrl, "_blank", "noopener,noreferrer")}
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    aria-label={`Verify credential on ${credential.verificationUrl}`}
                  >
                    Verify Credential
                  </Button>
                ) : credential.fileUrl ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    isMagnetic
                    onClick={() => window.open(credential.fileUrl, "_blank", "noopener,noreferrer")}
                    rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
                    aria-label={`Open certificate document for ${credential.title}`}
                  >
                    Open Document
                  </Button>
                ) : null}

                {/* Done / Dismiss Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  aria-label="Done and close preview"
                >
                  Done
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
