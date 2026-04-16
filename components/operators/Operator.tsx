"use client";

import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  BellRing,
  Wallet,
  Route,
  Users,
  Network,
  ActivitySquare,
  Rocket,
  ShieldCheck,
} from "lucide-react";

type SectionItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  videoUrl: string;
  icon: React.ReactNode;
};

const BRAND = {
  primary: "#213e76",
  dark: "#0a0a0a",
  light: "#ffffff",
};

const SECTIONS: SectionItem[] = [
  {
    id: "itinerary",
    eyebrow: "Trip Creation",
    title: "Create Itinerary and Trip Estimates. Instantly!",
    description:
      "30 seconds is all it takes to create a schedule, select services and generate a trip estimate. Share the itinerary with your team instantly. Activate the trip when you are ready.",
    points: [
      "Create schedules in seconds",
      "Select services and estimate costs instantly",
      "Share itineraries with teams without delays",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: <Route className="h-5 w-5" />,
  },
  {
    id: "activate",
    eyebrow: "Execution",
    title: "Activate your trip. At the touch of a button!",
    description:
      "One touch is all it takes to activate your trip and get all you need – from fuel to catering, from handling to transport, from permits to flight planning. Sit back and relax as your trip progresses from start to finish.",
    points: [
      "Instant activation for live trips",
      "Support across fuel, handling, permits and transport",
      "Clear progress visibility from start to finish",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    id: "vendors",
    eyebrow: "Marketplace Network",
    title: "Extensive Vendor Network. No Cascading Costs!",
    description:
      "Our marketplace approach enables you to select vendors of your choice, with price discovery and quality discovery. Setup your preferred vendors. Execute the trip yourself, eliminating multiple layers of intermediaries, while drastically lowering your costs.",
    points: [
      "Choose from a wide vendor marketplace",
      "Get price and quality discovery in one place",
      "Reduce intermediary layers and control costs",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: <Network className="h-5 w-5" />,
  },
  {
    id: "alerts",
    eyebrow: "Live Coordination",
    title: "Activities. Notifications. Keeps you alert!",
    description:
      "An automated tasking and alerting system, as well as a chat system, all perfectly timed keeps you abreast and on top of your trip always.",
    points: [
      "Automated tasking and event alerts",
      "Built-in communication flow for teams",
      "Stay updated at every trip milestone",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: <BellRing className="h-5 w-5" />,
  },
  {
    id: "changes",
    eyebrow: "Flexible Modifications",
    title: "Change Itinerary, Passengers. As much as you want!",
    description:
      "Change dates. Change times. Change destination. Change passengers. Change as much as you want without any hassles. The platform notifies all stakeholders automatically and keeps everything coordinated.",
    points: [
      "Edit destinations, timings and passengers easily",
      "Auto-notify all stakeholders",
      "Keep trip coordination seamless after changes",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "billing",
    eyebrow: "Payments & Accounts",
    title: "Pay your bills. Hassle Free!",
    description:
      "Invoices are auto-generated and charged on your wallet. View and retrieve your invoices by trip, by date or by service category. Eliminate accounts payables hassles.",
    points: [
      "Auto-generated invoices",
      "Wallet-based charging flow",
      "Retrieve invoices by trip, date or service category",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    icon: <Wallet className="h-5 w-5" />,
  },
];

function extractYouTubeId(url: string) {
  const regExp =
    /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match?.[1] || "dQw4w9WgXcQ";
}

function SectionFrame({
  item,
  index,
}: {
  item: SectionItem;
  index: number;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yVideo = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-1.5, 0, 1.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.97]);

  const isEven = index % 2 === 0;
  const videoId = useMemo(() => extractYouTubeId(item.videoUrl), [item.videoUrl]);

  return (
    <section
      id={item.id}
      ref={frameRef}
      className="relative py-12 md:py-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: yVideo }}
          className="absolute left-1/2 top-12 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgba(33,62,118,0.16)] blur-3xl md:h-72 md:w-72"
        />
        <motion.div
          style={{ y: yText }}
          className="absolute bottom-10 right-10 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-2xl"
        />
      </div>

      <motion.div
        style={{ rotate, scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(33,62,118,0.16),transparent_30%,rgba(255,255,255,0.03)_60%,transparent)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div
          className={`grid items-center gap-8 p-5 md:gap-12 md:p-8 lg:grid-cols-2 lg:p-12 ${
            !isEven ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div style={{ y: yText }} className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(33,62,118,0.24)] text-white">
                {item.icon}
              </span>
              <span>{item.eyebrow}</span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              {item.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
              {item.description}
            </p>

            <div className="mt-7 grid gap-3">
              {item.points.map((point) => (
                <div
                  key={point}
                  className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="mt-1 rounded-full bg-[rgba(33,62,118,0.24)] p-1.5 text-white">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-white/78 md:text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                Explore Platform
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#videos"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Watch Feature Flow
                <PlayCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div style={{ y: yVideo }} className="relative z-10">
            <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-black p-2 shadow-[0_10px_60px_rgba(33,62,118,0.25)]">
              <div className="mb-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[rgba(33,62,118,0.9)]" />
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">AvPlat Operator Flow</p>
              </div>

              <div className="aspect-[16/10] overflow-hidden rounded-[20px] border border-white/10 bg-neutral-950">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,62,118,0.18),transparent_32%),linear-gradient(to_bottom,#000000,#070b14_30%,#000000)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:70px_70px]" />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-[rgba(33,62,118,0.22)] blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[8%] h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
    </div>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yOne = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yTwo = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden border-b border-white/8"
    >
      <FloatingGrid />

      <motion.div
        style={{ y: yOne }}
        className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-[rgba(33,62,118,0.22)] blur-3xl"
      />
      <motion.div
        style={{ y: yTwo }}
        className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10 lg:p-14"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(33,62,118,0.24),transparent_24%,transparent_70%,rgba(255,255,255,0.05))]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                <ActivitySquare className="h-4 w-4" />
                Operator Platform
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-7xl">
                Operate every trip with clarity, speed and total control.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                A premium operator workflow designed for instant itinerary creation,
                live trip activation, vendor discovery, automated coordination,
                flexible updates and frictionless billing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full bg-[#213e76] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(33,62,118,0.35)]"
                >
                  Explore Features
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#videos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Watch Demo Videos
                  <PlayCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["30 Seconds", "Trip estimate & itinerary creation"],
                  ["One Touch", "Trip activation workflow"],
                  ["Zero Chaos", "Automated coordination and alerts"],
                ].map(([heading, text]) => (
                  <div
                    key={heading}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-2xl font-semibold text-white">{heading}</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative mx-auto max-w-xl overflow-hidden rounded-[30px] border border-white/12 bg-black p-3 shadow-[0_20px_80px_rgba(33,62,118,0.28)]">
                <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/35" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#213e76]" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">Control Tower View</p>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#08101d,#0b1118_35%,#040404)] p-5">
                  <div className="grid gap-4">
                    {[
                      "Create schedule and estimate",
                      "Activate vendors and services",
                      "Monitor activities and notifications",
                      "Update itinerary without friction",
                      "Auto-bill and retrieve invoices",
                    ].map((line, idx) => (
                      <motion.div
                        key={line}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.08, duration: 0.5 }}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(33,62,118,0.24)] text-white">
                            {idx === 0 ? (
                              <Route className="h-5 w-5" />
                            ) : idx === 1 ? (
                              <Rocket className="h-5 w-5" />
                            ) : idx === 2 ? (
                              <BellRing className="h-5 w-5" />
                            ) : idx === 3 ? (
                              <Users className="h-5 w-5" />
                            ) : (
                              <Wallet className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{line}</p>
                            <p className="text-xs text-white/50">Operator workflow module</p>
                          </div>
                        </div>
                        <div className="h-2.5 w-2.5 rounded-full bg-white/70" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StickyNav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/8 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-lg font-semibold tracking-[0.2em] text-white">
          AVPLAT
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {SECTIONS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {item.eyebrow}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/[0.08]"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] md:p-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(33,62,118,0.28),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.04),transparent)]" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/50">Ready to operate smarter?</p>
            <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Bring your entire operator workflow into one intelligent, visual platform.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Fast planning. Better visibility. Lower costs. Cleaner coordination.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://avplat.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#213e76] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
            >
              Visit AvPlat
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              Back to Top
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function OperatorPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-black text-white selection:bg-[#213e76] selection:text-white"
    >
      <StickyNav />
      <HeroSection />

      <section id="features" className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-10">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Feature Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Cinematic sections built for operator confidence.
          </h2>
        </div>

        {SECTIONS.map((item, index) => (
          <SectionFrame key={item.id} item={item} index={index} />
        ))}

        <CTASection />
      </section>
    </main>
  );
}
