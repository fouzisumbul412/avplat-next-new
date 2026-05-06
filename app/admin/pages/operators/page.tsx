"use client";

import AdminPageCMS from "@/components/admin/pages/AdminPageCMS";

const DEFAULT_HERO = {
  pageTitle: "Operators",
  badgeText: "Operator Platform",
  heroTitle: "A smarter way to plan, activate and manage every trip.",
  heroDescription: "This page is designed to feel cleaner, tighter and more premium...",
  heroImage: "/images/Manage.png",
};

const DEFAULT_STATS = [
  { label: "30 Seconds", value: "Trip schedule & estimate" },
  { label: "One Touch", value: "Trip activation workflow" },
  { label: "Lower Costs", value: "Marketplace-led execution" },
];

const DEFAULT_FEATURES = [
  {
    eyebrow: "Plan Faster",
    title: "Create Itinerary and Trip Estimates. Instantly!",
    description: "30 seconds is all it takes to create a schedule, select services and generate a trip estimate. Share the itinerary with your team instantly. Activate the trip when you are ready.",
    points: ["Create schedules in seconds", "Select services instantly", "Generate trip estimates quickly"],
    videoId: "www.youtube.com/watch?v=IlbOpSccI_E",
    icon: "CalendarRange",
    accent: "blue" as const,
    layout: "leftText" as const,
  },
  {
    eyebrow: "One-Touch Ops",
    title: "Activate your trip. At the touch of a button!",
    description: "One touch is all it takes to activate your trip and get all you need – from fuel to catering, from handling to transport, from permits to flight planning. Sit back and relax as your trip progresses from start to finish.",
    points: ["Activate the trip instantly", "Coordinate fuel, catering and handling", "Track progress from start to finish"],
    videoId: "www.youtube.com/watch?v=dQw4w9WgXcQ",
    icon: "PlaneTakeoff",
    accent: "slate" as const,
    layout: "rightText" as const,
  }
];

export default function AdminOperatorsPage() {
  return (
    <AdminPageCMS 
      slug="operators"
      headerTitle="Operators Page CMS"
      headerDesc="Manage content, stats, and features for the Operators section."
      defaultHero={DEFAULT_HERO}
      defaultStats={DEFAULT_STATS}
      defaultFeatures={DEFAULT_FEATURES}
    />
  );
}