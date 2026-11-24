export interface CatalogItem {
  id: string;
  order: number;
  title: string;
  shortCategory: string;
  description: string;
  priceHighlight?: string;
  imagePath: string;
  imageFilename: string;
  imageAlt: string;
  quoteSelectValue: string;
  suggestedProductName: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  retailPrice: string;
  bulkPrice: string;
  bulkMoq: string;
  includes: string[];
  featured?: boolean;
  quoteSelectValue: string;
  suggestedProductName: string;
  defaultBulkQuantity: number;
}

export interface TrustPillar {
  id: string;
  title: string;
  detail: string;
  iconName: "leaf" | "award" | "heart" | "mapPin";
}

export interface TestimonialItem {
  id: string;
  author: string;
  occasion: string;
  quote: string;
  rating: number;
}

export interface BulkSegment {
  id: string;
  title: string;
  occasions: string;
  description: string;
  moqNote: string;
}

export interface StudioMediaItem {
  id: string;
  type: "photo" | "video";
  src: string;
  filename: string;
  title: string;
  category: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "small-batch",
    title: "Fresh Small-Batch Craft",
    detail:
      "Hand-tempered to order in Bhopal for optimal aroma, snap, and freshness.",
    iconName: "heart",
  },
  {
    id: "clean-ingredients",
    title: "100% Natural & Clean",
    detail:
      "Pure cocoa butter, slow-roasted nuts, and zero artificial preservatives.",
    iconName: "leaf",
  },
  {
    id: "custom-bespoke",
    title: "Custom Name & Branding",
    detail:
      "Bespoke names, edible gold pearls, and custom gift sleeves for every milestone.",
    iconName: "award",
  },
  {
    id: "bhopal-mp",
    title: "Bhopal Pickup & MP Bulk",
    detail:
      "Studio pickup in Nehru Nagar, local delivery in Bhopal, and bulk across MP.",
    iconName: "mapPin",
  },
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "customized-name-chocolates",
    order: 1,
    title: "Customized Name Chocolates",
    shortCategory: "Signature Personalization",
    description:
      "Dark & milk chocolate bars/slabs personalized with custom names, edible flowers & gold pearls.",
    imagePath: "/assets/02_Images/aachoclates-photo-26.jpg",
    imageFilename: "aachoclates-photo-26.jpg",
    imageAlt:
      "Customized dark and milk chocolate bars personalized with engraved names, dried edible flowers, and gold pearls",
    quoteSelectValue: "Customized Name Chocolates",
    suggestedProductName: "Custom Name Chocolate Bar",
  },
  {
    id: "floral-dry-fruit-discs",
    order: 2,
    title: "Artisanal Floral & Dry-Fruit Disc Chocolates",
    shortCategory: "Hand-Tempered Mendiants",
    description:
      "Hand-tempered mendiants topped with slow-roasted cashews, almonds, pumpkin seeds & dried rose petals.",
    imagePath: "/assets/02_Images/aachoclates-photo-19.jpg",
    imageFilename: "aachoclates-photo-19.jpg",
    imageAlt:
      "Artisanal chocolate mendiant discs topped with roasted cashews, almonds, pumpkin seeds, and dried rose petals",
    quoteSelectValue: "Artisanal Floral & Dry-Fruit Disc Chocolates",
    suggestedProductName: "Rose & Roasted Nut Disc Box",
  },
  {
    id: "dry-cakes-kunafa-bakes",
    order: 3,
    title: "Artisanal Dry Cakes & Kunafa Bakes",
    shortCategory: "Fresh Studio Bakes",
    description:
      "Walnut Dry Cake, Kunafa Specialty Bakes & Atta-Jaggery Healthy Cake baked fresh in small batches.",
    priceHighlight: "₹350–₹650",
    imagePath: "/assets/02_Images/aachoclates-photo-07.jpg",
    imageFilename: "aachoclates-photo-07.jpg",
    imageAlt:
      "Golden artisanal Kunafa specialty bakes alongside rich walnut dry cake and atta-jaggery healthy loaf cake",
    quoteSelectValue: "Artisanal Dry Cakes & Kunafa Bakes",
    suggestedProductName: "Kunafa Bake / Walnut Dry Cake",
  },
  {
    id: "gift-hampers-stirrers",
    order: 4,
    title: "Curated Gift Hampers & Hot Chocolate Stirrer Spoons",
    shortCategory: "Festive & Occasion Gifting",
    description:
      "Bespoke festive hampers and rich couverture stirrer spoons crafted for warm milk indulgence.",
    imagePath: "/assets/02_Images/aachoclates-photo-21.jpg",
    imageFilename: "aachoclates-photo-21.jpg",
    imageAlt:
      "Curated artisanal gift hamper box paired with handmade couverture hot chocolate stirrer spoons",
    quoteSelectValue: "Curated Gift Hampers & Hot Chocolate Stirrer Spoons",
    suggestedProductName: "Curated Gift Hamper with Hot Choco Stirrers",
  },
  {
    id: "truffle-squares-loaded-slabs",
    order: 5,
    title: "Gold-Pearl Dark Chocolate Truffle Squares & Dry-Fruit Loaded Slabs",
    shortCategory: "Celebration Reserve",
    description:
      "Silk-smooth dark truffle squares finished with edible gold pearls and nut-loaded chocolate slabs.",
    imagePath: "/assets/02_Images/aachoclates-photo-23.jpg",
    imageFilename: "aachoclates-photo-23.jpg",
    imageAlt:
      "Dark chocolate truffle squares adorned with edible gold pearls beside nut-loaded artisanal chocolate slabs",
    quoteSelectValue:
      "Gold-Pearl Dark Chocolate Truffle Squares & Dry-Fruit Loaded Slabs",
    suggestedProductName: "Gold-Pearl Truffle & Loaded Slab Box",
  },
  {
    id: "stuffed-dates-protein-laddus",
    order: 6,
    title:
      "Royal Stuffed Dates, 8g Protein Choco Laddus & Dry-Fruit Energy Bar Sticks",
    shortCategory: "Zero Refined Sugar",
    description:
      "Zero refined sugar confections packed with 10+ roasted nuts, seeds, and wholesome cacao.",
    imagePath: "/assets/02_Images/aachoclates-photo-18.jpg",
    imageFilename: "aachoclates-photo-18.jpg",
    imageAlt:
      "Royal nut-stuffed dates, 8g protein choco laddus, and roasted dry-fruit energy bar sticks",
    quoteSelectValue:
      "Royal Stuffed Dates, 8g Protein Choco Laddus & Dry-Fruit Energy Bar Sticks",
    suggestedProductName: "8g Protein Choco Laddus & Royal Stuffed Dates",
  },
];

