import { serviceCategories } from "./services";

// Single source of truth for business info. Keep in sync with the Google Business Profile.
export const SITE_URL = "https://www.radiantlybare.com";
export const BUSINESS_NAME = "Radiantly Bare";
export const PHONE_DISPLAY = "(559) 537-8058";
export const PHONE_E164 = "+15595378058";
export const GLOSSGENIUS_URL = "https://radiantlybare.glossgenius.com/services";

export const GBP_SUBLINE =
  "Welcoming esthetician specializing in waxing, including Brazilian and bikini waxes.";

export const GBP_DESCRIPTION =
  "Hi there. My name is Destinee. I am a licensed esthetician, located in Hanford, California. I specialize in Brazilian waxing, and offer other services as well. My goal for you is to leave Radiantly Bare with more confidence than what you had coming in. You are beautiful!";

export const ADDRESS = {
  street: "116 N Irwin St",
  city: "Hanford",
  region: "CA",
  postalCode: "93230",
  country: "US",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/radiantlybare/",
  instagram: "https://www.instagram.com/radiantlybare",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  description: `${GBP_SUBLINE} ${GBP_DESCRIPTION}`,
  url: SITE_URL,
  telephone: PHONE_E164,
  image: `${SITE_URL}/images/home_hero.webp`,
  logo: `${SITE_URL}/images/logo.PNG`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  areaServed: { "@type": "City", name: "Hanford, California" },
  founder: { "@type": "Person", name: "Destinee", jobTitle: "Licensed Esthetician" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Thursday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "17:00" },
  ],
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  potentialAction: {
    "@type": "ReserveAction",
    target: GLOSSGENIUS_URL,
    name: "Book an appointment",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Waxing hair removal service in Hanford, California",
    itemListElement: serviceCategories.map((cat) => ({
      "@type": "OfferCatalog",
      name: cat.title,
      url: `${SITE_URL}/services#${cat.id}`,
      itemListElement: cat.services.map((s) => ({
        "@type": "Offer",
        price: s.price,
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name: s.name, description: s.description, areaServed: "Hanford, CA" },
      })),
    })),
  },
};
