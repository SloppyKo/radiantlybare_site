import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Waxing, Brow, and Lash Portfolio in Hanford, CA",
  description:
    "See real Brazilian waxing, brow lamination, and lash lift results, plus a look inside Radiantly Bare, a welcoming waxing studio in downtown Hanford, CA.",
  alternates: { canonical: "/portfolio" },
  openGraph: { siteName: "Radiantly Bare", url: "/portfolio", images: ["/images/lashes.webp"] },
};

const images = [
  { src: "/images/lashes.webp", alt: "Lash lift results at Radiantly Bare in Hanford, CA" },
  { src: "/images/lobby_2.webp", alt: "Radiantly Bare studio lobby in Hanford, CA" },
  { src: "/images/tools.webp", alt: "Brow tweezers, scissors, and spoolie" },
  { src: "/images/room.webp", alt: "Waxing treatment room at Radiantly Bare" },
  { src: "/images/thigh_wax.webp", alt: "Leg waxing service in Hanford, CA" },
  { src: "/images/cream.webp", alt: "Skincare products used at Radiantly Bare" },
  { src: "/images/face_scrub.webp", alt: "BioRePeel facial treatment in Hanford, CA" },
  { src: "/images/armpit.webp", alt: "Underarm waxing in Hanford, CA" },
  { src: "/images/eyebrows.webp", alt: "Eyebrow waxing and shaping" },
  { src: "/images/destinee.webp", alt: "Destinee, licensed esthetician at Radiantly Bare" },
  { src: "/images/brows_pov.webp", alt: "Eyebrow lamination close-up" },
  { src: "/images/armpit_close.webp", alt: "Underarm waxing close-up" },
];

export default function PortfolioPage() {
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
          Waxing, Brow, and Lash Portfolio in Hanford, CA
        </h1>
        <p
          className="text-base leading-relaxed mb-14 max-w-2xl"
          style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
        >
          Take a look inside Radiantly Bare, a welcoming waxing studio in
          downtown Hanford. Browse real results from Brazilian and body waxing,
          brow lamination, and lash lifts, plus a peek at the calm, private
          space where Destinee, a licensed esthetician, cares for every client.
        </p>

        {/* Pinterest-style masonry via CSS columns */}
        <div className="columns-2 sm:columns-3 gap-3">
          {images.map((img) => (
            <div
              key={img.src}
              className="break-inside-avoid mb-3 relative transition-[transform,box-shadow] duration-700 ease-out hover:z-10 hover:shadow-xl motion-safe:hover:scale-[1.03]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                sizes="(max-width: 640px) 50vw, 33vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