const PHOTO_LABELS: Array<{ title: string; category: string }> = [
  { title: "Customized Name Chocolate Bar", category: "Personalization" },
  { title: "Floral & Dry-Fruit Mendiants", category: "Floral Discs" },
  { title: "Kunafa Specialty & Walnut Dry Cake", category: "Studio Bakes" },
  { title: "Curated Festive Gift Hamper", category: "Luxury Hampers" },
  { title: "Gold-Pearl Dark Truffle Squares", category: "Celebration Reserve" },
  { title: "Royal Stuffed Dates & 8g Protein Laddus", category: "Zero Sugar" },
  { title: "Hot Chocolate Couverture Stirrer Spoons", category: "Warm Drinks" },
  { title: "Roasted Almond & Pistachio Loaded Slab", category: "Nutty Slabs" },
  { title: "Bespoke Anniversary Name Engraving", category: "Personalization" },
  { title: "Dried Rose Petal & Cashew Discs", category: "Floral Discs" },
  { title: "Atta-Jaggery Wholesome Loaf Bake", category: "Studio Bakes" },
  { title: "Nikah & Wedding Favor Ribbon Boxes", category: "Wedding Favors" },
  { title: "Corporate Gifting Reserve Assortment", category: "Corporate" },
  { title: "Dry-Fruit Energy Bar Sticks", category: "Zero Sugar" },
  { title: "Dark Cacao & Sea Salt Pralines", category: "Celebration Reserve" },
  { title: "Hand-Tempered Festive Trousseau Box", category: "Luxury Hampers" },
  { title: "Double Nut Crisp & Seed Bark", category: "Nutty Slabs" },
  { title: "Pistachio Rose Kunafa Bake Tray", category: "Studio Bakes" },
  { title: "8g Protein Choco Laddu Assortment", category: "Healthy Treats" },
  { title: "Ruby & Gold Pearl Praline Reserve", category: "Celebration Reserve" },
  { title: "Small-Batch Tempering Craft in Bhopal", category: "Studio Craft" },
  { title: "Signature Grand Luxe Celebration Hamper", category: "Luxury Hampers" },
  { title: "Festive Corporate Gift Assortment", category: "Corporate" },
  { title: "Protein & Dry-Fruit Energy Sticks", category: "Zero Sugar" },
  { title: "Dark Cacao Sea-Salt Pralines", category: "Celebration Reserve" },
  { title: "Bespoke Celebration Truffles Box", category: "Luxury Hampers" },
  { title: "Grand Luxe Celebration Hamper", category: "Luxury Hampers" },
  { title: "Rose Petal & Nut Mendiant Discs", category: "Floral Discs" },
  { title: "Walnut & Jaggery Dry Cake Loaf", category: "Studio Bakes" },
  { title: "Golden Pistachio Kunafa Tray", category: "Studio Bakes" },
  { title: "Gold-Pearl Truffle Slab Selection", category: "Celebration Reserve" },
  { title: "Royal Stuffed Dates & Nut Rolls", category: "Zero Sugar" },
  { title: "Custom Name Bar with Gold Pearls", category: "Personalization" },
  { title: "Small-Batch Tempering in the Atelier", category: "Studio Craft" },
];

