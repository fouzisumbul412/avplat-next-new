"use client";

import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  Layers3,
  Plane,
  Radar,
  ReceiptText,
  Route,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";
import Link from "next/link";

const brandColor = "#213e76";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stats = [
  {
    value: "360°",
    label: "Trip Support Flow",
  },
  {
    value: "1",
    label: "Unified Aviation Platform",
  },
  {
    value: "24/7",
    label: "Operational Readiness",
  },
  {
    value: "Global",
    label: "Vendor Network Access",
  },
];

const platformPillars = [
  {
    icon: Route,
    title: "For Operators",
    description:
      "Create schedules, generate trip estimates, select services, activate trips, and keep every stakeholder aligned from one digital flow.",
  },
  {
    icon: Building2,
    title: "For Service Providers",
    description:
      "Create service listings, send quotes, accept requests, fulfil services, raise bills, and receive payments through the platform.",
  },
  {
    icon: Plane,
    title: "For Charter Journeys",
    description:
      "Bring charter estimation, aircraft selection, service coordination, communication, and billing into a cleaner operating experience.",
  },
];

const features = [
  {
    icon: Layers3,
    title: "Marketplace Approach",
    description:
      "Choose vendors based on service fit, price visibility, and quality discovery instead of depending on multiple intermediary layers.",
  },
  {
    icon: Radar,
    title: "End-to-End Trip Flow",
    description:
      "From itinerary creation to service activation, AvPlat keeps the journey connected across every important trip stage.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    description:
      "Automated time-based and phase-of-flight notifications help teams stay alert, responsive, and aligned.",
  },
  {
    icon: Zap,
    title: "Faster Revisions",
    description:
      "Change dates, times, destinations, passengers, or schedules while the platform keeps stakeholders coordinated.",
  },
  {
    icon: WalletCards,
    title: "Built-In Wallet",
    description:
      "Simplify payments with wallet-based flows that reduce manual follow-ups and collection friction.",
  },
  {
    icon: ReceiptText,
    title: "Auto Billing",
    description:
      "Invoices can be generated and accessed by trip, date, or service category for cleaner finance operations.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Create Schedule",
    description:
      "Build your itinerary and trip estimate with speed, clarity, and operational accuracy.",
  },
  {
    step: "02",
    title: "Select Services",
    description:
      "Choose the services and vendors needed for the trip, from fuel to catering, handling, permits, and flight planning.",
  },
  {
    step: "03",
    title: "Activate Trip",
    description:
      "Activate the trip and let the platform notify relevant stakeholders automatically.",
  },
  {
    step: "04",
    title: "Fly Smarter",
    description:
      "Track activities, manage revisions, review invoices, and keep the journey coordinated until completion.",
  },
];

const values = [
  "Reduce operational friction",
  "Improve vendor visibility",
  "Support faster decision-making",
  "Simplify aviation coordination",
  "Strengthen payment discipline",
  "Make trip support more transparent",
];

