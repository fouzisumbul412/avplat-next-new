"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileText,
  Handshake,
  BellRing,
  RefreshCcw,
  Wallet,
  Receipt,
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
    id: "estimates",
    eyebrow: "Automated Estimates",
    title: "Stop sending fruitless estimates. Increase Productivity!",
    description:
      "Tired of sending multiple estimates, to multiple customers every day that don’t result in business? Register your services on the platform. Set up your service rate cards one-time and let us do the rest. Estimates will be automatically generated based on your settings.",
    points: [
      "Set service rate cards once",
      "Generate estimates automatically",
      "Reduce repetitive manual quoting",
    ],
    videoId: "https://youtu.be/VIDEO_ID_1",
    icon: FileText,
    accent: "blue",
    layout: "leftText",
  },
  {
    id: "requests",
    eyebrow: "Quick Acceptance",
    title: "Accept service requests. At the touch of a button!",
    description:
      "One touch is all it takes to accept the service request from your customer – from fuel to catering, from handling to transport, from permits to flight planning. View your service requests by date, tail no, customer or service category.",
    points: [
      "Accept service requests instantly",
      "View requests by date, tail no or customer",
      "Manage by service category with ease",
    ],
    videoId: "https://youtu.be/VIDEO_ID_2",
    icon: Handshake,
    accent: "slate",
    layout: "rightText",
  },
  {
    id: "notifications",
    eyebrow: "Live Updates",
    title: "Activities and Notifications. Keeps you alert!",
    description:
      "An automated tasking and alerting system, as well as a chat system, all perfectly timed keeps you abreast and on top of your trip always.",
    points: [
      "Automated tasking and notifications",
      "Real-time communication through chat",
      "Stay updated on every service movement",
    ],
    videoId: "https://youtu.be/VIDEO_ID_3",
    icon: BellRing,
    accent: "blue",
    layout: "leftText",
  },
  {
    id: "changes",
    eyebrow: "Smooth Revisions",
    title: "Multiple Changes and Revisions. Hassle Free!",
    description:
      "Change in dates. Change in times. Change in destination. Change in passengers. Are you being bombarded with calls and emails? Our platform eliminates these problems, automatically keeps everything coordinated and provides timely alerts on what needs to be done.",
    points: [
      "Handle multiple changes without chaos",
      "Automatic coordination across updates",
      "Timely alerts for required actions",
    ],
    videoId: "https://youtu.be/VIDEO_ID_4",
    icon: RefreshCcw,
    accent: "slate",
    layout: "rightText",
  },
  {
    id: "payments",
    eyebrow: "Cashflow Support",
    title: "Get paid. On Time!",
    description:
      "Prompt bi-weekly settlements increase your cashflow. Eliminate Accounts Receivables hassles.",
    points: [
      "Prompt bi-weekly settlements",
      "Improve cashflow visibility",
      "Reduce receivables follow-up effort",
    ],
    videoId: "https://youtu.be/VIDEO_ID_5",
    icon: Wallet,
    accent: "blue",
    layout: "leftText",
  },
  {
    id: "billing",
    eyebrow: "Billing Simplified",
    title: "Raise your bills. Hassle Free!",
    description:
      "Invoices are auto-generated and customer wallets auto-deducted. View and retrieve your invoices by trip, by date or by service category. Eliminate Accounts Receivable hassles.",
    points: [
      "Auto-generated invoices",
      "Customer wallet auto-deduction",
      "Retrieve invoices by trip, date or category",
    ],
    videoId: "https://youtu.be/VIDEO_ID_6",
    icon: Receipt,
    accent: "slate",
    layout: "rightText",
  },
];

const heroStats = [
  { label: "One-Time Setup", value: "Configure rate cards once" },
  { label: "One Touch", value: "Accept service requests instantly" },
  { label: "On Time", value: "Bi-weekly settlements & easy billing" },
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

export default function ServiceProvidersPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-white dark:text-slate-900">
      <PageHero
        title="Service Providers"
        image="/images/Accept.png"
        overlayOpacity={0.7}
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
                Service Provider Platform
              </div>

              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                A smarter way for service providers to quote, accept, coordinate and get paid.
              </h2>

              <div className="mt-5 max-w-3xl">
                <ScrollRevealText
                  text="This page follows the same cleaner, tighter and more premium experience as the operators page — with separate videos for each service provider workflow, brighter surfaces and less clutter."
                  className="text-base leading-7 text-slate-600 md:text-lg"
                />
              </div>

              {/* <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#service-provider-sections"
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
        id="service-provider-sections"
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
                Separate videos for each service provider journey make the page clearer and stronger.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Just replace each <code>videoUrl</code> with the correct YouTube link for that section.
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