const padPhotoNum = (num: number) => String(num).padStart(2, "0");

const photoExtension = (num: number) => (num <= 27 ? "jpg" : "jpeg");

const buildPhotoItem = (
  num: number,
  meta: { title: string; category: string }
): StudioMediaItem => {
  const numStr = padPhotoNum(num);
  const filename = `aachoclates-photo-${numStr}.${photoExtension(num)}`;
  return {
    id: `photo-${numStr}`,
    type: "photo",
    src: `/assets/02_Images/${filename}`,
    filename,
    title: meta.title,
    category: meta.category,
  };
};

const CRAFT_PHOTO_NUMS = [27, 28, 29, 30, 31, 32, 33, 34];

const CATALOG_PHOTO_FILES = new Set(
  CATALOG_ITEMS.map((item) => item.imageFilename)
);

const CRAFT_PHOTO_FILES = new Set(
  CRAFT_PHOTO_NUMS.map(
    (num) => `aachoclates-photo-${padPhotoNum(num)}.${photoExtension(num)}`
  )
);

export const CRAFT_STUDIO_PHOTOS: StudioMediaItem[] = CRAFT_PHOTO_NUMS.map(
  (num) => buildPhotoItem(num, PHOTO_LABELS[num - 1])
);

export const STUDIO_PHOTOS: StudioMediaItem[] = PHOTO_LABELS.map((meta, index) =>
  buildPhotoItem(index + 1, meta)
).filter(
  (photo) =>
    !CATALOG_PHOTO_FILES.has(photo.filename) &&
    !CRAFT_PHOTO_FILES.has(photo.filename)
);

