// Mirrors the GlossGenius menu (radiantlybare.glossgenius.com/services).
// GlossGenius is the source of truth — update here when prices change there.
export type Service = {
  name: string;
  price: number;
  minutes: number;
  description: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "brazilian-body-waxing",
    title: "Brazilian & Body Waxing",
    image: "/images/brazillian.webp",
    imageAlt: "Brazilian wax in Hanford, CA",
    services: [
      {
        name: "Brazilian Wax",
        price: 70,
        minutes: 30,
        description:
          "Female anatomy. Removal of all hair from both the front and back side. If you want to leave a little, just let me know! A $25 deposit is required to book.",
      },
      {
        name: "Bikini Line Wax",
        price: 48,
        minutes: 20,
        description:
          "Removal of all hair that would show when wearing a bikini. Perfect if you're curious about trying a Brazilian.",
      },
      { name: "Bum Wax", price: 35, minutes: 10, description: "Removal of all hair on your rear end!" },
      { name: "Underarm Wax", price: 25, minutes: 10, description: "Removal of all underarm hair." },
      {
        name: "Breast Wax",
        price: 12,
        minutes: 10,
        description: "Removal of the hair right around the areola on both breasts.",
      },
      {
        name: "Full Stomach/Chest Wax",
        price: 60,
        minutes: 20,
        description: "Under the breast line to the top of the bikini.",
      },
      { name: "Full Back Wax", price: 60, minutes: 30, description: "Removal of hair across the full back." },
      { name: "Full Arms Wax", price: 55, minutes: 30, description: "Hands and fingers up to the shoulders." },
      { name: "Lower Leg Wax", price: 55, minutes: 20, description: "Top of the knees down to the ankles." },
    ],
  },
  {
    id: "face-waxing",
    title: "Face Waxing",
    image: "/images/eyebrows.webp",
    imageAlt: "Eyebrow waxing in Hanford, CA",
    services: [
      { name: "Eyebrow Wax", price: 23, minutes: 15, description: "Wax and trim if needed." },
      {
        name: "Eyebrow Wax & Tint",
        price: 32,
        minutes: 20,
        description: "Brow wax and trim with a tint to define and fill in the brows.",
      },
      { name: "Full Face Wax", price: 50, minutes: 30, description: "Brows, sideburns, upper lip, chin, and cheeks!" },
      { name: "Upper Lip Wax", price: 12, minutes: 10, description: "Stache be gone!" },
      {
        name: "Sideburn Wax",
        price: 20,
        minutes: 10,
        description: "The best way to get rid of unwanted sideburn hair.",
      },
      {
        name: "Nostril Wax",
        price: 12,
        minutes: 10,
        description: "Removal of hair from the front section of the nostrils.",
      },
      {
        name: "Ear Hair Wax",
        price: 12,
        minutes: 10,
        description: "Waxing of the hair on the outside of the ears and around the ear canal.",
      },
    ],
  },
  {
    id: "brows-lashes",
    title: "Brow Lamination & Lash Lifts",
    image: "/images/lash_lift.webp",
    imageAlt: "Lash lift in Hanford, CA",
    services: [
      {
        name: "Eyebrow Lamination, Tint & Wax",
        price: 85,
        minutes: 45,
        description:
          "Lamination of the brows to give a fuller appearance, tint to temporarily stain the skin and hair, and a brow wax for picture-perfect brows.",
      },
      {
        name: "Eyebrow Lamination & Wax",
        price: 75,
        minutes: 45,
        description: "Lamination for fuller-looking brows, finished with a brow wax.",
      },
      {
        name: "Lash Lift",
        price: 75,
        minutes: 45,
        description:
          "Want to wake up with curly lashes that last up to 6 weeks? Then a lash lift is just what you need! Please come with a clean face and no makeup.",
      },
      {
        name: "Lash Lift & Tint",
        price: 90,
        minutes: 45,
        description: "Wake up and be ready to go! Your lashes will be curled and tinted for up to 6 weeks.",
      },
    ],
  },
  {
    id: "skin-tanning",
    title: "Peels & Spray Tans",
    image: "/images/face_scrub.webp",
    imageAlt: "Facial peel treatment in Hanford, CA",
    services: [
      {
        name: "BioRePeel",
        price: 250,
        minutes: 45,
        description:
          "A peel unlike any other! A 35% TCA peel with zero downtime and no visible peeling. Great for pigmentation, acne, and aging skin. Stop exfoliating acids and retinol/tretinoin 5–7 days before your appointment.",
      },
      {
        name: "BioRePeel Package (4 Peels)",
        price: 575,
        minutes: 45,
        description:
          "Save $250 when booking a series of four BioRePeels, the recommended series for best results. Includes one dermaplane treatment.",
      },
      {
        name: "Spray Tan",
        price: 45,
        minutes: 30,
        description:
          "All-inclusive, custom luxury spray tan with barrier cream, pH-balancing prep spray, regular or rapid solution, finishing powder, and your choice of scent. Vegan and cruelty free. Shower, shave, and exfoliate the day before.",
      },
    ],
  },
];
