"use client";

import React, { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { Badge } from "@/components/primitives/Badge";
import { Divider } from "@/components/primitives/Divider";
import { Container } from "@/components/primitives/Container";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  ArrowRight,
  Circle,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Inline SVG icons for GitHub and LinkedIn (no new package needed)
const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const { personal, socials, resume } = portfolioData;

  const githubSocial = socials.find((s) => s.platform.toLowerCase() === "github");
  const linkedinSocial = socials.find((s) => s.platform.toLowerCase() === "linkedin");

  // Availability text from data
  const availabilityLabel =
    typeof personal.availability === "string"
      ? personal.availability
      : personal.availability.label;

  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // Fallback: open mailto if clipboard fails
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full scroll-mt-28 md:scroll-mt-32 overflow-hidden"
    >
      {/* Subtle top atmosphere glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(99, 102, 241, 0.06), transparent 80%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-16 sm:py-20 md:py-24">
        {/* Top divider */}
        <Divider gradient className="mb-12 sm:mb-16" />

        {/* ── SECTION HEADER ────────────────────────────────────────── */}
        <Reveal variant="fade-up">
          <div className="mb-10 sm:mb-12 space-y-3">
            <Badge variant="accent" dot>
              06 / CONTACT & SIGNALS
            </Badge>

            <h2
              id="contact-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-[#F5F5F7]"
            >
              LET&apos;S BUILD{" "}
              <span className="gradient-accent-text">SOMETHING USEFUL.</span>
            </h2>

            <p className="max-w-xl text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Open to full-stack opportunities, collaborative engineering work,
              and meaningful projects where thoughtful systems matter.
            </p>
          </div>
        </Reveal>

        {/* ── MAIN CONTACT GRID ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">

          {/* PRIMARY: Email Card */}
          <Reveal variant="fade-up" delay={0.04} className="md:col-span-7">
            <div
              className={cn(
                "group relative rounded-2xl p-6 sm:p-7 h-full",
                "bg-[#0C0C14]/90 border border-white/[0.1]",
                "hover:border-indigo-500/40 hover:bg-[#0E0E1A]/95",
                "transition-all duration-200 ease-out",
                "shadow-[0_1px_24px_rgba(0,0,0,0.3)]"
              )}
            >
              {/* Card label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
                </div>
                <span className="text-[10.5px] font-mono font-semibold uppercase tracking-widest text-indigo-300/80">
                  PRIMARY CONTACT
                </span>
              </div>

              {/* Email address */}
              <a
                href={`mailto:${personal.email}`}
                aria-label={`Send email to ${personal.email}`}
                className={cn(
                  "block text-lg sm:text-xl font-mono font-bold text-[#F5F5F7] break-all mb-1.5",
                  "hover:text-indigo-200 focus-visible:outline-none focus-visible:text-indigo-200",
                  "transition-colors duration-150"
                )}
              >
                {personal.email}
              </a>

              <p className="text-xs font-mono text-[#71717A] mb-6">
                FULL STACK DEVELOPER · {personal.location.toUpperCase()}
              </p>

              {/* Actions row */}
              <div className="flex flex-wrap gap-2.5">
                {/* Primary: Email me */}
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Compose an email to Shivam Verma"
                  className={cn(
                    "inline-flex items-center gap-2 h-10 px-4 rounded-xl",
                    "text-xs font-mono font-semibold text-white",
                    "bg-indigo-600 border border-indigo-500/80",
                    "hover:bg-indigo-500 hover:border-indigo-400",
                    "active:scale-[0.97]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300",
                    "transition-all duration-150 shadow-[0_0_16px_rgba(99,102,241,0.25)]"
                  )}
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  EMAIL ME
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>

                {/* Secondary: Copy email */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={emailCopied ? "Email address copied" : "Copy email address to clipboard"}
                  className={cn(
                    "inline-flex items-center gap-2 h-10 px-4 rounded-xl",
                    "text-xs font-mono font-semibold",
                    "border transition-all duration-150",
                    "active:scale-[0.97]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                    emailCopied
                      ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/35"
                      : "text-[#A1A1AA] bg-white/[0.04] border-white/[0.1] hover:bg-indigo-500/[0.08] hover:border-indigo-500/35 hover:text-indigo-200"
                  )}
                >
                  {emailCopied ? (
                    <>
                      <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 shrink-0" aria-hidden="true" />
                      COPIED
                    </>
                  ) : (
                    "COPY EMAIL"
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          {/* SECONDARY: Availability + Location signals */}
          <Reveal variant="fade-up" delay={0.08} className="md:col-span-5">
            <div className="flex flex-col gap-4 h-full">

              {/* Availability signal */}
              <div
                className={cn(
                  "flex-1 rounded-2xl p-5",
                  "bg-[#0C0C14]/90 border border-white/[0.08]",
                  "hover:border-white/[0.14] transition-colors duration-200"
                )}
              >
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#71717A] block mb-2.5">
                  AVAILABILITY
                </span>

                <div className="flex items-center gap-2.5 mb-2">
                  {/* Subtle static status indicator */}
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-sm font-mono font-bold text-[#F5F5F7] uppercase tracking-wide">
                    {availabilityLabel.toUpperCase()}
                  </span>
                </div>

                <p className="text-[11px] font-mono text-[#71717A]">
                  FULL-STACK · MERN STACK
                </p>
              </div>

              {/* Location signal */}
              <div
                className={cn(
                  "rounded-2xl p-5",
                  "bg-[#0C0C14]/90 border border-white/[0.08]",
                  "hover:border-white/[0.14] transition-colors duration-200"
                )}
              >
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#71717A] block mb-2.5">
                  LOCATION
                </span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" aria-hidden="true" />
                  <span className="text-sm font-mono font-bold text-[#E4E4E7]">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── PROFESSIONAL LINKS ROW ─────────────────────────────────── */}
        <Reveal variant="fade-up" delay={0.12}>
          <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

            {/* GitHub */}
            {githubSocial && (
              <a
                href={githubSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${githubSocial.label} — opens in new tab`}
                className={cn(
                  "group flex items-center justify-between gap-3 rounded-2xl p-4",
                  "bg-[#0C0C14]/90 border border-white/[0.08]",
                  "hover:border-indigo-500/30 hover:bg-[#0E0E1A]/95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-all duration-150 active:scale-[0.98]"
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-indigo-500/25 transition-colors">
                    <GithubIcon className="w-4 h-4 text-[#A1A1AA] group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest block">
                      GITHUB
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#E4E4E7] truncate block group-hover:text-indigo-200 transition-colors">
                      shivamvermajss
                    </span>
                  </div>
                </div>
                <ExternalLink
                  className="w-3.5 h-3.5 text-[#52525B] group-hover:text-indigo-400 shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </a>
            )}

            {/* LinkedIn */}
            {linkedinSocial && (
              <a
                href={linkedinSocial.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${linkedinSocial.label} — opens in new tab`}
                className={cn(
                  "group flex items-center justify-between gap-3 rounded-2xl p-4",
                  "bg-[#0C0C14]/90 border border-white/[0.08]",
                  "hover:border-indigo-500/30 hover:bg-[#0E0E1A]/95",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "transition-all duration-150 active:scale-[0.98]"
                )}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-indigo-500/25 transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-[#A1A1AA] group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest block">
                      LINKEDIN
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#E4E4E7] truncate block group-hover:text-indigo-200 transition-colors">
                      Shivam Verma
                    </span>
                  </div>
                </div>
                <ExternalLink
                  className="w-3.5 h-3.5 text-[#52525B] group-hover:text-indigo-400 shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </a>
            )}

            {/* Resume */}
            <a
              href={resume?.documentUrl ?? personal.resumeUrl ?? "/resume/Shivam_resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View or download Shivam Verma's resume — opens in new tab"
              className={cn(
                "group flex items-center justify-between gap-3 rounded-2xl p-4",
                "bg-[#0C0C14]/90 border border-white/[0.08]",
                "hover:border-indigo-500/30 hover:bg-[#0E0E1A]/95",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                "transition-all duration-150 active:scale-[0.98]"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:border-indigo-500/35 transition-colors">
                  <FileText className="w-4 h-4 text-indigo-400/80 group-hover:text-indigo-300 transition-colors" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-[#71717A] uppercase tracking-widest block">
                    RESUME
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#E4E4E7] block group-hover:text-indigo-200 transition-colors">
                    View / Download
                  </span>
                </div>
              </div>
              <ExternalLink
                className="w-3.5 h-3.5 text-[#52525B] group-hover:text-indigo-400 shrink-0 transition-colors"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>

        {/* ── FOOTER ATTRIBUTION LINE ────────────────────────────────── */}
        <Reveal variant="fade-up" delay={0.16}>
          <div className="mt-12 sm:mt-16 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#52525B]">
            <span>Obsidian Glass × Electric Indigo — Shivam Verma Portfolio</span>
            <span>Built with Next.js · React · TypeScript</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