const VIDEO_SPECS: Array<{ filename: string; title: string; category: string }> = [
  {
    filename: "hero-reel-1.mp4",
    title: "Handcrafted Tempering & Pouring Showcase",
    category: "Studio Reel",
  },
  {
    filename: "hero-reel-2.mp4",
    title: "Curated Luxury Hamper Assembly",
    category: "Hamper Reel",
  },
  {
    filename: "aachoclates-video-03.mp4",
    title: "Customized Name Bar Gold Pearl Finishing",
    category: "Personalization",
  },
  {
    filename: "aachoclates-video-04.mp4",
    title: "Floral & Dry-Fruit Disc Garnishing",
    category: "Craft Process",
  },
  {
    filename: "aachoclates-video-05.mp4",
    title: "Golden Kunafa Specialty Bake Unmolding",
    category: "Studio Bakes",
  },
  {
    filename: "aachoclates-video-06.mp4",
    title: "Hot Chocolate Stirrer Spoons in Warm Milk",
    category: "Warm Indulgence",
  },
  {
    filename: "aachoclates-video-07.mp4",
    title: "Gold-Pearl Truffle Square Detailing",
    category: "Celebration Reserve",
  },
  {
    filename: "aachoclates-video-09.mp4",
    title: "8g Protein Choco Laddus Small-Batch Prep",
    category: "Healthy Treats",
  },
  {
    filename: "aachoclates-video-10.mp4",
    title: "Wedding & Nikah Favor Ribbon Wrapping",
    category: "Wedding Favors",
  },
  {
    filename: "aachoclates-video-11.mp4",
    title: "Corporate Festive Box Packing Line",
    category: "Corporate Bulk",
  },
  {
    filename: "aachoclates-video-12.mp4",
    title: "Inside Niquehat Khan's Bhopal Atelier",
    category: "Our Atelier",
  },
];

export const STUDIO_VIDEOS: StudioMediaItem[] = VIDEO_SPECS.map((spec, idx) => ({
  id: `video-${String(idx + 1).padStart(2, "0")}`,
  type: "video",
  src: `/assets/03_Videos/${spec.filename}`,
  filename: spec.filename,
  title: spec.title,
  category: spec.category,
}));

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "entry-treat-box",
    name: "Entry Treat Box (4 pcs)",
    subtitle: "Thoughtful personal token or wedding welcome favor",
    retailPrice: "₹159",
    bulkPrice: "₹149",
    bulkMoq: "MOQ 15",
    includes: [
      "4 handcrafted floral discs or truffle squares",
      "Ribbon-tied warm parchment presentation",
      "Ideal for Haldi, Mehndi & desk favors",
    ],
    quoteSelectValue: "Entry Treat Box (4 pcs)",
    suggestedProductName: "Entry Treat Box (4 pcs)",
    defaultBulkQuantity: 15,
  },
  {
    id: "signature-celebration-box",
    name: "Signature Celebration Box (8–12 pcs)",
    subtitle: "Our most loved assortment for families & corporate teams",
    retailPrice: "₹499–₹699",
    bulkPrice: "₹450–₹580",
    bulkMoq: "MOQ 10",
    featured: true,
    includes: [
      "8–12 assorted floral discs, stuffed dates & truffles",
      "Option to include 8g Protein Choco Laddus",
      "Custom ribbon tag or festive sleeve branding",
    ],
    quoteSelectValue: "Signature Celebration Box (8–12 pcs)",
    suggestedProductName: "Signature Celebration Box (8–12 pcs)",
    defaultBulkQuantity: 10,
  },
  {
    id: "grand-luxe-hamper",
    name: "Grand Luxe Hamper",
    subtitle: "Statement gifting built around your celebration theme",
    retailPrice: "₹1,299–₹1,599",
    bulkPrice: "₹1,050–₹1,250",
    bulkMoq: "MOQ 10+ / negotiable",
    includes: [
      "Custom Name Bar + 10–12 assorted artisanal pieces",
      "Choice of Artisanal Dry Cake or Hot Chocolate Stirrers",
      "Luxury keepsake hamper box with personalized card",
    ],
    quoteSelectValue: "Grand Luxe Hamper",
    suggestedProductName: "Grand Luxe Custom Hamper",
    defaultBulkQuantity: 10,
  },
];

