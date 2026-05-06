"use client";

import AdminPageCMS from "@/components/admin/pages/AdminPageCMS";

const DEFAULT_HERO = {
  pageTitle: "Charter",
  badgeText: "Charter Marketplace",
  heroTitle: "Search, compare, book and fly — all in one seamless charter experience.",
  heroDescription: "AvPlat Trips is designed to make charter booking simpler, faster and more transparent — from itinerary creation and instant quotes to real-time updates, flexible changes and secure payments.",
  heroImage: "/images/GetPaid.png",
};

const DEFAULT_STATS = [
  { label: "30 Seconds", value: "Create itinerary & get quotes" },
  { label: "Instant Booking", value: "Confirm and activate fast" },
  { label: "Direct Access", value: "Transparent fleet pricing" },
];

const DEFAULT_FEATURES = [
  {
    eyebrow: "AvPlat Trips",
    title: "Introducing AvPlat Trips: The World’s First Integrated Aircraft Charter Marketplace.",
    description: "Search aircraft, compare options, book instantly, and take off with ease. It can’t get any simpler!",
    points: ["Search aircraft easily", "Compare curated options", "Book instantly with confidence"],
    videoId: "www.youtube.com/watch?v=IlbOpSccI_E",
    icon: "Plane",
    accent: "blue" as const,
    layout: "leftText" as const,
  },
  {
    eyebrow: "Instant Quotes",
    title: "Create Itinerary and Get Instant Quotes!",
    description: "30 seconds is all it takes to enter your schedule, explore curated fleet and get instant charter estimates. Compare options, select the right aircraft and book when you’re ready.",
    points: ["Enter your schedule in seconds", "Explore a curated fleet", "Get instant charter estimates"],
    videoId: "www.youtube.com/watch?v=dQw4w9WgXcQ",
    icon: "SearchCheck",
    accent: "slate" as const,
    layout: "rightText" as const,
  }
];

export default function AdminCharterPage() {
  return (
    <AdminPageCMS 
      slug="charter"
      headerTitle="Charter Page CMS"
      headerDesc="Manage the hero section, stats, and features for the Charter page."
      defaultHero={DEFAULT_HERO}
      defaultStats={DEFAULT_STATS}
      defaultFeatures={DEFAULT_FEATURES}
    />
  );
}