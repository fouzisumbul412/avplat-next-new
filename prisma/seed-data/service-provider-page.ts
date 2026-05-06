import { AccentColor, FeatureLayout } from "@prisma/client";

export const serviceProviderPageData = {
  slug: "service-provider",
  pageTitle: "Service Providers",
  heroImage: "/images/Accept.png",
  badgeText: "Service Provider Platform",
  heroTitle: "A smarter way for service providers to quote, accept, coordinate and get paid.",
  heroDescription: "This page follows the same cleaner, tighter and more premium experience as the operators page — with separate videos for each service provider workflow, brighter surfaces and less clutter.",
  
  stats: [
    {
      label: "One-Time Setup",
      value: "Configure rate cards once",
      order: 0,
    },
    {
      label: "One Touch",
      value: "Accept service requests instantly",
      order: 1,
    }, 
    {
      label: "On Time",
      value: "Bi-weekly settlements & easy billing",
      order: 2,
    },
  ],

  features: [
    {
      order: 0,
      eyebrow: "Automated Estimates",
      title: "Stop sending fruitless estimates. Increase Productivity!",
      description: "Tired of sending multiple estimates, to multiple customers every day that don’t result in business? Register your services on the platform. Set up your service rate cards one-time and let us do the rest. Estimates will be automatically generated based on your settings.",
      points: [
        "Set service rate cards once",
        "Generate estimates automatically",
        "Reduce repetitive manual quoting"
      ],
      videoId: "VIDEO_ID_1",
      icon: "FileText",
      accent: "blue" as AccentColor,
      layout: "leftText" as FeatureLayout,
    },
    {
      order: 1,
      eyebrow: "Quick Acceptance",
      title: "Accept service requests. At the touch of a button!",
      description: "One touch is all it takes to accept the service request from your customer – from fuel to catering, from handling to transport, from permits to flight planning. View your service requests by date, tail no, customer or service category.",
      points: [
        "Accept service requests instantly",
        "View requests by date, tail no or customer",
        "Manage by service category with ease"
      ],
      videoId: "VIDEO_ID_2",
      icon: "Handshake",
      accent: "slate" as AccentColor,
      layout: "rightText" as FeatureLayout,
    },
    {
      order: 2,
      eyebrow: "Live Updates",
      title: "Activities and Notifications. Keeps you alert!",
      description: "An automated tasking and alerting system, as well as a chat system, all perfectly timed keeps you abreast and on top of your trip always.",
      points: [
        "Automated tasking and notifications",
        "Real-time communication through chat",
        "Stay updated on every service movement"
      ],
      videoId: "VIDEO_ID_3",
      icon: "BellRing",
      accent: "blue" as AccentColor,
      layout: "leftText" as FeatureLayout,
    },
    {
      order: 3,
      eyebrow: "Smooth Revisions",
      title: "Multiple Changes and Revisions. Hassle Free!",
      description: "Change in dates. Change in times. Change in destination. Change in passengers. Are you being bombarded with calls and emails? Our platform eliminates these problems, automatically keeps everything coordinated and provides timely alerts on what needs to be done.",
      points: [
        "Handle multiple changes without chaos",
        "Automatic coordination across updates",
        "Timely alerts for required actions"
      ],
      videoId: "VIDEO_ID_4",
      icon: "RefreshCcw",
      accent: "slate" as AccentColor,
      layout: "rightText" as FeatureLayout,
    },
    {
      order: 4,
      eyebrow: "Cashflow Support",
      title: "Get paid. On Time!",
      description: "Prompt bi-weekly settlements increase your cashflow. Eliminate Accounts Receivables hassles.",
      points: [
        "Prompt bi-weekly settlements",
        "Improve cashflow visibility",
        "Reduce receivables follow-up effort"
      ],
      videoId: "VIDEO_ID_5",
      icon: "Wallet",
      accent: "blue" as AccentColor,
      layout: "leftText" as FeatureLayout,
    },
    {
      order: 5,
      eyebrow: "Billing Simplified",
      title: "Raise your bills. Hassle Free!",
      description: "Invoices are auto-generated and customer wallets auto-deducted. View and retrieve your invoices by trip, by date or by service category. Eliminate Accounts Receivable hassles.",
      points: [
        "Auto-generated invoices",
        "Customer wallet auto-deduction",
        "Retrieve invoices by trip, date or category"
      ],
      videoId: "VIDEO_ID_6",
      icon: "Receipt",
      accent: "slate" as AccentColor,
      layout: "rightText" as FeatureLayout,
    },
  ],
};