"use client";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  htmlContent: string;
}

export default function ScreenRenderer({ htmlContent }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Intercept all link and button clicks to provide dynamic Next.js routing
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Execute scripts that were injected via dangerouslySetInnerHTML
    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Find the closest anchor or button
      const clickable = target.closest('a, button');
      if (!clickable) return;

      const text = clickable.textContent?.trim().toLowerCase() || "";
      const href = clickable.getAttribute('href');

      // Map button/link text to our real Next.js routes
      let destination = "";
      if (text.includes("about") || text.includes("heritage") || text.includes("history")) destination = "/about";
      else if (text.includes("contact") || text.includes("visit") || text.includes("reach")) destination = "/contact";
      else if (text.includes("event") || text.includes("festival")) destination = "/events";
      else if (text.includes("service")) destination = "/services";
      else if (text.includes("darshan") || text.includes("ritual") || text.includes("daily")) destination = "/darshan";
      else if (text.includes("donate") || text.includes("support")) destination = "/donate";
      else if (text.includes("home") || text.includes("sanctuary")) destination = "/";
      
      if (destination) {
        e.preventDefault();
        router.push(destination);
      } else if (href === "#") {
        e.preventDefault(); // Stop hash links from jumping to top if unmapped
      }
    };

    container.addEventListener('click', handleClick);

    // 10-YEAR SENIOR DEV POLISH: Dynamic Standardization
    // 1. Remove duplicate navbars embedded in the raw HTML strings
    const navs = container.querySelectorAll('nav');
    navs.forEach(nav => nav.remove());

    // 2. Standardize button styles across all pages to match the home page premium buttons
    const premiumBtnClass = "bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-500 border-2 border-tertiary-fixed-dim/50 ring-2 ring-tertiary-fixed/20 inline-flex justify-center items-center cursor-pointer";
    const buttons = container.querySelectorAll('button:not([aria-label="Menu"]), a.button, a[class*="bg-gradient"], button[class*="bg-"]');
    buttons.forEach(btn => {
      // Retain padding if large, else use standard
      btn.className = premiumBtnClass;
    });



    return () => container.removeEventListener('click', handleClick);
  }, [router, htmlContent]);

  // Divine Stones interactive hover
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const divineCards = container.querySelectorAll('.divine-stone-card');
    const divineBgs = container.querySelectorAll('.divine-bg');
    
    const handleMouseEnter = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      const index = card.getAttribute('data-index');
      
      gsap.to(divineBgs, { opacity: 0, duration: 0.8, ease: "power2.inOut" });
      
      const targetBg = Array.from(divineBgs).find(bg => bg.getAttribute('data-index') === index);
      if (targetBg) {
        gsap.to(targetBg, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      }
    };

    divineCards.forEach(card => card.addEventListener('mouseenter', handleMouseEnter));

    return () => {
      divineCards.forEach(card => card.removeEventListener('mouseenter', handleMouseEnter));
    };
  }, [htmlContent]);

  // Card Interactive Hover - SVG Running Outline
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const allCards = container.querySelectorAll('.premium-card, .overlap-card');
    
    allCards.forEach(card => {
      // 10-year experienced approach: Inject SVG for true running border
      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("class", "absolute inset-0 w-full h-full pointer-events-none rounded-2xl");
      svg.style.zIndex = "10";
      
      const rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("width", "100%");
      rect.setAttribute("height", "100%");
      rect.setAttribute("fill", "none");
      
      const compStyle = window.getComputedStyle(card);
      rect.setAttribute("rx", compStyle.borderRadius || "16px"); 
      rect.setAttribute("stroke", "#f97316"); // Elegant orange
      rect.setAttribute("stroke-width", "3");
      rect.setAttribute("stroke-dasharray", "150 1500");
      
      svg.appendChild(rect);
      
      if (compStyle.position === 'static') (card as HTMLElement).style.position = 'relative';
      card.appendChild(svg);
      
      gsap.set(svg, { opacity: 0 });
      
      const tl = gsap.timeline({ paused: true, repeat: -1 });
      tl.fromTo(rect, 
        { strokeDashoffset: 1650 }, 
        { strokeDashoffset: 0, duration: 8, ease: "none" }
      );
      
      const onEnter = () => {
        gsap.to(svg, { opacity: 1, duration: 0.3 });
        gsap.to(card, { y: -4, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.15)", duration: 0.3 });
        tl.play();
      };
      const onLeave = () => {
        gsap.to(svg, { opacity: 0, duration: 0.3, onComplete: () => tl.pause() });
        gsap.to(card, { y: 0, boxShadow: "none", duration: 0.3 });
      };
      
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      
      (card as any)._onEnter = onEnter;
      (card as any)._onLeave = onLeave;
      (card as any)._svg = svg;
    });

    return () => {
      allCards.forEach(card => {
        if ((card as any)._onEnter) card.removeEventListener('mouseenter', (card as any)._onEnter);
        if ((card as any)._onLeave) card.removeEventListener('mouseleave', (card as any)._onLeave);
        if ((card as any)._svg && (card as any)._svg.parentNode === card) card.removeChild((card as any)._svg);
      });
    };
  }, [htmlContent]);

    useGSAP(() => {
    // Elegant, scalable scroll animations using fade-in-up markers
    const fadeElements = containerRef.current?.querySelectorAll('.fade-in-up');
    
    fadeElements?.forEach((el) => {
      // Extract stagger delay if present
      let delay = 0;
      if (el.classList.contains('stagger-1')) delay = 0.1;
      if (el.classList.contains('stagger-2')) delay = 0.2;
      if (el.classList.contains('stagger-3')) delay = 0.3;
      if (el.classList.contains('stagger-4')) delay = 0.4;

      gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Subtly animate images for a premium cinematic feel
    const images = gsap.utils.toArray("img:not(.hero-bg)");
    images.forEach((img: any) => {
      gsap.from(img, {
        scale: 1.05,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: img,
          start: "top 95%",
        }
      });
    });

    // Parallax hero backgrounds
    const heroSections = containerRef.current?.querySelectorAll('section[style*="background-image"]');
    heroSections?.forEach((hero: any) => {
      gsap.to(hero, {
        backgroundPosition: "50% " + (window.innerHeight / 2) + "px",
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });


  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen template-container pt-[88px]"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      suppressHydrationWarning
    />
  );
}
