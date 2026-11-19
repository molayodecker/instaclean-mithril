export const LOGO =
  "/images/logo-inverse.webp";

export const SUPPORT_TEL = "+233544415766";
export const SUPPORT_DISPLAY = "+233 54 441 5766";
export const WHATSAPP = "https://wa.me/233246326939";
export const WHATSAPP_DISPLAY = "+233 24 632 6939";
export const EMAIL = "info@tryinstaclean.com";
export const APP_LINK = "https://onelink.to/ew8zar";
export const CLEANER_HELP =
  "https://help.tryinstaclean.com/help/category/instacleaners/";

export const images = {
  hero: "/images/hero-team.webp",
  living: "/images/living-room-mopping.webp",
  kitchen: "/images/kitchen-cleaning.webp",
  office: "/images/office-cleaning.webp",
  housekeeper: "/images/housekeeper-laundry.webp",
  nanny: "/images/nanny-portrait.webp",
  caregiver: "/images/caregiver-portrait.webp",
  cook: "/images/cook-portrait.webp",
  driver: "/images/driver-portrait.webp",
  trust: "/images/team-living-room.webp",
  shortlet: "/images/shortlet-bed.webp",
  join: "/images/cleaner-opportunity.webp",
};

export const services = [
  {
    slug: "regular-home-cleaning",
    room: "Living room",
    title: "Home cleaning",
    menu: "Regular home cleaning",
    summary:
      "Regular visits that keep floors, surfaces and shared spaces in order, week after week.",
    href: "/services/regular-home-cleaning",
    link: "About home cleaning",
    image: images.living,
    alt: "Instaclean cleaner in a navy polo mopping the tiled floor of a bright Accra living room",
    position: "50% 40%",
  },
  {
    slug: "deep-cleaning",
    room: "Kitchen",
    title: "Deep cleaning",
    menu: "Deep cleaning",
    summary:
      "A thorough reset for kitchens, bathrooms and the hard-to-reach corners a routine visit leaves alone.",
    href: "/services/deep-cleaning",
    link: "About deep cleaning",
    image: images.kitchen,
    alt: "Instaclean cleaner wiping down a marble kitchen counter in an Accra home",
    position: "35% 50%",
  },
  {
    slug: "office-cleaning",
    room: "Office",
    title: "Office cleaning",
    menu: "Office cleaning",
    summary:
      "Cleaning that keeps your workplace tidy and welcoming for the people who work there and the people who visit.",
    href: "/services/office-cleaning",
    link: "About office cleaning",
    image: images.office,
    alt: "Instaclean cleaner wiping a glass meeting table in a bright Accra office",
    position: "50% 40%",
  },
  {
    slug: "move-in-move-out",
    room: "Move",
    title: "Move-in / move-out",
    menu: "Move-in / move-out",
    summary:
      "A full clean when a home changes hands, so the next person walks into a reset space.",
    href: "/services/move-in-move-out",
    link: "About move-in cleaning",
    image: images.living,
    alt: "Instaclean cleaner preparing a bright Accra living room",
    position: "50% 40%",
  },
  {
    slug: "post-construction",
    room: "Build",
    title: "Post-construction",
    menu: "Post-construction",
    summary:
      "Dust, residue and the mess a build leaves behind, cleared before you move back in.",
    href: "/services/post-construction",
    link: "About post-construction cleaning",
    image: images.kitchen,
    alt: "A finished Accra kitchen after a thorough clean",
    position: "35% 50%",
  },
  {
    slug: "airbnb-turnover",
    room: "Short-let",
    title: "Airbnb turnover",
    menu: "Airbnb turnover",
    summary:
      "A guest-ready reset between stays: beds, bathrooms, kitchen and the details a host is judged on.",
    href: "/services/airbnb-turnover",
    link: "About Airbnb turnovers",
    image: images.shortlet,
    alt: "Instaclean housekeeper smoothing fresh white bedding in a short-let bedroom",
    position: "50% 50%",
  },
] as const;

export const staff = [
  {
    title: "Housekeepers",
    badge: "Placement",
    summary: "Ongoing upkeep of your home, arranged as a placement.",
    image: images.housekeeper,
    alt: "Housekeeper in a navy polo folding ironed shirts on the patio of an Accra home",
  },
  {
    title: "Nannies",
    badge: "Visits",
    summary: "Childcare support. Share the schedule before anyone is introduced.",
    image: images.nanny,
    alt: "Nanny in a navy polo reading a picture book with a smiling toddler",
  },
  {
    title: "Elderly caregivers",
    badge: "Visits",
    summary: "Help for an older relative. We confirm what they need first.",
    image: images.caregiver,
    alt: "Caregiver in a navy polo serving tea to an elderly woman on a shaded veranda",
  },
  {
    title: "Cooks",
    badge: "By quote",
    summary: "Agree on the meals, the kitchen and the days up front.",
    image: images.cook,
    alt: "Home cook in chef whites stirring a pot of jollof rice in a bright kitchen",
  },
  {
    title: "Personal drivers",
    badge: "By quote",
    summary: "Arranged by quote, separate from the cleaning services.",
    image: images.driver,
    alt: "Personal driver in a navy polo holding open a car door in a residential driveway",
  },
] as const;

export const checks = [
  {
    title: "Ghana Card identity check",
    body: "Applicants verify who they are with their Ghana Card, plus a facial check when that step asks for one.",
  },
  {
    title: "A client reference",
    body: "Every application names at least one past client with a Ghana phone number.",
  },
  {
    title: "Background-check consent",
    body: "No one can apply without giving it. It is not the same as a police clearance on every profile.",
  },
  {
    title: "Profile review",
    body: "Our team reviews each application before anyone is approved to join.",
  },
  {
    title: "Optional booking cover",
    body: "Add it at checkout on eligible cleaning jobs. It is an add-on, not insurance.",
  },
] as const;

export const steps = [
  {
    title: "Tell us the job",
    body: "Ask for a quote or start a booking for a home, an office or ongoing help. You don't need an account to ask.",
  },
  {
    title: "We confirm the details",
    body: "The service, the timing and the catalog price are agreed before anyone is scheduled.",
  },
  {
    title: "Your professional arrives",
    body: "If plans change, call customer support and a person will pick up.",
  },
] as const;

export const faqs = [
  {
    q: "How do I get a quote?",
    a: "Fill in the quote form on this page. You don't need an account.",
  },
  {
    q: "How do I book?",
    a: "Web booking is being rebuilt. In the meantime, Book a service shows the current booking notice and the Instaclean app is ready to use.",
  },
  {
    q: "Which number reaches a person?",
    a: "Customer support on +233 54 441 5766. WhatsApp +233 24 632 6939 is an automated assistant, not the support line.",
  },
  {
    q: "Are the prices on this website final?",
    a: "Starting prices, when shown, come from the service catalog. Checkout calculates the amount for the visit you confirm.",
  },
] as const;

export const serviceOptions = [
  "Regular home cleaning",
  "Deep cleaning",
  "Office cleaning",
  "Move-in / move-out",
  "Post-construction",
  "Airbnb turnover",
  "Housekeeper",
  "Nanny",
  "Caregiver",
  "Driver",
  "Cook",
] as const;

export const frequencies = [
  "Not sure yet",
  "One visit",
  "Weekly",
  "More than once a week",
  "Monthly",
] as const;

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
