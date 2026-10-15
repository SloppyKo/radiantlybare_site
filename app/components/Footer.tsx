import Image from "next/image";
import Divider from "./Divider";
import { PHONE_DISPLAY, PHONE_E164 } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <Divider />
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-8">
        {/* Logo centered above columns */}
        <div className="flex justify-center mb-10">
          <Image
            src="/images/logo.PNG"
            alt="Radiantly Bare"
            width={160}
            height={64}
            style={{ height: "auto", width: "140px" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Location */}
          <div>
            <h3
              className="font-semibold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "#a27946", fontSize: "1.1rem" }}
            >
              Location
            </h3>
            <a
              href="https://maps.google.com/?q=116+N+Irwin+St,+Hanford,+CA+93230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-relaxed text-[#363c1f] transition-colors hover:text-[#a27946]"
              style={{ fontFamily: "var(--font-libre)", textDecoration: "underline" }}
            >
              116 N Irwin St
              <br />
              Hanford, CA 93230
            </a>
            <br />
            <a
              href={`tel:${PHONE_E164}`}
              className="text-sm leading-relaxed text-[#363c1f] transition-colors hover:text-[#a27946]"
              style={{ fontFamily: "var(--font-libre)", textDecoration: "underline" }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="font-semibold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "#a27946", fontSize: "1.1rem" }}
            >
              Hours
            </h3>
            <ul
              className="text-sm space-y-1"
              style={{ fontFamily: "var(--font-libre)", color: "#363c1f" }}
            >
              <li>Monday 9am – 7pm</li>
              <li>Tuesday 9am – 7pm</li>
              <li>Wednesday 8am – 5pm</li>
              <li>Thursday 8am – 5pm</li>
              <li>Friday 10am – 5pm</li>
              <li>Saturday – Sunday CLOSED</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="font-semibold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "#a27946", fontSize: "1.1rem" }}
            >
              Follow Us on Social Media
            </h3>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.facebook.com/radiantlybare/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#363c1f] transition-colors hover:text-[#a27946]"
                style={{ fontFamily: "var(--font-libre)", textDecoration: "underline" }}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/radiantlybare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#363c1f] transition-colors hover:text-[#a27946]"
                style={{ fontFamily: "var(--font-libre)", textDecoration: "underline" }}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SloppyKo credit */}
      <div className="flex flex-col items-center pt-6 pb-5 gap-2">
        <a
          href="https://www.sloppyko.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/bs_white.png"
            alt="SloppyKo Creative Studio"
            width={22}
            height={9}
            style={{ height: "auto", width: "22px", opacity: 0.25 }}
          />
        </a>
        <p style={{ fontSize: "0.55rem", color: "#9ca3af", letterSpacing: "0.04em", textAlign: "center" }}>
          © 2026 Radiantly Bare. All rights reserved&nbsp;&nbsp;|&nbsp;&nbsp;Built by SloppyKo. Creative Studio
        </p>
      </div>
    </footer>
  );
}
