"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Sparkles,
  Building2,
  Share2,
  Video,
  Play,
  Layers,
  Radio,
  CheckCircle2,
  Heart,
  MessageCircle,
  Bookmark,
  Users,
  Mic,
  Lock,
  Download,
  Copy,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { ImagifyMobileCard } from "./ImagifyMobileCard";

export interface ProjectVisualProps {
  projectId: string;
  title: string;
  category: string;
  liveUrl?: string;
  className?: string;
  isFeatured?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  projectId,
  title,
  category,
  liveUrl,
  className,
  isFeatured = false,
}) => {
  // Flagship Project Imagify: Render the custom mobile phone showcase card (Dunzo-inspired)
  if (projectId === "imagify") {
    return (
      <ImagifyMobileCard
        liveUrl={liveUrl}
        title={title}
        category={category}
        className={className}
      />
    );
  }

  // Format clean display URL without inventing domains
  const displayUrl = liveUrl
    ? liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "PROJECT PREVIEW";

  const isLive = Boolean(liveUrl);

  return (
    <div
      className={cn(
        "relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/[0.12] bg-[#0A0A10] select-none group/mockup",
        "shadow-[0_24px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)]",
        isFeatured ? "min-h-[360px] sm:min-h-[420px] lg:min-h-[480px]" : "min-h-[190px] sm:min-h-[220px]",
        className
      )}
    >
      {/* Top Browser Chrome Bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-[#0E0E18]/95 border-b border-white/[0.09] backdrop-blur-2xl">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.4)] border border-red-400/40" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.4)] border border-amber-400/40" />
          <div className="w-3 h-3 rounded-full bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.4)] border border-emerald-400/40" />
        </div>

        {/* Address / URL Bar */}
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/60 border border-white/[0.12] max-w-[240px] sm:max-w-[320px] truncate shadow-inner">
          <Lock className={cn("w-3 h-3 shrink-0", isLive ? "text-emerald-400" : "text-[#71717A]")} />
          <span className="font-mono text-[11px] sm:text-xs text-[#E4E4E7] tracking-wide truncate">
            {displayUrl}
          </span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2 text-xs font-mono">
          {isLive ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium text-[10.5px]">ONLINE</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#71717A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71717A]" />
              <span className="text-[10.5px]">PREVIEW</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Visual Display Area */}
      <div className="relative p-2.5 sm:p-4 flex flex-col justify-center items-center h-[calc(100%-52px)] overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),rgba(168,85,247,0.1),transparent_70%)] pointer-events-none" />

        {renderProjectMockup(projectId, isFeatured, category)}
      </div>
    </div>
  );
};

