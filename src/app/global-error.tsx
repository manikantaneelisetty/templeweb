"use client";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#2a1310] text-white font-sans">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <span className="text-3xl">🛕</span>
          </div>
          <h1 className="text-2xl font-bold mb-2 text-[#ffdfba]">
            Temple Sanctuary
          </h1>
          <p className="text-sm text-white/80 mb-6">
            A critical system error occurred. We apologize for the inconvenience.
          </p>
          {error.digest && (
            <p className="text-xs text-white/40 font-mono mb-6">
              Digest: {error.digest}
            </p>
          )}
          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="bg-[#ffe088] text-[#241a00] font-bold px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-opacity"
            >
              Reload Page
            </button>
            <Link
              href="/"
              className="bg-white/10 border border-white/20 px-6 py-2.5 rounded-full text-sm hover:bg-white/20 transition-all"
            >
              Go to Sanctuary
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
