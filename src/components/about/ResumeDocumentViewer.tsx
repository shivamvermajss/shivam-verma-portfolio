"use client";

import React, { useState } from "react";
import { Loader2, AlertCircle, ExternalLink, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResumeDocumentViewerProps {
  documentUrl: string;
  title?: string;
  downloadFilename?: string;
  className?: string;
}

export const ResumeDocumentViewer: React.FC<ResumeDocumentViewerProps> = ({
  documentUrl,
  title = "Shivam Verma — Resume",
  downloadFilename = "Shivam-Verma-Resume.pdf",
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        // Fill whatever parent container it lives in
        "relative w-full h-full",
        // Fallback min-height when parent doesn't provide explicit height
        "min-h-[420px] sm:min-h-[500px]",
        // Dark background visible while PDF loads and behind iframe letterboxing
        "bg-[#070709]",
        "flex items-center justify-center",
        className
      )}
    >
      {/* ── LOADING OVERLAY (shown while iframe is loading) ─────── */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#070709]">
          <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" aria-hidden="true" />
          <p className="text-xs font-mono text-[#71717A] tracking-wider">
            Loading resume document…
          </p>
        </div>
      )}

      {/* ── NATIVE PDF IFRAME ────────────────────────────────────── */}
      {!hasError && (
        <iframe
          src={`${documentUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          title={title}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          // Full parent fill; border/rounding handled by the containing dark frame
          className={cn(
            "absolute inset-0 w-full h-full border-0",
            // Keep invisible until load completes to avoid white flash
            isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-200"
          )}
        />
      )}

      {/* ── GRACEFUL FALLBACK (iframe blocked or errored) ────────── */}
      {hasError && (
        <div className="relative z-20 flex flex-col items-center gap-5 p-6 text-center max-w-sm">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-400">
            <AlertCircle className="w-6 h-6" aria-hidden="true" />
          </div>

          {/* Copy */}
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-[#F5F5F7]">
              Resume Preview Unavailable
            </h4>
            <p className="text-xs text-[#71717A] leading-relaxed">
              In-browser PDF preview is restricted on this browser. You can still open or download the document directly.
            </p>
          </div>

          {/* Fallback actions — always accessible even when iframe fails */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
            <a
              href={documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new browser tab"
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-4 py-2.5 rounded-xl text-xs font-mono font-semibold",
                "text-[#A1A1AA] bg-white/[0.04] border border-white/[0.1]",
                "hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                "transition-colors duration-150"
              )}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              Open in New Tab
            </a>

            <a
              href={documentUrl}
              download={downloadFilename}
              aria-label={`Download ${downloadFilename}`}
              className={cn(
                "w-full sm:w-auto inline-flex items-center justify-center gap-2",
                "px-4 py-2.5 rounded-xl text-xs font-mono font-semibold",
                "text-white bg-indigo-600 border border-indigo-500/80",
                "hover:bg-indigo-500",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300",
                "transition-colors duration-150"
              )}
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
