"use client";

import React from "react";
import { Container } from "@/components/primitives/Container";
import { portfolioData, navigationItems } from "@/data/portfolioData";
import { useReducedMotion } from "@/hooks/useMediaQuery";
import { ExternalLink, FileText, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Inline SVG icons — reuse same pattern as ContactSection, no extra package
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

export const Footer: React.FC = () => {
  const { personal, socials, resume } = portfolioData;
  const prefersReducedMotion = useReducedMotion();

  const githubSocial = socials.find((s) => s.platform.toLowerCase() === "github");
  const linkedinSocial = socials.find((s) => s.platform.toLowerCase() === "linkedin");

  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // Nav links (exclude "contact" since we're right below it; keep all for completeness)
  const footerNavItems = navigationItems;

  // External professional links
  const professionalLinks = [
    githubSocial && {
      label: "GitHub",
      href: githubSocial.url,
      icon: <GithubIcon className="w-3.5 h-3.5" />,
    },
    linkedinSocial && {
      label: "LinkedIn",
      href: linkedinSocial.url,
      icon: <LinkedinIcon className="w-3.5 h-3.5" />,
    },
    {
      label: "Resume",
      href: resume?.documentUrl ?? personal.resumeUrl ?? "/resume/Shivam_resume.pdf",
      icon: <FileText className="w-3.5 h-3.5" />,
    },
  ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[];

  return (
    <footer
      id="footer"
      aria-label="Site footer"
      className="relative w-full bg-[#06060A] border-t border-white/[0.07]"
    >
      <Container>
        {/* ── MAIN FOOTER BODY ───────────────────────────────────── */}
        <div className="py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">

          {/* ── LEFT: Identity + Closing Line ───────────────────── */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            {/* SV Monogram + Name */}
            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-indigo-500/30 bg-indigo-500/[0.08] shrink-0"
              >
                <span className="text-xs font-mono font-extrabold text-indigo-300 tracking-tight select-none">
                  SV
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#F5F5F7] tracking-wide leading-none">
                  {personal.name}
                </p>
                <p className="text-[10.5px] font-mono text-[#71717A] uppercase tracking-widest mt-0.5">
                  {personal.title}
                </p>
              </div>
            </div>

            {/* Closing signature line */}
            <p className="text-xs sm:text-[13px] text-[#52525B] leading-relaxed max-w-xs">
              Designing, building, and continuously learning.
            </p>
          </div>

          {/* ── MIDDLE: Navigation ──────────────────────────────── */}
          <div className="lg:col-span-1">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#52525B] mb-4">
              NAVIGATION
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-1">
                {footerNavItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={cn(
                        "inline-block py-1.5 text-sm font-mono text-[#A1A1AA]",
                        "hover:text-indigo-200",
                        "focus-visible:outline-none focus-visible:text-indigo-200 focus-visible:underline",
                        "transition-colors duration-150"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── RIGHT: Professional Links + Back to Top ─────────── */}
          <div className="lg:col-span-1 flex flex-col justify-between gap-8 sm:gap-6">
            <div>
              <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#52525B] mb-4">
                PROFESSIONAL
              </p>
              <ul className="flex flex-col gap-1">
                {professionalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} — opens in new tab`}
                      className={cn(
                        "inline-flex items-center gap-2 py-1.5 text-sm font-mono text-[#A1A1AA]",
                        "hover:text-indigo-200 group",
                        "focus-visible:outline-none focus-visible:text-indigo-200 focus-visible:underline",
                        "transition-colors duration-150"
                      )}
                    >
                      <span className="text-[#52525B] group-hover:text-indigo-400 transition-colors">
                        {link.icon}
                      </span>
                      {link.label}
                      <ExternalLink
                        className="w-3 h-3 text-[#52525B] group-hover:text-indigo-400 transition-colors"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to Top — Apple Frosted Capsule */}
            <button
              type="button"
              onClick={handleBackToTop}
              aria-label="Scroll back to top of page"
              className={cn(
                "group inline-flex items-center gap-2 px-4 py-2 rounded-full",
                "text-xs font-mono font-semibold text-neutral-300 hover:text-white",
                "bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.10] border-t-white/[0.22]",
                "backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                "transition-all duration-200 cursor-pointer active:scale-95"
              )}
            >
              <ArrowUp
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  !prefersReducedMotion && "group-hover:-translate-y-0.5"
                )}
                aria-hidden="true"
              />
              BACK TO TOP
            </button>
          </div>
        </div>

        {/* ── COPYRIGHT BAR ──────────────────────────────────────── */}
        <div className="border-t border-white/[0.05] py-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-mono text-[#3F3F46]">
            © {currentYear} {personal.name}. All rights reserved.
          </span>
          <span className="text-[11px] font-mono text-[#3F3F46]">
            Built with Next.js · React · TypeScript
          </span>
        </div>
      </Container>
    </footer>
  );
};
