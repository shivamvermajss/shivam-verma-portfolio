"use client";

import React from "react";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl shadow-elevated focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#070709] transition-all duration-150"
    >
      Skip to main content
    </a>
  );
}
