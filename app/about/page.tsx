"use client";

import useSWR from "swr";
import PageHero from "@/components/PageHero";
import Team from "@/components/team-section";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import * as LucideIcons from "lucide-react";

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AboutPage() {
  const { data: response, isLoading } = useSWR("/api/about", fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex w-full min-h-screen items-center justify-center bg-white">
        <Loader2 className="animate-spin text-[#213e76]" size={40} />
      </div>
    );
  }

  const aboutData = response?.data;

  if (!aboutData) {
    return <div className="p-20 text-center">About page content not configured.</div>;
  }

  const mainParagraphs = aboutData.mainText?.split("\n").filter((p: string) => p.trim() !== "") || [];

  return (
    <>
      <main className="min-h-screen bg-white text-black">
        <PageHero
          title={aboutData.heroTitle}
          image={aboutData.heroImage || "/images/580064.jpg"}
          overlayOpacity={0.7}
        />

        {/* Intro & Values */}
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
                  <LucideIcons.Globe2 size={25} />
                </div>

                <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {aboutData.blueCardTitle}
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  {aboutData.blueCardText}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {aboutData.blueCardValues?.map((value: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
                    >
                      <LucideIcons.CheckCircle2 size={18} className="shrink-0" />
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
                  {aboutData.mainEyebrow}
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                  {aboutData.mainTitle}
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-black/65">
                  {mainParagraphs.map((para: string, idx: number) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-[#213e76]/15 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
                  <p className="text-lg font-semibold text-black">
                    {aboutData.mainHighlight}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
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
                <LucideIcons.ShieldCheck size={25} />
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight">
                {aboutData.missionTitle}
              </h2>

              <p className="mt-5 text-base leading-8 text-white/72">
                {aboutData.missionText}
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
                <LucideIcons.Sparkles size={25} />
              </div>

              <h2 className="mt-7 text-3xl font-semibold tracking-tight">
                {aboutData.visionTitle}
              </h2>

              <p className="mt-5 text-base leading-8 text-white/72">
                {aboutData.visionText}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Component (Static) */}
        <Team 
          title={aboutData.teamTitle} 
          description={aboutData.teamDescription} 
          members={aboutData.teamMembers || []} 
        />

        {/* Who We Serve (Pillars) */}
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
                {aboutData.serveEyebrow}
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
                {aboutData.serveTitle}
              </h2>

              <p className="mt-5 text-base leading-8 text-black/60">
                {aboutData.serveText}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-12 grid gap-6 lg:grid-cols-3"
            >
              {aboutData.pillars?.map((pillar: any) => {
                const Icon = (LucideIcons as any)[pillar.icon] || LucideIcons.Check;

                return (
                  <motion.div
                    key={pillar.id}
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