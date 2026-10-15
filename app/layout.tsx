import type { Metadata } from "next";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { SITE_URL, jsonLd } from "./lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brazilian Waxing in Hanford, CA | Radiantly Bare",
    template: "%s | Radiantly Bare",
  },
  description:
    "Welcoming, licensed esthetician in downtown Hanford, CA specializing in Brazilian and bikini waxing, brow lamination, and lash lifts. Book online today.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Radiantly Bare",
    locale: "en_US",
    url: "/",
    images: [{ url: "/images/home_hero.webp", alt: "Radiantly Bare waxing studio in Hanford, CA" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${libreBaskerville.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {/* Reserves space for the fixed header */}
        <main className="flex-1" style={{ paddingTop: "104px" }}>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
