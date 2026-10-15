import Image from "next/image";
import Link from "next/link";
import HeroScroll from "./components/HeroScroll";
import { GBP_DESCRIPTION } from "./lib/site";

export default function Home() {
  return (
    <>
      {/* ── Hero → pinned tagline reveal ── */}
      <HeroScroll />

      {/* ── Who We Are ── */}
      <section className="pt-28 pb-60 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Mobile: column / Desktop: row */}
          <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-28">

            {/* Tombstone image */}
            <div className="shrink-0">
              <div
                className="relative overflow-hidden"
                style={{
                  width: "340px",
                  height: "490px",
                  borderTopLeftRadius: "170px",
                  borderTopRightRadius: "170px",
                }}
              >
                <Image
                  src="/images/home_hero.webp"
                  alt="Radiantly Bare waxing studio in Hanford, CA"
                  fill
                  sizes="340px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Text — centered on mobile, left on desktop */}
            <div className="flex flex-col items-center text-center gap-6 max-w-md sm:items-start sm:text-left">
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "#a27946",
                  fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Who We Are
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
              >
                {GBP_DESCRIPTION}
              </p>
              <Link
                href="/services"
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
                  marginTop: "1rem",
                }}
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
