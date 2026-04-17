"use client";

import { motion, type Variants } from "framer-motion";
import {
  Plane,
  SearchCheck,
  BadgeCheck,
  Globe2,
  BellRing,
  RefreshCcw,
  CreditCard,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import OperatorFeatureSection, {
  type OperatorFeature,
} from "@/components/operators/OperatorFeatureSection";
import ScrollRevealText from "@/components/operators/ScrollRevealText";

const features: OperatorFeature[] = [
  {
    id: "intro",
    eyebrow: "AvPlat Trips",
    title:
      "Introducing AvPlat Trips: The World’s First Integrated Aircraft Charter Marketplace.",
    description:
      "Search aircraft, compare options, book instantly, and take off with ease. It can’t get any simpler!",
    points: [
      "Search aircraft easily",
      "Compare curated options",
      "Book instantly with confidence",
    ],
    videoId: "IlbOpSccI_E",
    icon: Plane,
    accent: "blue",
    layout: "leftText",
  },
  {
    id: "quotes",
    eyebrow: "Instant Quotes",
    title: "Create Itinerary and Get Instant Quotes!",
    description:
      "30 seconds is all it takes to enter your schedule, explore curated fleet and get instant charter estimates. Compare options, select the right aircraft and book when you’re ready.",
    points: [
      "Enter your schedule in seconds",
      "Explore a curated fleet",
      "Get instant charter estimates",
    ],
    videoId: "yrQKUfTskIE",
    icon: SearchCheck,
    accent: "slate",
    layout: "rightText",
  },
  {
    id: "activate",
    eyebrow: "Trip Activation",
    title: "Confirm and Activate Your Trip. Instantly!",
    description:
      "Once you’ve selected your aircraft, simply make the payment to confirm your booking. With one click, your trip is activated and everything is set in motion. Sit back and relax as your journey is seamlessly managed from start to finish.",
    points: [
      "Confirm booking with payment",
      "Activate the trip with one click",
      "End-to-end journey coordination",
    ],
    videoId: "IlbOpSccI_E",
    icon: BadgeCheck,
    accent: "blue",
    layout: "centerSplit",
  },
  {
    id: "fleet",
    eyebrow: "World-Class Fleet",
    title: "Direct Access to a World-Class Fleet.",
    description:
      "Explore a diverse fleet and select the perfect aircraft for your mission. With direct access to operators, avoid layers of intermediaries, reduce brokerage costs and enjoy complete pricing transparency.",
    points: [
      "Explore a diverse fleet",
      "Direct access to operators",
      "Transparent pricing with lower brokerage costs",
    ],
    videoId: "yrQKUfTskIE",
    icon: Globe2,
    accent: "slate",
    layout: "leftText",
  },
  {
    id: "updates",
    eyebrow: "Live Updates",
    title: "Stay Updated. Every Step of the Way!",
    description:
      "Get real-time updates, alerts and notifications throughout your journey. Trip updates and seamless communication ensure you stay on top of every detail from start to finish.",
    points: [
      "Real-time alerts and notifications",
      "Stay informed throughout the trip",
      "Seamless communication end to end",
    ],
    videoId: "IlbOpSccI_E",
    icon: BellRing,
    accent: "blue",
    layout: "rightText",
  },
  {
    id: "changes",
    eyebrow: "Flexible Planning",
    title: "Change Plans. Effortlessly!",
    description:
      "Modify your itinerary, passengers or schedule anytime. The platform automatically updates and informs everyone involved, keeping your trip smooth and stress-free.",
    points: [
      "Change itinerary anytime",
      "Update passengers and schedule easily",
      "Automatic coordination for everyone involved",
    ],
    videoId: "yrQKUfTskIE",
    icon: RefreshCcw,
    accent: "slate",
    layout: "centerSplit",
  },
  {
    id: "payments",
    eyebrow: "Flexible Payments",
    title: "Flexible Payments. Seamless Experience.",
    description:
      "Pay using credit cards and a range of convenient options. Fast, secure and designed to fit your preferences—every time.",
    points: [
      "Credit card support",
      "Convenient payment options",
      "Fast and secure checkout experience",
    ],
    videoId: "IlbOpSccI_E",
    icon: CreditCard,
    accent: "blue",
    layout: "leftText",
  },
];

const heroStats = [
  { label: "30 Seconds", value: "Create itinerary & get quotes" },
  { label: "Instant Booking", value: "Confirm and activate fast" },
  { label: "Direct Access", value: "Transparent fleet pricing" },
];

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CharterPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-white dark:text-slate-900">
      <PageHero
        title="Charter"
        image="/images/GetPaid.png"
        overlayOpacity={0.4}
      />

      <section className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff,#f6f9ff_38%,#ffffff_100%)]" />
          <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#213e76]/10 blur-3xl" />
          <div className="absolute right-[8%] top-40 h-56 w-56 rounded-full bg-sky-100 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_16px_40px_rgba(18,38,63,0.06)] backdrop-blur xl:p-10"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#213e76]/10 bg-[#213e76]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#213e76]">
                <Sparkles className="h-4 w-4" />
                Charter Marketplace
              </div>

              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                Search, compare, book and fly — all in one seamless charter experience.
              </h2>

              <div className="mt-5 max-w-3xl">
                <ScrollRevealText
                  text="AvPlat Trips is designed to make charter booking simpler, faster and more transparent — from itinerary creation and instant quotes to real-time updates, flexible changes and secure payments."
                  className="text-base leading-7 text-slate-600 md:text-lg"
                />
              </div>

              {/* <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#charter-sections"
                  className="inline-flex items-center gap-2 rounded-full bg-[#213e76] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  Explore Features
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="https://avplat.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-slate-50"
                >
                  Visit Website
                </a>
              </div> */}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
            >
              {heroStats.map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  className="rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_14px_30px_rgba(18,38,63,0.05)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#213e76]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base leading-6 text-slate-600">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="charter-sections"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24"
      >
        <div className="space-y-8 md:space-y-10">
          {features.map((feature, index) => (
            <OperatorFeatureSection
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-[28px] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fbff,#ffffff)] p-6 shadow-[0_16px_40px_rgba(18,38,63,0.05)] md:p-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#213e76]">
                Final CTA
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-4xl">
                A cleaner charter journey with instant quotes, direct fleet access and seamless trip control.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Replace each section video ID with the correct charter video and this page is ready.
              </p>
            </div>

            <a
              href="https://avplat.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#213e76] px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              Open AvPlat
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div> */}
      </section>
    </main>
  );
}