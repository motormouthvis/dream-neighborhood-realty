/**
 * Los Angeles showcase neighborhoods. Each `slug` becomes
 * `/neighborhood/{slug}/` so analytics can read a stable id from the path
 * (e.g. hollywood-hills-ca → "Hollywood Hills, CA").
 */
export const neighborhoods = [
  {
    slug: "hollywood-hills-ca",
    /** Human + machine-friendly label used in UI and meta tags */
    canonicalName: "Hollywood Hills, CA",
    shortLabel: "Hollywood Hills",
    metaDescription:
      "Explore Hollywood Hills, CA with DN Realty — hillside living, canyon trails, and embedded Dream Neighborhood data for schools, safety, and market trends.",
    /** Representative street address for Open Graph / JSON-LD (geocodable) */
    anchorStreet: "2000 N Fuller Ave",
    anchorLocality: "Los Angeles",
    anchorRegion: "CA",
    anchorPostalCode: "90046",
    /** Served from /public — reliable first-party URLs */
    cardImage: "/images/neighborhoods/hollywood-hills.jpg",
    description: [
      "Hollywood Hills drapes across the Santa Monica Mountains above the city grid, where winding roads, mid-century architecture, and sudden canyon views make every showing feel cinematic. Buyers come for privacy and elevation; they stay for Runyon-adjacent mornings, Laurel Canyon breezes, and quick drops into the studios or Sunset Strip when work calls.",
      "The market here is rarely one-size-fits-all: hillside lots, view premiums, and retrofit-friendly pads each tell a different comp story. That is why we pair every tour with hyperlocal context — noise contours, micro-climates between north- and south-facing ridges, and commute reality to Burbank or Century City — so offers are grounded in the block, not the zip.",
      "The Dream Neighborhood explorer on this page is anchored to a real Hollywood Hills address so you can review the same 38+ data points we surface on listings: schools, safety, demographics, points of interest, and commute times — scoped to this hillside market instead of a single listing.",
    ],
  },
  {
    slug: "silver-lake-los-angeles-ca",
    canonicalName: "Silver Lake, Los Angeles, CA",
    shortLabel: "Silver Lake",
    metaDescription:
      "Silver Lake, Los Angeles — reservoir walks, indie retail, and a creative renter-buyer mix. Explore the area with Dream Neighborhood's embedded explorer.",
    anchorStreet: "2300 Griffith Park Blvd",
    anchorLocality: "Los Angeles",
    anchorRegion: "CA",
    anchorPostalCode: "90039",
    cardImage: "/images/neighborhoods/silver-lake.jpg",
    description: [
      "Silver Lake balances reservoir laps with vinyl-lined evenings: the neighborhood rewards pedestrians, rewards curiosity, and still keeps DTLA or Glendale within a sane commute. Architecturally you will see everything from 1920s Spanish revival to crisp new infill, which keeps pricing conversations honest about condition, parking, and hillside foundations.",
      "Food, nightlife, and small retail cluster along Sunset and Hyperion, but the quieter blocks north of the reservoir are where families and remote workers trade a little buzz for tree cover and tighter-knit blocks. We help clients read those tradeoffs with the same rigor we bring to escrow — because \"walkable\" means something different on Micheltorena than on Rowena.",
      "Use the Dream Neighborhood explorer on this page to move from Silver Lake toward Echo Park or Atwater and compare schools, market trends, and commute overlays without leaving DN Realty.",
    ],
  },
  {
    slug: "santa-monica-ca",
    canonicalName: "Santa Monica, CA",
    shortLabel: "Santa Monica",
    metaDescription:
      "Santa Monica, CA — beach-city living with strong schools and transit. Dive into Dream Neighborhood data without leaving this neighborhood page.",
    anchorStreet: "1400 Santa Monica Blvd",
    anchorLocality: "Santa Monica",
    anchorRegion: "CA",
    anchorPostalCode: "90404",
    cardImage: "/images/neighborhoods/santa-monica.jpg",
    description: [
      "Santa Monica compresses ocean air, tech-adjacent employers, and some of the Westside's most debated zoning conversations into a few coastal square miles. Listings here are as much about rent-control overlays, soft-story retrofits, and Expo-adjacent walk scores as they are about bedrooms — buyers expect a briefing that matches that complexity.",
      "From Montana Avenue's retail calm to Pico's denser corridors, each micro-band carries different noise, traffic, and school catchment realities. We treat those deltas as first-class data, not footnotes, so clients understand what changes when you cross a few blocks, not just when you change ZIP codes.",
      "The Dream Neighborhood explorer here is anchored in Santa Monica so you can compare beach proximity, safety trends, amenities, and commute times the same way we layer context onto listings.",
    ],
  },
];

export function getNeighborhoodBySlug(slug) {
  return neighborhoods.find((n) => n.slug === slug) ?? null;
}
