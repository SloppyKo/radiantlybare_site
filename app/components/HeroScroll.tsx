"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GBP_SUBLINE, GLOSSGENIUS_URL } from "../lib/site";

const TAGLINE = ["Radiant.", "Confident.", "Beautifully Bare."];

// Background cover photo behind the hero headline
const HERO_PHOTO = "/images/lobby.webp";
const HERO_PHOTO_OPACITY = 0.14;

// 0 → 1 as p moves from a → b
const ramp = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)));

// White → #363c1f
const bg = (t: number) => {
  const mix = (from: number, to: number) => Math.round(from + (to - from) * t);
  return `rgb(${mix(255, 0x36)}, ${mix(255, 0x3c)}, ${mix(255, 0x1f)})`;
};

export default function HeroScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect = wrapper.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;

      // Phase 1: hero fades up and out
      const out = ramp(p, 0.05, 0.3);
      if (heroRef.current) {
        heroRef.current.style.opacity = String(1 - out);
        heroRef.current.style.transform = `translateY(${-60 * out}px) scale(${1 - 0.05 * out})`;
      }

      // Photo slowly pushes in and fades with the hero
      if (photoRef.current) {
        photoRef.current.style.opacity = String(HERO_PHOTO_OPACITY * (1 - out));
        photoRef.current.style.transform = `scale(${1 + 0.15 * ramp(p, 0, 0.35)})`;
      }

      // Phase 2: background deepens
      if (panelRef.current) panelRef.current.style.backgroundColor = bg(ramp(p, 0.15, 0.4));

      // Phase 3: tagline words arrive one at a time, then hold
      wordRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = ramp(p, 0.35 + i * 0.13, 0.48 + i * 0.13);
        el.style.opacity = String(t);
        el.style.transform = `translateY(${30 * (1 - t)}px)`;
        el.style.filter = `blur(${8 * (1 - t)}px)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  // Arrow click: glide to the full tagline, hold a beat, then on to the next section.
  // Any user input (wheel, touch, key) cancels the glide.
  const scrollToTagline = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const travel = wrapper.offsetHeight - window.innerHeight;
    const taglineY = wrapperTop + travel * 0.8;
    const nextSectionY = wrapperTop + wrapper.offsetHeight - 72; // 72 = shrunk header

    let frame = 0;
    let timer = 0;
    const cancel = () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
    };
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", cancel);

    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const glide = (to: number, ms: number, done: () => void) => {
      const from = window.scrollY;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / ms);
        window.scrollTo(0, from + (to - from) * ease(t));
        if (t < 1) frame = requestAnimationFrame(step);
        else done();
      };
      frame = requestAnimationFrame(step);
    };

    glide(taglineY, 1600, () => {
      timer = window.setTimeout(() => glide(nextSectionY, 1100, cancel), 1200);
    });
  };

  const hero = (
    <div
      ref={heroRef}
      className="flex flex-col items-center text-center px-6"
      style={{ willChange: reduced ? undefined : "opacity, transform" }}
    >
      <h1
        className="leading-snug mb-6"
        style={{
          fontFamily: "var(--font-playfair)",
          color: "#a27946",
          fontSize: "clamp(2.5rem, 7.5vw, 4.5rem)",
          fontWeight: 600,
          letterSpacing: "0.03em",
          margin: 0,
        }}
      >
        Brazilian Waxing in Hanford, CA
      </h1>
      <p
        className="mt-6 mb-12 max-w-2xl text-lg leading-relaxed"
        style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
      >
        {GBP_SUBLINE}
      </p>
      <a
        href={GLOSSGENIUS_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "1.1rem 2.75rem",
          backgroundColor: "#415e07",
          color: "#ffffff",
          fontFamily: "var(--font-playfair)",
          fontSize: "0.95rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Book Now
      </a>
      {!reduced && (
        <button
          type="button"
          onClick={scrollToTagline}
          aria-label="Scroll down"
          className="mt-12 p-3 cursor-pointer rounded-full text-[#a27946] transition-colors hover:text-[#415e07]"
        >
          <svg
            aria-hidden
            className="animate-bounce"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
    </div>
  );

  const photo = (
    <div
      ref={photoRef}
      aria-hidden
      className="absolute inset-0"
      style={{ opacity: HERO_PHOTO_OPACITY, willChange: reduced ? undefined : "opacity, transform" }}
    >
      <Image src={HERO_PHOTO} alt="" fill sizes="100vw" loading="eager" style={{ objectFit: "cover" }} />
    </div>
  );

  const tagline = (
    <p
      className="flex flex-col items-center text-center leading-tight gap-2 px-6"
      style={{
        fontFamily: "var(--font-playfair)",
        color: "#c18939",
        fontSize: "clamp(2.75rem, 9vw, 5.5rem)",
        fontWeight: 600,
        letterSpacing: "0.03em",
        margin: 0,
      }}
    >
      {TAGLINE.map((word, i) => (
        <span
          key={word}
          ref={(el) => {
            wordRefs.current[i] = el;
          }}
          style={reduced ? undefined : { opacity: 0, willChange: "opacity, transform, filter" }}
        >
          {word}
        </span>
      ))}
    </p>
  );

  // Reduced motion: no pinning, just stack the two moments.
  if (reduced) {
    return (
      <>
        <section
          className="relative overflow-hidden flex items-center justify-center bg-white"
          style={{ minHeight: "calc(100svh - 104px)" }}
        >
          {photo}
          <div className="relative">{hero}</div>
        </section>
        <section className="flex items-center justify-center py-32" style={{ backgroundColor: "#363c1f" }}>
          {tagline}
        </section>
      </>
    );
  }

  return (
    <div ref={wrapperRef} className="relative" style={{ height: "300svh", marginTop: "-104px" }}>
      {/* Sits under the sticky header; padding keeps content clear of it */}
      <div
        ref={panelRef}
        className="sticky top-0 overflow-hidden bg-white"
        style={{ height: "100svh", paddingTop: "104px" }}
      >
        {photo}
        <div className="relative h-full">
          <div className="absolute inset-0 flex items-center justify-center">{hero}</div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">{tagline}</div>
        </div>
      </div>
    </div>
  );
}
