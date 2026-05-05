"use client";

import PageHero from "@/components/PageHero";
import Team from "@/components/team-section";
import { motion } from "framer-motion";
import {
  BellRing,
  Building2,
  CheckCircle2,
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
  Mail,
  UsersRound,
} from "lucide-react";
import Image from "next/image";

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

const values = [
  "Reduce operational friction",
  "Improve vendor visibility",
  "Support faster decision-making",
  "Simplify aviation coordination",
  "Strengthen payment discipline",
  "Make trip support more transparent",
];

const teamMembers = [
  {
    name: "Aviation Strategy Lead",
    role: "Platform & Operations",
    image: "/images/serve.png",
  },
  {
    name: "Product Experience Lead",
    role: "UX, Workflow & Automation",
    image: "/images/team/team-2.jpg",
  },
  {
    name: "Technology Lead",
    role: "Engineering & Platform Systems",
    image: "/images/team/team-3.jpg",
  },
  {
    name: "Customer Success Lead",
    role: "Operators & Service Providers",
    image: "/images/team/team-4.jpg",
  },
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
                    should not depend on scattered emails, endless calls, delayed
                    quotes, manual service coordination, and disconnected
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

        <section className="bg-[#f7f9fc] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[2rem] border border-black/10 bg-[#213e76] p-7 text-white shadow-[0_20px_70px_rgba(0,0,0,0.06)] sm:p-9"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#213e76]">
                <ShieldCheck size={25} />
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight">
                Our Mission
              </h2>

              <p className="mt-5 text-base leading-8 text-white/72">
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

        <Team />

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
      </main>
    </>
  );
}