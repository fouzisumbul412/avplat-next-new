"use client";

import { motion, type Variants } from "framer-motion";
import * as Icons from "lucide-react"; 
import { Sparkles, ArrowRight } from "lucide-react";
import useSWR from "swr"; 
import PageHero from "@/components/PageHero";
import OperatorFeatureSection, {
  type OperatorFeature,
} from "@/components/operators/OperatorFeatureSection";
import ScrollRevealText from "@/components/operators/ScrollRevealText";
import Loader from "@/components/Loader";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

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
  const { data, isLoading } = useSWR("/api/pages/charter", fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  if (!data?.success || !data?.data) {
    return null;
  }

  const pageData = data.data;
  const heroStats = pageData.stats || [];

  const features: OperatorFeature[] = pageData.features?.map((f: any) => ({
    ...f,
    icon: (Icons as any)[f.icon] || Icons.Star,
  })) || [];

  return (
    <main className="overflow-hidden bg-white text-slate-900 dark:bg-white dark:text-slate-900">
      <PageHero
        title={pageData.pageTitle}
        image={pageData.heroImage || "/images/GetPaid.png"}
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
              {pageData.badgeText && (
                <div className="inline-flex items-center gap-2 rounded-full border border-[#213e76]/10 bg-[#213e76]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#213e76]">
                  <Sparkles className="h-4 w-4" />
                  {pageData.badgeText}
                </div>
              )}

              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
                {pageData.heroTitle} 
              </h2>

              <div className="mt-5 max-w-3xl">
                <ScrollRevealText
                  text={pageData.heroDescription}
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
              {heroStats.map((item: any) => (
                <motion.div
                  key={item.id || item.label}
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
              key={feature.id || index}
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