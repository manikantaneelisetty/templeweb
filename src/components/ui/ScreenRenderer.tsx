"use client";
import { useRef, useEffect, useMemo } from "react";
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

  // Sanitize htmlContent by stripping dangerous script & iframe tags to prevent XSS attacks
  const sanitizedHtml = useMemo(() => {
    return htmlContent
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "");
  }, [htmlContent]);

  // Handle routing and performance optimization attributes on images
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Enforce native lazy loading and async decoding on images
    const images = container.querySelectorAll<HTMLImageElement>("img");
    images.forEach((img, index) => {
      const isHero = index < 2 || img.classList.contains("hero-bg");
      if (isHero) {
        img.loading = "eager";
        img.fetchPriority = "high";
      } else {
        img.loading = "lazy";
        img.decoding = "async";
      }
    });

    // 2. Intercept internal links for client-side Next.js routing
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest("a, button");
      if (!clickable) return;

      const text = clickable.textContent?.trim().toLowerCase() || "";
      const href = clickable.getAttribute("href");

      let destination = "";
      if (text.includes("about") || text.includes("heritage") || text.includes("history")) destination = "/about";
      else if (text.includes("contact") || text.includes("visit") || text.includes("reach")) destination = "/contact";
      else if (text.includes("event") || text.includes("festival")) destination = "/events";
      else if (text.includes("service")) destination = "/services";
      else if (text.includes("darshan") || text.includes("ritual") || text.includes("daily")) destination = "/darshan";
      else if (text.includes("donate") || text.includes("support")) destination = "/donate";
      else if (text.includes("gallery") || text.includes("photos")) destination = "/gallery";
      else if (text.includes("home") || text.includes("sanctuary")) destination = "/";

      if (destination) {
        e.preventDefault();
        router.push(destination);
      } else if (href === "#") {
        e.preventDefault();
      }
    };

    container.addEventListener("click", handleClick);

    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, [router, sanitizedHtml]);

  // Clean, memory-leak free IntersectionObserver for scroll animations
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !("IntersectionObserver" in window)) return;

    const animElements = container.querySelectorAll<HTMLElement>(".scroll-anim, .fade-in-up");
    if (animElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    animElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sanitizedHtml]);

  // Divine Stones interactive hover effect (Home page)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const divineCards = container.querySelectorAll<HTMLElement>(".divine-stone-card");
    const divineBgs = container.querySelectorAll<HTMLElement>(".divine-bg");

    if (divineCards.length === 0 || divineBgs.length === 0) return;

    const handleMouseEnter = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      const index = card.getAttribute("data-index");

      gsap.to(divineBgs, { opacity: 0, duration: 0.5, ease: "power2.inOut" });

      const targetBg = Array.from(divineBgs).find((bg) => bg.getAttribute("data-index") === index);
      if (targetBg) {
        gsap.to(targetBg, { opacity: 1, duration: 0.5, ease: "power2.inOut" });
      }
    };

    divineCards.forEach((card) => card.addEventListener("mouseenter", handleMouseEnter));

    return () => {
      divineCards.forEach((card) => card.removeEventListener("mouseenter", handleMouseEnter));
    };
  }, [sanitizedHtml]);

  // GSAP scroll entrance animations
  useGSAP(
    () => {
      const fadeElements = containerRef.current?.querySelectorAll<HTMLElement>(".fade-in-up");

      fadeElements?.forEach((el) => {
        let delay = 0;
        if (el.classList.contains("stagger-1")) delay = 0.08;
        if (el.classList.contains("stagger-2")) delay = 0.16;
        if (el.classList.contains("stagger-3")) delay = 0.24;
        if (el.classList.contains("stagger-4")) delay = 0.32;

        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen template-container pt-[88px]"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      suppressHydrationWarning
    />
  );
}
