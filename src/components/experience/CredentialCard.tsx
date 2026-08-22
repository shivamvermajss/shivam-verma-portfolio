"use client";

import React from "react";
import { VerifiedCredential } from "@/types/portfolio";
import { Spotlight } from "@/components/primitives/Spotlight";
import { Button } from "@/components/primitives/Button";
import {
  Calendar,
  FileText,
  ArrowUpRight,
  Sparkles,
  Link2,
  ExternalLink,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CredentialCardProps {
  credential: VerifiedCredential;
  className?: string;
  onView?: (credential: VerifiedCredential, triggerEl?: HTMLElement) => void;
}

export const CredentialCard: React.FC<CredentialCardProps> = ({
  credential,
  className,
  onView,
}) => {
  const isFeatured = Boolean(credential.featured || credential.isPriority);

  return (
    <Spotlight
      color={isFeatured ? "rgba(99, 102, 241, 0.22)" : "rgba(139, 92, 246, 0.14)"}
      size={360}
      className={cn("w-full h-full rounded-[24px]", className)}
    >
      <article
        aria-label={`${credential.title} from ${credential.issuer}`}
        className={cn(
          "group relative h-full rounded-[24px] p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden",
          "glass-02 bg-[#0C0C12]/90 border border-white/[0.1] shadow-card",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-accent",
          isFeatured && "border-indigo-500/35 bg-[#0E0E18]/95 shadow-[0_0_24px_rgba(99,102,241,0.08)]"
        )}
      >
        {/* Subtle decorative gradient glow for featured credential */}
        {isFeatured && (
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 rounded-full bg-indigo-500/15 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-75"
            aria-hidden="true"
          />
        )}

        <div className="space-y-4 sm:space-y-5">
          {/* Top Header Row: Issuer Monospace Label + Verified Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-mono text-xs font-bold text-indigo-300 group-hover:text-indigo-200 tracking-wider uppercase truncate transition-colors duration-200">
                {credential.issuerShort || credential.issuer}
              </span>
              {isFeatured && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  FEATURED
                </span>
              )}
            </div>

            {/* Reusable Verified Badge with subtle hover glow enhancement */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_14px_rgba(34,197,94,0.22)] shrink-0 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-semibold tracking-wider">VERIFIED</span>
            </div>
          </div>

          {/* Title & Program Category */}
          <div className="space-y-2">
            <h4 className="text-base sm:text-lg font-bold text-[#F5F5F7] group-hover:text-white tracking-tight leading-snug transition-colors duration-200">
              {credential.title}
            </h4>

            {/* Type & Date / Timeline Metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-[#A1A1AA]">
              <span className="flex items-center gap-1.5 text-indigo-300">
                <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{credential.type}</span>
              </span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-1.5 text-[#A1A1AA]">
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

          {/* Related Experience Visual Link (e.g. SmartBridge & SmartInternz) */}
          {credential.relatedExperienceId && (
            <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/25 flex items-center gap-2 text-xs font-mono text-indigo-200 transition-colors group-hover:border-indigo-500/35">
              <Link2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">
                  RELATED EXPERIENCE
                </span>
                <span className="font-semibold text-indigo-300">
                  {credential.issuer} · {credential.relatedExperienceRole || "Internship"}
                </span>
              </div>
            </div>
          )}

          {/* Source-Verified Skills & Domain Pills */}
          {credential.skills && credential.skills.length > 0 && (
            <div className="space-y-1.5 pt-0.5">
              <div className="text-[10.5px] font-mono text-[#A1A1AA] uppercase tracking-wider font-semibold">
                VERIFIED COMPETENCIES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {credential.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#D4D4D8] transition-colors group-hover:border-white/[0.14] group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Monospace Credential ID / Verification Metadata */}
          {(credential.credentialId || credential.verificationUrl) && (
            <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
              {credential.credentialId && (
                <div className="text-[#A1A1AA] truncate max-w-full">
                  <span className="text-[#71717A] text-[10px] uppercase block">CREDENTIAL ID</span>
                  <span className="text-[#E4E4E7] font-semibold break-all">
                    {credential.credentialId}
                  </span>
                </div>
              )}

              {credential.verificationUrl && (
                <div className="text-[11px] font-mono text-indigo-300/90 flex items-center gap-1">
                  <ExternalLink className="w-3 h-3 text-indigo-400" />
                  <span>verify.onwingspan.com</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Row: Attestation Summary & View Credential Affordance */}
        <div className="pt-4 mt-5 border-t border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#71717A]">
            <Award className="w-3.5 h-3.5 text-indigo-400/80 shrink-0" />
            <span className="truncate">Documented Milestone</span>
          </div>

          <Button
            variant="secondary"
            size="sm"
            isMagnetic
            onClick={(e) => onView?.(credential, e.currentTarget)}
            aria-label={`View credential details for ${credential.title}`}
            data-credential-id={credential.id}
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            className="shrink-0 group-hover:border-indigo-500/40"
          >
            View Credential
          </Button>
        </div>
      </article>
    </Spotlight>
  );
};