export default function AboutPage() {
  return (
    <>

      <main className="min-h-screen bg-white text-black">
         <PageHero
                title="About AvPlat"
                image="/images/580064.jpg"
                overlayOpacity={0.7}
              />
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(33,62,118,0.14),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.08),transparent_28%)]" />

          <div className="absolute left-0 top-24 hidden h-[420px] w-[420px] rounded-full bg-[#213e76]/10 blur-3xl lg:block" />
          <div className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-black/5 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-36">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#213e76]/20 bg-[#213e76]/5 px-4 py-2 text-sm font-medium text-[#213e76]">
                <Sparkles size={16} />
                Integrated Flight Planning & Trip Support
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
                Reimagining aviation operations with one intelligent platform.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 sm:text-lg">
                AvPlat brings operators, service providers, charter workflows,
                vendors, trip support, alerts, billing, and payments into a more
                connected aviation experience.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#213e76] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
                >
                  Contact AvPlat
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:border-[#213e76]/30 hover:text-[#213e76] hover:shadow-[0_16px_50px_rgba(33,62,118,0.12)]"
                >
                  Explore Platform
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-black/10 bg-white/80 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-[#213e76]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-black/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -left-6 top-8 hidden rounded-full bg-[#213e76] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(33,62,118,0.28)] sm:block">
                Live Trip Flow
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
                <div className="overflow-hidden rounded-[1.6rem] bg-[#f6f8fc]">
                  <div className="flex items-center justify-between border-b border-black/10 bg-white px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-black">
                        AvPlat Operations
                      </p>
                      <p className="mt-1 text-xs text-black/45">
                        Smart trip support dashboard
                      </p>
                    </div>

                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-[#213e76]" />
                      <span className="h-3 w-3 rounded-full bg-black/20" />
                      <span className="h-3 w-3 rounded-full bg-black/10" />
                    </div>
                  </div>

                  <div className="grid gap-4 p-5">
                    <div className="rounded-3xl bg-[#213e76] p-5 text-white">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                            Active Journey
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold">
                            New York → London
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/65">
                            Schedule created, services selected, stakeholder
                            notifications active.
                          </p>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#213e76]">
                          <Plane size={22} />
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {["Fuel", "Handling", "Permits"].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl bg-white/10 p-3 text-center"
                          >
                            <CheckCircle2
                              size={17}
                              className="mx-auto text-white"
                            />
                            <p className="mt-2 text-xs font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-black/10 bg-white p-5">
                        <BellRing size={22} className="text-[#213e76]" />
                        <p className="mt-4 text-sm font-semibold text-black">
                          Smart Alerts
                        </p>
                        <p className="mt-2 text-xs leading-5 text-black/55">
                          Time-based and phase-based notifications.
                        </p>
                      </div>

                      <div className="rounded-3xl border border-black/10 bg-white p-5">
                        <FileText size={22} className="text-[#213e76]" />
                        <p className="mt-4 text-sm font-semibold text-black">
                          Auto Invoices
                        </p>
                        <p className="mt-2 text-xs leading-5 text-black/55">
                          Bills organized by trip and service category.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-black/10 bg-white p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-semibold text-black">
                          Trip Completion
                        </p>
                        <p className="text-sm font-semibold text-[#213e76]">
                          82%
                        </p>
                      </div>

                      <div className="h-3 overflow-hidden rounded-full bg-black/10">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "82%" }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.5,
                          }}
                          className="h-full rounded-full bg-[#213e76]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-[2rem] bg-[#213e76] p-7 text-white shadow-[0_24px_80px_rgba(33,62,118,0.22)] sm:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#213e76]">
                  <Globe2 size={25} />
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built for a more connected aviation ecosystem.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  Aviation operations involve multiple services, vendors, teams,
                  changes, payments, and approvals. AvPlat is designed to bring
                  these moving parts into one cleaner operating layer.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {values.map((value) => (
                    <div
                      key={value}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                    >
                      <CheckCircle2 size={18} className="shrink-0" />
                      <span className="text-sm text-white/85">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#213e76]">
                  About AvPlat
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                  From fragmented coordination to intelligent aviation flow.
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                  <p>
                    AvPlat is built around a simple idea: aviation operations
                    should not depend on scattered emails, endless calls,
                    delayed quotes, manual service coordination, and disconnected
                    billing.
                  </p>

                  <p>
                    The platform helps operators create schedules, select
                    services, activate trips, manage revisions, receive alerts,
                    and access vendor options with greater clarity.
                  </p>

                  <p>
                    For service providers, AvPlat creates a digital path to list
                    services, quote faster, accept requests, fulfil jobs, raise
                    invoices, and improve payment visibility.
                  </p>
                </div>

                <div className="mt-8 rounded-3xl border border-[#213e76]/15 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
                  <p className="text-lg font-semibold text-black">
                    Our purpose is to make aviation service coordination faster,
                    clearer, and more accountable.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#213e76]">
                Who We Serve
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                Designed for every side of aviation coordination.
              </h2>

              <p className="mt-5 text-base leading-8 text-black/60">
                AvPlat connects the people who operate flights with the people
                who support them, creating a more transparent and efficient
                marketplace.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-12 grid gap-6 lg:grid-cols-3"
            >
              {platformPillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="group rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#213e76]/30 hover:shadow-[0_24px_80px_rgba(33,62,118,0.14)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#213e76]/10 text-[#213e76] transition group-hover:bg-[#213e76] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-black">
                      {pillar.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/60">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#213e76]">
                  Why AvPlat
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                  Built to remove complexity from trip support.
                </h2>
              </motion.div>

              <p className="max-w-xl text-sm leading-7 text-black/55">
                From service discovery to quote handling, revision updates,
                alerts, wallet payments, and invoices, AvPlat helps teams stay
                coordinated with less manual pressure.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="rounded-[1.7rem] border border-black/10 bg-white p-6 shadow-[0_16px_55px_rgba(0,0,0,0.05)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#213e76]/10 text-[#213e76]">
                      <Icon size={21} />
                    </div>

                    <h3 className="text-lg font-semibold text-black">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#213e76]">
                Platform Flow
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                Create. Select. Activate. Fly.
              </h2>

              <p className="mt-5 text-base leading-8 text-black/60">
                A smarter journey begins with fewer disconnected steps and a
                more organized aviation workflow.
              </p>
            </motion.div>

            <div className="relative mt-14">
              <div className="absolute left-8 top-0 hidden h-full w-px bg-[#213e76]/15 lg:block" />

              <div className="grid gap-5">
                {workflow.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: index * 0.08,
                    }}
                    className="grid gap-5 rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_16px_55px_rgba(0,0,0,0.05)] lg:grid-cols-[90px_1fr]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#213e76] text-lg font-semibold text-white">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-black">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-black/60">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#213e76]/10 text-[#213e76]">
                <ShieldCheck size={25} />
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight text-black">
                Our Mission
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65">
                To simplify aviation operations by giving operators and service
                providers a digital platform that improves speed, coordination,
                service visibility, and financial clarity.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="rounded-[2rem] bg-[#213e76] p-7 text-white shadow-[0_24px_80px_rgba(33,62,118,0.22)] sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#213e76]">
                <Sparkles size={25} />
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight">
                Our Vision
              </h2>

              <p className="mt-5 text-base leading-8 text-white/72">
                To become a trusted operating layer for aviation businesses,
                helping every trip move with better transparency, smarter
                automation, and stronger collaboration.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-black p-8 text-white shadow-[0_30px_100px_rgba(0,0,0,0.22)] sm:p-12 lg:p-14"
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                  Ready for smarter aviation operations?
                </span>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Let AvPlat help you move from manual coordination to connected
                  trip support.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                  Whether you are an operator, service provider, or aviation
                  business looking for a cleaner way to manage trip services,
                  AvPlat is built to support your next step.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#213e76] hover:text-white"
                >
                  Get in Touch
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

    
    </>
  );
}