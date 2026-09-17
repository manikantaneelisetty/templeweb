"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-[#ffdfba] border-b-2 border-[#ffdfba] pb-1 translate-y-[-2px] transition-transform duration-300 relative group py-2";
    }
    return "text-white/80 hover:text-[#ffdfba] transition-colors duration-300 relative group py-2";
  };

  const mobileLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-[#ffdfba] border-l-4 border-[#ffdfba] pl-3 py-2 bg-white/5 transition-colors duration-300 block font-label-caps uppercase tracking-wider";
    }
    return "text-white/80 hover:text-[#ffdfba] hover:bg-white/5 pl-4 py-2 transition-colors duration-300 block font-label-caps uppercase tracking-wider border-l-4 border-transparent";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-gradient-to-r from-[#4a2522] via-[#7d3c2b] to-[#4a2522] border-b border-white/20 shadow-xl backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-16 py-6">
        <Link href="/" onClick={() => setIsMobileOpen(false)} className="font-headline-md text-xl md:text-2xl text-[#ffdfba] hover:text-white transition-colors duration-300 uppercase tracking-widest flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">temple_hindu</span>
          Temple Sanctuary
        </Link>
        
        {/* Desktop Menu */}
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
          <button 
            aria-label="Menu" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-[#ffdfba] hover:text-white transition-colors duration-300"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
              {isMobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-[#4a2522] to-[#3a1d1b] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-white/10 flex flex-col py-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/")}>Home</Link>
          
          <div className="py-2">
            <span className="text-[#ffdfba]/50 text-xs px-4 font-label-caps uppercase tracking-widest mb-1 block">About</span>
            <Link href="/about" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/about")}>Overview</Link>
            <Link href="/about#divine-presence" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/about#divine-presence")}>The Divine Presence</Link>
            <Link href="/about#origins-section" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/about#origins-section")}>Founders & History</Link>
            <Link href="/about#guidelines" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/about#guidelines")}>Pilgrim Guidelines</Link>
          </div>

          <div className="py-2 border-t border-white/5">
            <span className="text-[#ffdfba]/50 text-xs px-4 font-label-caps uppercase tracking-widest mb-1 block">Darshan</span>
            <Link href="/darshan" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/darshan")}>Overview</Link>
            <Link href="/darshan#timings" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/darshan#timings")}>Temple Timings</Link>
            <Link href="/darshan#special" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/darshan#special")}>Special Darshan</Link>
          </div>

          <div className="py-2 border-t border-white/5">
            <span className="text-[#ffdfba]/50 text-xs px-4 font-label-caps uppercase tracking-widest mb-1 block">Gallery</span>
            <Link href="/gallery" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/gallery")}>Overview</Link>
            <Link href="/gallery#unique-photos" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/gallery#unique-photos")}>Unique Perspectives</Link>
            <Link href="/gallery#past-present" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/gallery#past-present")}>Past to Present</Link>
          </div>

          <div className="py-2 border-t border-white/5">
            <span className="text-[#ffdfba]/50 text-xs px-4 font-label-caps uppercase tracking-widest mb-1 block">Services</span>
            <Link href="/services" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/services")}>Overview</Link>
            <Link href="/services#annadanam" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/services#annadanam")}>Annadanam</Link>
            <Link href="/services#medical" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/services#medical")}>Medical Care</Link>
            <Link href="/services#vidyalaya" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/services#vidyalaya")}>Vedic Vidyalaya</Link>
          </div>

          <Link href="/contact" onClick={() => setIsMobileOpen(false)} className={mobileLinkClass("/contact")}>Contact</Link>
          
          <div className="p-6 mt-4 border-t border-white/5 flex justify-center">
            <Link href="/donate" onClick={() => setIsMobileOpen(false)} className="inline-flex w-full items-center justify-center bg-[#ffdfba] text-[#4a2522] font-label-caps text-sm uppercase tracking-wider px-6 py-4 rounded-full shadow-lg font-bold">
              Support Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
