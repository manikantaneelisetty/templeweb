"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Handle initial page load and asset readiness
    const handleComplete = () => {
      setFade(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    };

    if (document.readyState === "complete") {
      const minDisplayTimer = setTimeout(handleComplete, 450);
      return () => clearTimeout(minDisplayTimer);
    } else {
      window.addEventListener("load", handleComplete);
      // Fallback timeout in case some deferred asset is slow
      const fallbackTimer = setTimeout(handleComplete, 1200);
      return () => {
        window.removeEventListener("load", handleComplete);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden={fade}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#2a1310] via-[#4a2522] to-[#1e0d0b] transition-all duration-700 ease-out ${
        fade ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#ffdfba]/10 blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Animated Sacred Temple Motif */}
        <div className="relative mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#ffe088]/20 to-[#ffdfba]/40 flex items-center justify-center shadow-[0_0_50px_rgba(255,223,186,0.3)] border border-[#ffdfba]/40 animate-bounce">
            <span
              className="material-symbols-outlined text-[#ffdfba] text-4xl md:text-5xl drop-shadow-[0_0_15px_rgba(255,224,136,0.8)]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              temple_hindu
            </span>
          </div>
          {/* Subtle orbiting ring */}
          <div className="absolute -inset-2 rounded-full border border-[#ffe088]/30 animate-spin" style={{ animationDuration: "6s" }} />
        </div>

        {/* Title */}
        <h1 className="font-['EB_Garamond'] text-2xl md:text-3xl tracking-widest text-[#ffdfba] uppercase font-semibold mb-2 drop-shadow-md">
          Temple Sanctuary
        </h1>
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#ffdfba]/70 font-sans mb-8">
          A Sanctuary for the Soul
        </p>

        {/* Shimmering Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-black/40 rounded-full overflow-hidden border border-[#ffdfba]/20 relative">
          <div className="h-full bg-gradient-to-r from-transparent via-[#ffe088] to-transparent w-full animate-[shimmer_1.2s_infinite]" />
        </div>
      </div>
    </div>
  );
}
