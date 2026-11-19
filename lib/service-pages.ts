export type ServicePage = {
  slug: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
  audience: string;
  includes: { title: string; body: string }[];
  price: string;
  priceNote: string;
  addons: string;
  faqs: { q: string; a: string; href?: string; hrefLabel?: string }[];
  serviceName: string;
};

const priceNote =
  "That is the lowest active list price for this service in the booking catalog. Checkout calculates what you pay, so confirm the rooms before you book.";

export const servicePages: ServicePage[] = [
  {
    slug: "regular-home-cleaning",
    title: "Regular home cleaning in Accra",
    lede: "A steady, professional clean that keeps your Accra home in order.",
    image: "/images/living-room-mopping.webp",
    alt: "Instaclean cleaner in a navy polo mopping the tiled floor of a bright Accra living room",
    audience: "Apartments and houses, busy households, and anyone who wants the same visit weekly or monthly.",
    includes: [
      { title: "Dusting", body: "Surfaces within reach get dusted." },
      { title: "Floors", body: "Floors are vacuumed or mopped." },
      { title: "Kitchen", body: "Counters and the outside of appliances are wiped down." },
      { title: "Bathrooms", body: "Bathrooms get cleaned." },
      { title: "Trash", body: "Bins are emptied." },
    ],
    price: "Priced at checkout",
    priceNote: "When this service is active in the booking catalog, booking shows its starting list price. Checkout calculates what you pay, so confirm the rooms before you book.",
    addons: "Laundry, the inside of the fridge or oven, and extra rooms.",
    faqs: [
      { q: "Do I need to be home for the visit?", a: "Tell us how the professional should get in when you request the visit. Support can confirm what they need before they arrive." },
      { q: "Where do I see the price?", a: "When this service is active in the catalog, booking shows its starting list price. The amount due is calculated at checkout." },
    ],
    serviceName: "Regular Home Cleaning",
  },
  {
    slug: "deep-cleaning",
    title: "Deep cleaning in Accra",
    lede: "Extra time on kitchens, bathrooms and the spots routine visits leave alone.",
    image: "/images/kitchen-cleaning.webp",
    alt: "Instaclean cleaner wiping down a marble kitchen counter in an Accra home",
    audience: "Homes that need a reset, homes getting ready for guests, and homes that have gone a long time between cleans.",
    includes: [
      { title: "Everything in a regular clean", body: "The routine cleaning scope comes first." },
      { title: "Kitchen and bathroom detail", body: "Closer work in the two rooms where buildup collects." },
      { title: "Skirting and door frames", body: "Cleaned wherever they can be reached." },
      { title: "Cabinet fronts", body: "The outside of cabinets gets wiped down." },
    ],
    price: "From ₵150",
    priceNote,
    addons: "Interior windows, the inside of appliances, and the balcony.",
    faqs: [
      { q: "How is this different from regular cleaning?", a: "A deep clean spends more time on buildup. List the rooms and add-ons in your quote so the visit fits your home." },
      { q: "Is the starting price what I pay?", a: "It is the same starting list price booking uses. The amount due is calculated at checkout." },
    ],
    serviceName: "Deep Cleaning",
  },
  {
    slug: "office-cleaning",
    title: "Office cleaning in Accra",
    lede: "A presentable workplace without hiring your own cleaning team.",
    image: "/images/office-cleaning.webp",
    alt: "Instaclean cleaner wiping a glass meeting table in a bright Accra office",
    audience: "Small offices, clinics and studios, and teams that want a recurring visit.",
    includes: [
      { title: "Desks and surfaces", body: "Desks and other surfaces within reach get cleaned." },
      { title: "Floors", body: "Office floors are cleaned." },
      { title: "Kitchen or pantry", body: "Shared kitchen or pantry surfaces are wiped down." },
      { title: "Washrooms", body: "Washrooms get cleaned." },
      { title: "Trash", body: "Rubbish is taken out." },
    ],
    price: "From ₵120",
    priceNote,
    addons: "Cleaning after hours, meeting rooms, and extra washrooms.",
    faqs: [
      { q: "Can we set this up as a contract?", a: "Yes. Send the business quote form and tell us how often the office needs cleaning.", href: "/business#quote", hrefLabel: "Business quote form" },
      { q: "Is the starting price what I pay?", a: "It is the same starting list price booking uses. The amount due is calculated at checkout." },
    ],
    serviceName: "Office Cleaning",
  },
  {
    slug: "move-in-move-out",
    title: "Move-in and move-out cleaning",
    lede: "A detailed clean for the home you are handing over or moving into.",
    image: "/images/services-move-out.webp",
    alt: "Instaclean cleaner in white gloves wiping out an empty wardrobe beside stacked moving boxes",
    audience: "Tenants, landlords, and families moving house.",
    includes: [
      { title: "Empty rooms", body: "Dusting and floors in rooms that have been cleared." },
      { title: "Kitchen and bathrooms", body: "Both rooms are cleaned." },
      { title: "Inside cabinets", body: "Cleaned inside once they are empty." },
      { title: "Inside appliances", body: "Cleaned inside when they can be reached." },
    ],
    price: "From ₵200",
    priceNote,
    addons: "Marks on walls, windows, and the outdoor entrance.",
    faqs: [
      { q: "Does the home need to be empty?", a: "An empty home is easier to clean thoroughly. Tell us what is still in the space when you ask for a quote." },
      { q: "Is the starting price what I pay?", a: "It is the same starting list price booking uses. The amount due is calculated at checkout." },
    ],
    serviceName: "Move-in / Move-out Cleaning",
  },
  {
    slug: "post-construction",
    title: "Post-construction cleaning in Accra",
    lede: "Dust and debris cleared after building work. We see the site before confirming.",
    image: "/images/services-post-construction.webp",
    alt: "Instaclean cleaner vacuuming construction dust from a newly tiled floor beside a ladder",
    audience: "Home renovations, newly finished units, and property managers.",
    includes: [
      { title: "Dust and loose debris", body: "Cleared from the rooms that were worked on." },
      { title: "Floors", body: "Floors are cleaned once the debris is up." },
      { title: "Glass and fixtures", body: "Wiped where they are safe to wipe." },
      { title: "A walkthrough", body: "We point out anything that still needs a specialist trade." },
    ],
    price: "Priced by quote",
    priceNote: "This one is quoted first because every site is different. It is not priced as a standard catalog item, so confirm the rooms in your quote.",
    addons: "Paint splatter, window tracks, and a second visit once the trades have finished.",
    faqs: [
      { q: "Can I book this from the standard list?", a: "Treat it as a quote. Sites differ, so we confirm the scope before anyone is scheduled." },
    ],
    serviceName: "Post-Construction Cleaning",
  },
  {
    slug: "airbnb-turnover",
    title: "Airbnb turnover cleaning in Accra",
    lede: "Your short-let made guest-ready between one stay and the next.",
    image: "/images/shortlet-bed.webp",
    alt: "Instaclean housekeeper smoothing fresh white bedding in a short-let bedroom",
    audience: "Airbnb hosts, short-let operators, and property managers.",
    includes: [
      { title: "Guest areas reset", body: "The spaces guests use are put back in order." },
      { title: "Kitchen and bathrooms", body: "Both get cleaned for the next stay." },
      { title: "Floors", body: "Floors are cleaned throughout." },
      { title: "Your trash and linen notes", body: "We follow the instructions you leave for bins and linen." },
    ],
    price: "From ₵120",
    priceNote,
    addons: "Laundry, restocking notes, and same-day turnovers.",
    faqs: [
      { q: "Can I set up a recurring schedule as a host?", a: "Yes. Send the property name, its location and how often turnovers happen through the business quote form.", href: "/business#quote", hrefLabel: "Business quote form" },
      { q: "Is the starting price what I pay?", a: "It is the same starting list price booking uses. The amount due is calculated at checkout." },
    ],
    serviceName: "Airbnb Turnover Cleaning",
  },
];

export function servicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
