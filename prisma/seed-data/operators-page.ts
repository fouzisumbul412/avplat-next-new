import { AccentColor, FeatureLayout } from "@prisma/client";

export const operatorsPageData = {
  slug: "operators",
  pageTitle: "Operators",
  heroImage: "/images/Manage.png",
  badgeText: "Operator Platform",
  heroTitle: "A smarter way to plan, activate and manage every trip.",
  heroDescription: "This page is designed to feel cleaner, tighter and more premium — with stronger video focus, lighter surfaces, less clutter and more depth without filling the screen with repetitive cards.",
  
  stats: [
    {
      label: "30 Seconds",
      value: "Trip schedule & estimate",
      order: 0,
    },
    {
      label: "One Touch",
      value: "Trip activation workflow",
      order: 1,
    },
    {
      label: "Lower Costs",
      value: "Marketplace-led execution",
      order: 2,
    },
  ],

  features: [
    {
      order: 0,
      eyebrow: "Plan Faster",
      title: "Create Itinerary and Trip Estimates. Instantly!",
      description: "30 seconds is all it takes to create a schedule, select services and generate a trip estimate. Share the itinerary with your team instantly. Activate the trip when you are ready.",
      points: [
        "Create schedules in seconds",
        "Select services instantly",
        "Generate trip estimates quickly"
      ],
      videoId: "IlbOpSccI_E",
      icon: "CalendarRange",
      accent: "blue" as AccentColor,
      layout: "leftText" as FeatureLayout,
    },
    {
      order: 1,
      eyebrow: "One-Touch Ops",
      title: "Activate your trip. At the touch of a button!",
      description: "One touch is all it takes to activate your trip and get all you need – from fuel to catering, from handling to transport, from permits to flight planning. Sit back and relax as your trip progresses from start to finish.",
      points: [
        "Activate the trip instantly",
        "Coordinate fuel, catering and handling",
        "Track progress from start to finish"
      ],
      videoId: "dQw4w9WgXcQ",
      icon: "PlaneTakeoff",
      accent: "slate" as AccentColor,
      layout: "rightText" as FeatureLayout,
    },
    {
      order: 2,
      eyebrow: "Better Cost Control",
      title: "Extensive Vendor Network. No Cascading Costs!",
      description: "Our marketplace approach enables you to select vendors of your choice, with price discovery and quality discovery. Setup your preferred vendors. Execute the trip yourself, eliminating multiple layers of intermediaries, while drastically lowering your costs.",
      points: [
        "Choose preferred vendors",
        "Compare price and quality",
        "Reduce intermediary layers"
      ],
      videoId: "dQw4w9WgXcQ",
      icon: "Network",
      accent: "blue" as AccentColor,
      layout: "leftText" as FeatureLayout,
    },
    {
      order: 3,
      eyebrow: "Stay Updated",
      title: "Activities. Notifications. Keeps you alert!",
      description: "An automated tasking and alerting system, as well as a chat system, all perfectly timed keeps you abreast and on top of your trip always.",
      points: [
        "Automated tasking and alerts",
        "Built-in chat system",
        "Perfectly timed trip updates"
      ],
      videoId: "dQw4w9WgXcQ",
      icon: "BellRing",
      accent: "slate" as AccentColor,
      layout: "rightText" as FeatureLayout,
    },
    {
      order: 4,
      eyebrow: "Flexible Changes",
      title: "Change Itinerary, Passengers. As much as you want!",
      description: "Change dates. Change times. Change destination. Change passengers. Change as much as you want without any hassles. The platform notifies all stakeholders automatically and keeps everything coordinated.",
      points: [
        "Update dates, times and destinations",
        "Edit passengers easily",
        "Notify all stakeholders automatically"
      ],
      videoId: "dQw4w9WgXcQ",
      icon: "RefreshCcw",
      accent: "blue" as AccentColor,
      layout: "leftText" as FeatureLayout,
    },
    {
      order: 5,
      eyebrow: "Billing Simplified",
      title: "Pay your bills. Hassle Free!",
      description: "Invoices are auto-generated and charged on your wallet. View and retrieve your invoices by trip, by date or by service category. Eliminate accounts payables hassles.",
      points: [
        "Auto-generated invoices",
        "Wallet-based charging",
        "Retrieve invoices by trip, date or service category"
      ],
      videoId: "dQw4w9WgXcQ",
      icon: "CreditCard",
      accent: "slate" as AccentColor,
      layout: "rightText" as FeatureLayout,
    },
  ],
};