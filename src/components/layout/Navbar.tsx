"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-[#ffdfba] border-b-2 border-[#ffdfba] pb-1 translate-y-[-2px] transition-transform duration-300 relative group py-2";
    }
    return "text-white/80 hover:text-[#ffdfba] transition-colors duration-300 relative group py-2";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-16 py-4 bg-gradient-to-r from-[#4a2522] via-[#7d3c2b] to-[#4a2522] border-b border-white/20 shadow-xl backdrop-blur-md">
      <Link href="/" className="font-headline-md text-xl md:text-2xl text-[#ffdfba] hover:text-white transition-colors duration-300 uppercase tracking-widest flex items-center gap-2">
        <span className="material-symbols-outlined text-3xl">temple_hindu</span>
        Temple Sanctuary
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-label-caps text-sm uppercase tracking-wider">
        <Link href="/" className={getLinkClass("/")}>
          Home
          {pathname !== "/" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>}
        </Link>

        {/* About Dropdown */}
        <div className="relative group py-2">
          <Link href="/about" className="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer">
            About
            <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <div className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-surface-variant p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col gap-2 z-[110]">
            <Link href="/about#divine-presence" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">self_improvement</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">The Divine Presence</span>
              </div>
            </Link>
            <Link href="/about#origins-section" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">history_edu</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Founders & History</span>
              </div>
            </Link>
            <Link href="/about#guidelines" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">menu_book</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Pilgrim Guidelines</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Darshan Dropdown */}
        <div className="relative group py-2">
          <Link href="/darshan" className="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer">
            Darshan
            <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <div className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-surface-variant p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col gap-2 z-[110]">
            <Link href="/darshan#timings" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">schedule</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Temple Timings</span>
              </div>
            </Link>
            <Link href="/darshan#special" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">workspace_premium</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Special Darshan</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Gallery Dropdown */}
        <div className="relative group py-2">
          <Link href="/gallery" className="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer">
            Gallery
            <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <div className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-surface-variant p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col gap-2 z-[110]">
            <Link href="/gallery#unique-photos" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">photo_camera</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Unique Perspectives</span>
              </div>
            </Link>
            <Link href="/gallery#past-present" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">history</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Past to Present</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="relative group py-2">
          <Link href="/services" className="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer">
            Services
            <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <div className="absolute top-full left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-surface-variant p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col gap-2 z-[110]">
            <Link href="/services#annadanam" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">restaurant</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Annadanam</span>
              </div>
            </Link>
            <Link href="/services#medical" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">medical_services</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Medical Care</span>
              </div>
            </Link>
            <Link href="/services#vidyalaya" className="flex items-center gap-4 p-3 rounded-xl bg-[#faf8f5] hover:bg-gradient-to-r hover:from-[#7d3c2b] hover:to-[#4a2522] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 group/item">
              <div className="w-10 h-10 rounded-lg bg-[#f0e4d8] flex items-center justify-center shrink-0 group-hover/item:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[#7d3c2b] group-hover/item:text-[#ffdfba] transition-colors">school</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-sm text-gray-800 group-hover/item:text-white transition-colors">Vedic Vidyalaya</span>
              </div>
            </Link>
          </div>
        </div>

        <Link href="/contact" className={getLinkClass("/contact")}>
          Contact
          {pathname !== "/contact" && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>}
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/donate" className="hidden md:inline-flex items-center justify-center bg-[#ffdfba] text-[#4a2522] font-label-caps text-sm uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold">
          Donate
        </Link>
        <button aria-label="Menu" className="md:hidden text-[#ffdfba] hover:text-white transition-colors duration-300">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
        </button>
      </div>
    </nav>
  );
}
