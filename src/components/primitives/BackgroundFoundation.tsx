import React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundFoundationProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  showNoise?: boolean;
  showAmbientGlow?: boolean;
}

export const BackgroundFoundation: React.FC<BackgroundFoundationProps> = ({
  children,
  className,
  showNoise = true,
  showAmbientGlow = true,
  ...props
}) => {
  return (
    <div
      className={cn("relative min-h-screen w-full bg-[#070709] text-[#F5F5F7]", className)}
      {...props}
    >
      {/* Layer 1: Ambient Radial Background Glows */}
      {showAmbientGlow && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-25 blur-[120px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 80%)",
            }}
          />
          <div
            className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] opacity-15 blur-[140px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(99, 102, 241, 0.1) 70%, transparent 100%)",
            }}
          />
        </div>
      )}

      {/* Layer 2: Grain / Noise Overlay */}
      {showNoise && (
        <div className="pointer-events-none fixed inset-0 bg-noise opacity-40 z-[1]" />
      )}

      {/* Layer 3: Slot for future 3D Canvas / Particle Mesh System */}
      <div id="bg-canvas-slot" className="pointer-events-none fixed inset-0 z-[2]" />

      {/* Layer 4: Primary Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