function renderProjectMockup(projectId: string, isFeatured: boolean, category: string) {
  switch (projectId) {
    case "imagify":
      return (
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[410px] rounded-2xl overflow-hidden flex flex-col justify-between">
          {/* Real High-Resolution Screenshot Canvas */}
          <div className="relative w-full h-full flex-1 min-h-[290px] sm:min-h-[350px] lg:min-h-[390px] rounded-2xl overflow-hidden bg-[#0A0A10] border border-white/[0.10] shadow-2xl">
            <Image
              src="/imagify.png"
              alt="Imagify — AI Image Generation SaaS Platform"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
              priority
              className="object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-[1.03]"
            />

            {/* Subtle Gradient Vignette Over Screenshot */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C14]/85 via-transparent to-black/10 pointer-events-none" />

            {/* Glass Sheen Angle Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/40 pointer-events-none" />

            {/* Floating Top-Right Feature Badge */}
            <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.6)] text-xs font-mono text-white font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Clipdrop AI Engine</span>
            </div>

            {/* Floating Bottom-Left Feature Badge */}
            <div className="absolute bottom-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.6)] text-xs font-mono text-emerald-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Razorpay & Stripe Checkout</span>
            </div>

            {/* Floating Bottom-Right Feature Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 absolute bottom-3.5 right-3.5 z-10 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-xl border border-white/25 shadow-[0_8px_24px_rgba(0,0,0,0.6)] text-xs font-mono text-[#D4D4D8]">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>JWT Auth · Credits Ledger</span>
            </div>
          </div>
        </div>
      );

    case "quickchat":
      return (
        <div className="w-full h-full flex flex-col justify-between gap-2.5 text-left">
          {/* Chat active conversation header */}
          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[10px] font-bold text-purple-300">
                  JD
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#22C55E] ring-2 ring-[#0A0A0E]" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#F5F5F7]">Engineering Channel</div>
                <div className="text-[9.5px] font-mono text-emerald-400">● Socket.IO Connected</div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-[#71717A]">Rooms: #core</span>
          </div>

          {/* Interactive chat bubbles */}
          <div className="flex-1 space-y-2 py-1">
            <div className="flex items-start gap-2 max-w-[85%]">
              <div className="p-2 rounded-xl rounded-tl-none bg-white/[0.05] border border-white/[0.08] text-[11px] text-[#A1A1AA]">
                Live messages synced across WebSocket channels with instant delivery.
              </div>
            </div>
            <div className="flex items-start justify-end">
              <div className="p-2 rounded-xl rounded-tr-none bg-indigo-600/30 border border-indigo-500/30 text-[11px] text-[#F5F5F7] max-w-[85%]">
                Cloudinary media uploads and seen receipts integrated smoothly.
                <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] font-mono text-indigo-300">
                  <span>14:02</span>
                  <CheckCircle2 className="w-2.5 h-2.5 text-indigo-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "staysphere":
      return (
        <div className="w-full h-full flex flex-col justify-between gap-2 text-left">
          <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden bg-gradient-to-tr from-[#161622] to-[#1E1E30] border border-white/[0.08] p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#F5F5F7] border border-white/10 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-indigo-400" />
                Accommodation Stay
              </span>
              <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">
                Reviews & Ratings
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs font-semibold text-[#F5F5F7]">Listings CRUD & Booking</div>
                <div className="text-[10px] text-[#A1A1AA]">Passport.js Auth · Session Store</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-indigo-300">Rental Workflow</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10.5px] font-mono text-[#A1A1AA]">
            <span>Cloudinary Image Pipeline</span>
            <span className="text-emerald-400 font-medium">Live on Render</span>
          </div>
        </div>
      );

    case "threadly":
      return (
        <div className="w-full h-full flex flex-col justify-between gap-2 text-left">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-[9px] font-bold text-indigo-300">
                  SV
                </div>
                <span className="text-xs font-semibold text-[#F5F5F7]">@shivam</span>
              </div>
              <span className="text-[10px] font-mono text-indigo-400">Social Graph</span>
            </div>

            <p className="text-[11px] text-[#A1A1AA] line-clamp-2">
              Full-stack social platform with post feeds, follow relationships, comments, and JWT auth.
            </p>

            <div className="flex items-center justify-between pt-1 border-t border-white/[0.05] text-[10px] font-mono text-[#71717A]">
              <span className="flex items-center gap-1 text-pink-400">
                <Heart className="w-3 h-3 fill-pink-400/20" /> Like
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" /> Comment
              </span>
              <span className="flex items-center gap-1">
                <Bookmark className="w-3 h-3" /> Save
              </span>
              <span className="flex items-center gap-1">
                <Share2 className="w-3 h-3" /> Share
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-[#A1A1AA]">
            <span>Cloudinary Media Feeds</span>
            <span className="text-emerald-400">Live on Vercel</span>
          </div>
        </div>
      );

    case "youtube-watch-party":
      return (
        <div className="w-full h-full flex flex-col justify-between gap-2 text-left">
          <div className="relative h-24 rounded-xl overflow-hidden bg-[#0F0F17] border border-white/[0.08] p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px] font-mono border border-red-500/30 flex items-center gap-1">
                <Radio className="w-2.5 h-2.5 animate-pulse text-red-400" />
                SYNC ROOM
              </span>
              <span className="text-[10px] font-mono text-[#A1A1AA] flex items-center gap-1">
                <Users className="w-3 h-3 text-indigo-400" /> Multi-User Sync
              </span>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-red-600/30 border border-red-500/40 flex items-center justify-center text-red-400 shadow-md">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA]">
              <span>Host Controls</span>
              <span className="text-emerald-400 font-semibold">Live Playback Sync</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-[#A1A1AA]">
            <span>YouTube IFrame + Sockets</span>
            <span className="text-emerald-400">Live on Vercel</span>
          </div>
        </div>
      );

    case "smart-meet":
      return (
        <div className="w-full h-full flex flex-col justify-between gap-2 text-left">
          <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-[90px]">
            <div className="rounded-lg bg-indigo-950/30 border border-indigo-500/20 p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] font-mono text-indigo-300">
                <span>Host Stream</span>
                <Mic className="w-2.5 h-2.5 text-emerald-400" />
              </div>
              <div className="flex items-center justify-center py-2">
                <Video className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="text-[8px] font-mono text-emerald-400">● WebRTC Audio/Video</span>
            </div>

            <div className="rounded-lg bg-white/[0.03] border border-white/[0.06] p-2 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] font-mono text-[#A1A1AA]">
                <span>Participant</span>
                <Mic className="w-2.5 h-2.5 text-emerald-400" />
              </div>
              <div className="flex items-center justify-center py-2">
                <Users className="w-4 h-4 text-[#71717A]" />
              </div>
              <span className="text-[8px] font-mono text-[#71717A]">Agora RTC Stream</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-[#A1A1AA]">
            <span>Scheduled & Instant Rooms</span>
            <span className="text-indigo-400">Socket Signaling</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex flex-col items-center justify-center gap-2 text-center p-6">
          <Layers className="w-8 h-8 text-indigo-400 opacity-60" />
          <span className="text-xs font-mono text-[#A1A1AA]">{category}</span>
        </div>
      );
  }
}