export const BULK_SEGMENTS: BulkSegment[] = [
  {
    id: "weddings",
    title: "Weddings & Nikah Favors",
    occasions: "Haldi · Nikah · Sangeet · Trousseau Trays",
    description:
      "Color-coordinated ribbon boxes, couple-monogram or guest-name bars, and Royal Stuffed Dates curated for warm wedding hospitality.",
    moqNote: "MOQ 15+ favor boxes",
  },
  {
    id: "corporate",
    title: "Corporate & Festive Gifting",
    occasions: "Diwali · Eid · Client Milestones · Onboarding",
    description:
      "Clean-ingredient luxury hampers with custom company sleeve notes, structured bulk billing, and reliable dispatch schedules.",
    moqNote: "MOQ 10+ hampers",
  },
  {
    id: "retail-cafes",
    title: "Boutique Gift Shops & Cafes",
    occasions: "Wholesale Counter Bars · Stirrer Spoons · Kunafa",
    description:
      "Partner with our Bhopal kitchen for Hot Chocolate Stirrer Spoons, Protein Laddus, and Walnut/Atta-Jaggery Dry Cakes.",
    moqNote: "MOQ 15+ units · Negotiable",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ajeet-soni",
    author: "Ajeet Soni",
    occasion: "Artisanal Nutty Slabs",
    quote:
      "The artisanal nutty slabs are incredible. The dark chocolate is perfectly balanced—rich, smooth, and not overly sweet. You can instantly taste the pure, small-batch quality in every bite.",
    rating: 5,
  },
  {
    id: "teena-khan",
    author: "Teena Khan",
    occasion: "Family Celebration Box · Bhopal",
    quote:
      "Ordered the Assorted Grand Reserve Box for a family celebration. The packaging is absolutely premium, and the ruby heart pralines were a massive hit. It feels like a true luxury gifting experience right here in Bhopal.",
    rating: 5,
  },
  {
    id: "muskan-khan",
    author: "Muskan Khan",
    occasion: "Anniversary Cake & Custom Chocolates",
    quote:
      "A&A Chocolate completely elevated our anniversary. Their bespoke cake and handcrafted chocolates are visually stunning and taste even better. The craftsmanship is unmatched.",
    rating: 5,
  },
  {
    id: "shabnam-bee",
    author: "Shabnam Bee",
    occasion: "Pure Cocoa & Slow-Roasted Nuts",
    quote:
      "It is rare to find chocolates made with such clean, pristine ingredients. The slow-roasted nuts and pure cocoa butter make all the difference. My absolute go-to for artisanal sweets.",
    rating: 5,
  },
];

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "g-ritika",
    author: "Ritika Sharma",
    rating: 5,
    text: "Ordered custom name chocolates for my daughter's birthday and they were the highlight of the party. Beautiful gold pearls, fresh roasted nuts, and the team in Bhopal was so easy to work with. Pure class!",
  },
  {
    id: "g-aslam",
    author: "Mohammed Aslam",
    rating: 5,
    text: "Best Kunafa and walnut dry cakes in Bhopal, hands down. Baked fresh, not overly sweet, and the portions are generous. My family keeps asking me to order again.",
  },
  {
    id: "g-priya",
    author: "Priya Verma",
    rating: 5,
    text: "The floral mendiant discs genuinely look like little art pieces. Slow-roasted almonds, cashews and real rose petals on pure cocoa. Gifting these to everyone this festive season.",
  },
  {
    id: "g-sandeep",
    author: "Sandeep Yadav",
    rating: 5,
    text: "Booked a corporate hamper batch for our Diwali gifting and the quality was top notch. Clean ingredients, premium packaging, and reliable delivery across MP. Highly recommended.",
  },
];

export const QUOTE_SELECTION_OPTIONS: string[] = [
  ...PRICING_TIERS.map((t) => t.quoteSelectValue),
  ...CATALOG_ITEMS.map((c) => c.quoteSelectValue),
  "Custom Bespoke Hamper",
];
