"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;

    const frame = requestAnimationFrame(() => {
      setVisible(true);
      setProgress(30);

      t1 = setTimeout(() => setProgress(70), 150);
      t2 = setTimeout(() => {
        setProgress(100);
        t3 = setTimeout(() => setVisible(false), 300);
      }, 450);
    });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none transition-opacity duration-300"
      style={{ opacity: progress === 100 ? 0 : 1 }}
    >
      <div
        className="h-[3px] bg-gradient-to-r from-[#ffe088] via-[#e9c349] to-[#ffdfba] shadow-[0_0_8px_rgba(255,224,136,0.8)] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
