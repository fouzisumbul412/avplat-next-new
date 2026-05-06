import { HomeSectionType } from "@prisma/client";

export const homePageData = {
  titleBlack: "Why",
  titleBlue: "AvPlat",
  description: "AvPlat is the world’s first integrated aircraft charter marketplace, designed to make booking simpler, faster, and more transparent.",
  videoUrl: "/videos/hero-bg.mp4",
  appStoreUrl: "https://apps.apple.com/...",
  playStoreUrl: "https://play.google.com/...",

  items: [
    {
      order: 0,
      section: "CAROUSEL" as HomeSectionType,
      title: "Create Itinerary and Get Instant Quotes!",
      description: "30 seconds is all it takes to enter your schedule, explore curated fleet and get instant charter estimates. Compare options, select the right aircraft and Book when you’re ready.",
      link: "Plan Trip",
      image: "/images/step-1.png",
    },
    {
      order: 1,
      section: "CAROUSEL" as HomeSectionType,
      title: "Confirm and Activate Your Trip. Instantly!",
      description: "Once you’ve selected your aircraft, simply make the payment to confirm your booking. With one click, your trip is activated and everything is set in motion. Sit back and relax as your journey is seamlessly managed from start to finish.",
      link: "Confirm Booking",
      image: "/images/step-2.png",
    },
    {
      order: 2,
      section: "CAROUSEL" as HomeSectionType,
      title: "Direct Access to a World-Class Fleet.",
      description: "Explore a diverse fleet and select the perfect aircraft for your mission. With direct access to operators, avoid layers of intermediaries, reduce brokerage costs and enjoy complete pricing transparency.",
      link: "Select Aircraft",
      image: "/images/step-3.png",
    },
    {
      order: 3,
      section: "CAROUSEL" as HomeSectionType,
      title: "Stay Updated. Every Step of the Way!",
      description: "Get real-time updates, alerts and notifications throughout your journey. trip updates and seamless communication, ensuring you stay on top of every detail from start to finish.",
      link: "Live Updates",
      image: "/images/step-4.png",
    },
    {
      order: 4,
      section: "CAROUSEL" as HomeSectionType,
      title: "Change Plans. Effortlessly!",
      description: "Modify your itinerary, passengers or schedule anytime. The platform automatically updates and informs everyone involved, keeping your trip smooth and stress-free.",
      link: "Modify Plans",
      image: "/images/step-5.jpg",
    },
    {
      order: 5,
      section: "CAROUSEL" as HomeSectionType,
      title: "Flexible Payments. Seamless Experience.",
      description: "Pay using credit cards and a range of convenient options. Fast, secure and designed to fit your preferences—every time.",
      link: "Secure Payment",
      image: "/images/step-6.png",
    },
    
  ],
};