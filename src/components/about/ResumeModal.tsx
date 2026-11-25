"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ResumeDocumentViewer } from "./ResumeDocumentViewer";
import { portfolioData } from "@/data/portfolioData";
import { X, FileText, ExternalLink, Download } from "lucide-react";
import { SPRING_PRESETS } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerEl?: HTMLElement | null;
  className?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  triggerEl,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const resume = portfolioData.resume || {
    label: "RESUME",
    title: "Shivam Verma — Resume",
    documentUrl: "/resume/Shivam_resume.pdf",
    filename: "Shivam_resume.pdf",
  };

  // Human-readable canonical download filename
  const downloadFilename = "Shivam-Verma-Resume.pdf";

  // Body scroll lock, Escape key, focus management — preserved from 7E-1
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

    // Focus close button on open for keyboard / screen-reader users
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(focusTimer);

      // Restore focus to the element that opened the modal
      if (triggerEl) {
        setTimeout(() => {
          triggerEl.focus();
        }, 60);
      }
    };
  }, [isOpen, onClose, triggerEl]);

  // Shared action-link styles
  const actionLinkBase = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-mono font-semibold text-xs",
    "min-h-[40px] sm:min-h-[38px] px-4 py-2.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#0D0D14]",
    "transition-all duration-150 select-none",
    prefersReducedMotion ? "transition-none" : ""
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="resume-modal-portal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          // Full-screen fixed container; itself scrollable if modal is taller than viewport
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 md:p-6 lg:p-8 overflow-y-auto"
        >
          {/* ── Deep Obsidian Backdrop ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-[#05050A]/88 backdrop-blur-[10px]"
            aria-hidden="true"
          />

          {/* ── Floating Resume Document Window ─────────────────────── */}
          <motion.div
            ref={modalRef}
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.985, y: 18 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.985, y: 10 }
            }
            transition={SPRING_PRESETS.responsive}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              // Width: comfortable desktop, full-width mobile
              "relative z-10 w-full sm:max-w-[1080px]",
              // Height: full-height on mobile (slide-up sheet), capped on desktop
              "h-[96dvh] sm:h-auto sm:max-h-[90vh]",
              // Flex column layout: header → body → footer
              "flex flex-col",
              // Glass surface — consistent with CertificateModal
              "glass-03 bg-[#0C0C14]/98 border border-white/[0.14] shadow-2xl",
              // Sharp corners on mobile (sheet), fully rounded on desktop
              "rounded-t-[28px] rounded-b-none sm:rounded-[28px]",
              "overflow-hidden",
              className
            )}
          >

            {/* ══════════ HEADER ═══════════════════════════════════════ */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/[0.08] bg-white/[0.02] shrink-0">
              {/* Left: Document identity */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Subtle document icon container */}
                <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  {/* Eyebrow */}
                  <p className="text-[10px] font-mono font-semibold text-indigo-300 uppercase tracking-widest leading-none mb-0.5">
                    {resume.label}
                  </p>
                  {/* Accessible title */}
                  <h3
                    id="resume-modal-title"
                    className="text-xs sm:text-[13px] font-mono font-bold text-[#F5F5F7] tracking-wide truncate leading-snug"
                  >
                    {resume.title}
                  </h3>
                </div>
              </div>

              {/* Right: Close button — receives focus on modal open */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close resume"
                className={cn(
                  "w-9 h-9 rounded-full shrink-0",
                  "flex items-center justify-center",
                  "text-neutral-300 hover:text-white",
                  "bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.14] border-t-white/[0.28]",
                  "backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                  "active:scale-[0.95]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-all duration-200 cursor-pointer",
                  prefersReducedMotion && "transition-none"
                )}
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* ══════════ BODY: PDF Document Viewport ══════════════════ */}
            {/* flex-1 allows document to take remaining space */}
            <div className="flex-1 overflow-hidden p-3.5 sm:p-4 md:p-5">
              {/*
               * Dark document frame creates visible separation between
               * the glass modal surface and the PDF canvas.
               * Full height ensures PDF fills the available space.
               */}
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#060609] border border-white/[0.08] ring-1 ring-inset ring-white/[0.04] shadow-inner">
                <ResumeDocumentViewer
                  documentUrl={resume.documentUrl}
                  title={resume.title}
                />
              </div>
            </div>

            {/* ══════════ FOOTER: Document metadata + actions ══════════ */}
            <div className="shrink-0 border-t border-white/[0.08] bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-6 py-3.5 sm:py-3">

                {/* Left: Compact document metadata */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.10] flex items-center justify-center shrink-0">
                    <FileText className="w-3 h-3 text-indigo-400/80" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9.5px] font-mono text-[#71717A] uppercase tracking-widest leading-none">
                      PDF DOCUMENT
                    </span>
                    <span className="block text-[11px] font-mono text-[#A1A1AA] truncate leading-snug mt-0.5">
                      {downloadFilename}
                    </span>
                  </div>
                </div>

                {/* Right: Action buttons — stacked on mobile, inline on sm+ */}
                <div className="flex flex-col xs:flex-row sm:flex-row items-stretch xs:items-center sm:items-center gap-2.5 w-full sm:w-auto">

                  {/* Secondary: Open in New Tab */}
                  <a
                    href={resume.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in a new browser tab"
                    className={cn(
                      actionLinkBase,
                      "rounded-full px-4.5 text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.14] border-t-white/[0.28]",
                      "backdrop-blur-xl backdrop-saturate-[180%] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)]",
                      "active:scale-[0.97]",
                      // On mobile, stretch full width; sm+ auto-width
                      "w-full xs:w-auto sm:w-auto"
                    )}
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>OPEN IN NEW TAB</span>
                  </a>

                  {/* Primary: Download PDF */}
                  <a
                    href={resume.documentUrl}
                    download={downloadFilename}
                    aria-label={`Download ${downloadFilename}`}
                    className={cn(
                      actionLinkBase,
                      "rounded-full px-5 text-white",
                      "bg-gradient-to-b from-indigo-500/85 via-indigo-600/90 to-purple-600/90",
                      "border border-white/25 border-t-white/40",
                      "shadow-[0_4px_18px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.45)]",
                      "backdrop-blur-xl backdrop-saturate-150 hover:brightness-110",
                      "active:scale-[0.97]",
                      "w-full xs:w-auto sm:w-auto"
                    )}
                  >
                    <Download className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>DOWNLOAD PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
