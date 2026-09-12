"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "text-on-background border-b-2 border-tertiary-fixed-dim pb-1 translate-y-[-2px] transition-transform duration-300";
    }
    return "text-on-surface-variant hover:text-on-background transition-colors duration-300 hover:opacity-80";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-16 py-6 bg-surface/90 border-b border-surface-variant/50 backdrop-blur-md">
      <Link href="/" className="font-['Libre_Caslon_Text'] text-2xl tracking-widest uppercase text-on-background hover:opacity-80 transition-opacity duration-300">
        Temple Sanctuary
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-['EB_Garamond'] text-[22px] tracking-[0.05em] font-normal">
        <Link href="/" className={getLinkClass("/")}>Home</Link>
        <Link href="/about" className={getLinkClass("/about")}>About</Link>
        <Link href="/darshan" className={getLinkClass("/darshan")}>Darshan</Link>
        <Link href="/events" className={getLinkClass("/events")}>Events</Link>
        <Link href="/services" className={getLinkClass("/services")}>Services</Link>
        <Link href="/contact" className={getLinkClass("/contact")}>Contact</Link>
      </div>

      <Link href="/donate" className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-['EB_Garamond'] text-lg tracking-[0.05em] font-medium px-5 py-2 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-500 border-2 border-tertiary-fixed-dim/50 ring-2 ring-tertiary-fixed/20">
        Support Us
      </Link>

      <button aria-label="Menu" className="md:hidden text-on-background">
        <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
      </button>
    </nav>
  );
}
