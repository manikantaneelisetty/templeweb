import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 bg-gradient-to-br from-[#2a1310] via-[#4a2522] to-[#1e0d0b] text-white relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ffdfba]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Sacred Icon Badge */}
        <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-[#ffdfba]/40 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(255,223,186,0.2)]">
          <span className="material-symbols-outlined text-[#ffdfba] text-5xl">
            temple_hindu
          </span>
        </div>

        {/* 404 Header */}
        <span className="font-label-caps text-sm tracking-[0.3em] uppercase text-[#ffdfba]/80 mb-2 block">
          Error 404 • Path Not Found
        </span>
        <h1 className="font-['EB_Garamond'] text-4xl md:text-6xl text-white font-semibold mb-4 drop-shadow-md">
          The Sacred Path You Seek Is Not Found
        </h1>
        <p className="font-body-lg text-base md:text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
          The page or ritual pathway you are attempting to reach may have been moved, renamed, or is currently undergoing spiritual contemplation.
        </p>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10 text-left">
          <Link
            href="/"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#ffdfba]/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdfba]/10 flex items-center justify-center text-[#ffdfba] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">home</span>
            </div>
            <div>
              <h4 className="text-white font-semibold group-hover:text-[#ffdfba] transition-colors">Return Sanctuary</h4>
              <p className="text-xs text-white/60">Visit our homepage & sanctuary overview</p>
            </div>
          </Link>

          <Link
            href="/darshan"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#ffdfba]/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdfba]/10 flex items-center justify-center text-[#ffdfba] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
            <div>
              <h4 className="text-white font-semibold group-hover:text-[#ffdfba] transition-colors">Daily Darshan</h4>
              <p className="text-xs text-white/60">Temple timings, aarti & sacred schedules</p>
            </div>
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#ffdfba]/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdfba]/10 flex items-center justify-center text-[#ffdfba] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
            </div>
            <div>
              <h4 className="text-white font-semibold group-hover:text-[#ffdfba] transition-colors">Seva & Services</h4>
              <p className="text-xs text-white/60">Annadanam, medical care & Vedic education</p>
            </div>
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-[#ffdfba]/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ffdfba]/10 flex items-center justify-center text-[#ffdfba] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <div>
              <h4 className="text-white font-semibold group-hover:text-[#ffdfba] transition-colors">Temple Directions</h4>
              <p className="text-xs text-white/60">Pilgrim support, phone & visiting details</p>
            </div>
          </Link>
        </div>

        {/* Primary Action Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffe088] to-[#e9c349] text-[#241a00] font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          Return to Sanctuary Home
        </Link>
      </div>
    </div>
  );
}
