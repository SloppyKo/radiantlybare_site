import type { Metadata } from "next";
import Image from "next/image";
import { GLOSSGENIUS_URL } from "../lib/site";
import { serviceCategories } from "../lib/services";
import ServiceNav from "./ServiceNav";

export const metadata: Metadata = {
  title: "Waxing & Esthetician Services in Hanford, CA",
  description:
    "Brazilian and bikini waxing, face and body waxing, brow lamination, lash lifts, peels, and spray tans from a welcoming, licensed esthetician in Hanford, CA.",
  alternates: { canonical: "/services" },
  openGraph: { siteName: "Radiantly Bare", url: "/services", images: ["/images/brazillian.webp"] },
};

const bookButton = {
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
} as const;

export default function ServicesPage() {
  return (
    <section className="bg-white pt-14 pb-60 px-6">
      <div className="mx-auto max-w-5xl">
        <h1
          className="mb-6 text-balance"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#a27946",
            fontSize: "clamp(2.25rem, 6vw, 3.25rem)",
            fontWeight: 600,
          }}
        >
          Waxing &amp; Esthetician Services in Hanford, CA
        </h1>
        <p
          className="text-base leading-relaxed mb-10 max-w-2xl"
          style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
        >
          Welcoming esthetician specializing in waxing, including Brazilian and
          bikini waxes. Every service is performed by Destinee, a licensed
          esthetician in downtown Hanford.
        </p>

        {/* Sticky category sub-header */}
        <ServiceNav categories={serviceCategories.map(({ id, title }) => ({ id, title }))} />

        <div className="flex flex-col gap-24 mt-20">
          {serviceCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-[150px]">
              <div className="flex items-center gap-6 mb-10">
                <div
                  className="relative shrink-0 rounded-full overflow-hidden"
                  style={{ width: "96px", height: "96px" }}
                >
                  <Image src={cat.image} alt={cat.imageAlt} fill sizes="96px" style={{ objectFit: "cover" }} />
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "#a27946",
                    fontSize: "clamp(1.75rem, 4.5vw, 2.5rem)",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {cat.title}
                </h2>
              </div>

              <ul className="flex flex-col">
                {cat.services.map((s) => (
                  <li key={s.name} className="py-6 border-t border-rule">
                    <div className="flex items-baseline gap-3">
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair)",
                          color: "#363c1f",
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          margin: 0,
                        }}
                      >
                        {s.name}
                      </h3>
                      <span aria-hidden className="flex-1 border-b border-dotted" style={{ borderColor: "#a27946" }} />
                      <span
                        className="shrink-0"
                        style={{ fontFamily: "var(--font-playfair)", color: "#a27946", fontSize: "1.25rem", fontWeight: 600 }}
                      >
                        ${s.price}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed mt-2 max-w-2xl"
                      style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
                    >
                      <span style={{ color: "#a27946" }}>{s.minutes} min</span>
                      &nbsp;&nbsp;·&nbsp;&nbsp;
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-24 text-center">
          <a href={GLOSSGENIUS_URL} target="_blank" rel="noopener noreferrer" style={bookButton}>
            Book Now
          </a>
          <p className="text-xs" style={{ fontFamily: "var(--font-libre)", color: "#6b6f5c" }}>
            Current pricing and availability are always shown on the booking page.
          </p>
        </div>
      </div>
    </section>
  );
}
