"use client";

import AdminPageCMS from "@/components/admin/pages/AdminPageCMS";

const DEFAULT_HERO = {
  pageTitle: "Service Providers",
  badgeText: "Service Provider Platform",
  heroTitle: "A smarter way for service providers to quote, accept, coordinate and get paid.",
  heroDescription: "This page follows the same cleaner, tighter and more premium experience as the operators page — with separate videos for each service provider workflow, brighter surfaces and less clutter.",
  heroImage: "/images/Accept.png",
};

const DEFAULT_STATS = [
  { label: "One-Time Setup", value: "Configure rate cards once" },
  { label: "One Touch", value: "Accept service requests instantly" },
  { label: "On Time", value: "Bi-weekly settlements & easy billing" },
];

const DEFAULT_FEATURES = [
  {
    eyebrow: "Automated Estimates",
    title: "Stop sending fruitless estimates. Increase Productivity!",
    description: "Tired of sending multiple estimates, to multiple customers every day that don’t result in business? Register your services on the platform. Set up your service rate cards one-time and let us do the rest. Estimates will be automatically generated based on your settings.",
    points: ["Set service rate cards once", "Generate estimates automatically", "Reduce repetitive manual quoting"],
    videoId: "www.youtube.com/watch?v=IlbOpSccI_E",
    icon: "FileText",
    accent: "blue" as const,
    layout: "leftText" as const,
  },
  {
    eyebrow: "Quick Acceptance",
    title: "Accept service requests. At the touch of a button!",
    description: "One touch is all it takes to accept the service request from your customer – from fuel to catering, from handling to transport, from permits to flight planning. View your service requests by date, tail no, customer or service category.",
    points: ["Accept service requests instantly", "View requests by date, tail no or customer", "Manage by service category with ease"],
    videoId: "www.youtube.com/watch?v=dQw4w9WgXcQ",
    icon: "Handshake",
    accent: "slate" as const,
    layout: "rightText" as const,
  },
];

export default function AdminServiceProvidersPage() {
  return (
    <AdminPageCMS 
      slug="service-providers"
      headerTitle="Service Providers CMS"
      headerDesc="Manage the hero section, stats, and features for the Service Providers page."
      defaultHero={DEFAULT_HERO}
      defaultStats={DEFAULT_STATS}
      defaultFeatures={DEFAULT_FEATURES}
    />
  );
}