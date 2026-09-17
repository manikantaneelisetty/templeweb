"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception for diagnostics
    console.error("Temple Sanctuary Runtime Exception:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 bg-gradient-to-br from-[#2a1310] via-[#4a2522] to-[#1e0d0b] text-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-[#ffdfba]/40 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,223,186,0.2)]">
          <span className="material-symbols-outlined text-[#ffdfba] text-4xl">
            sync_problem
          </span>
        </div>

        <span className="font-label-caps text-xs tracking-[0.3em] uppercase text-[#ffdfba]/80 mb-2 block">
          A Momentary Disruption
        </span>
        <h1 className="font-['EB_Garamond'] text-3xl md:text-5xl text-white font-semibold mb-3">
          Harmony Temporarily Interrupted
        </h1>
        <p className="font-body-lg text-sm md:text-base text-white/80 mb-8 leading-relaxed">
          An unexpected error occurred while loading this sacred view. Please attempt to reconnect or return to the main temple sanctuary.
        </p>

        {error.digest && (
          <p className="text-xs text-white/40 font-mono mb-6 bg-black/30 px-3 py-1.5 rounded-lg border border-white/10">
            Error Digest: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffe088] to-[#e9c349] text-[#241a00] font-bold px-7 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">refresh</span>
            Try Reconnecting
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-full border border-white/20 transition-all duration-300 uppercase tracking-wider text-xs"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            Return to Sanctuary
          </Link>
        </div>
      </div>
    </div>
  );
}
