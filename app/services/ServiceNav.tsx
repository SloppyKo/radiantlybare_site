"use client";

import { useEffect, useRef, useState } from "react";

type Props = { categories: { id: string; title: string }[] };

// Sticky sub-header: pins under the shrunken header (72px) and highlights the section in view.
export default function ServiceNav({ categories }: Props) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Stuck state: the sentinel sits just above the bar, so once it scrolls under the header, the bar is pinned
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), {
      rootMargin: "-73px 0px 0px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Active section: the last category whose top has passed the bar
  useEffect(() => {
    const onScroll = () => {
      let current: string | null = null;
      for (const { id } of categories) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 180) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [categories]);

  // Keep the active pill visible in the horizontal scroller on mobile
  useEffect(() => {
    if (active) pillRefs.current[active]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden />
      <nav
        aria-label="Service categories"
        className={`sticky z-40 -mx-6 px-6 bg-white transition-[padding,box-shadow] duration-300 ${
          stuck ? "py-3 shadow-[0_1px_0_var(--color-divider)]" : "py-0"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex gap-3 overflow-x-auto sm:flex-wrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <a
                key={cat.id}
                ref={(el) => {
                  pillRefs.current[cat.id] = el;
                }}
                href={`#${cat.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 whitespace-nowrap text-sm transition-colors duration-300 hover:bg-[#a27946] hover:text-white ${
                  isActive ? "bg-[#a27946] text-white" : "text-[#a27946]"
                }`}
                style={{
                  fontFamily: "var(--font-playfair)",
                  border: "1px solid #a27946",
                  borderRadius: "999px",
                  padding: "0.45rem 1.1rem",
                  textDecoration: "none",
                }}
              >
                {cat.title}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
