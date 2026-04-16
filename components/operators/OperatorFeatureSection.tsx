"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, PlayCircle } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

export type OperatorFeature = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  videoId: string;
  icon: LucideIcon;
  accent?: "blue" | "slate";
  layout?: "leftText" | "rightText" | "centerSplit";
};

type Props = {
  feature: OperatorFeature;
  index: number;
};

const listContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function VideoBlock({
  title,
  videoId,
  accent = "blue",
}: {
  title: string;
  videoId: string;
  accent?: "blue" | "slate";
}) {
  const accentGlow =
    accent === "blue" ? "bg-[#213e76]/12" : "bg-slate-300/40";

  return (
    <div className="relative [perspective:1600px]">
      <motion.div
        whileHover={{
          y: -4,
          rotateX: 2,
          rotateY: -3,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className={`absolute -left-4 top-8 h-24 w-24 rounded-full blur-3xl ${accentGlow}`} />
        <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-sky-100 blur-3xl" />

        {/* <div className="absolute left-4 top-4 z-10 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#213e76] shadow-[0_8px_20px_rgba(18,38,63,0.08)]">
          Watch the workflow
        </div> */}

        <div className="rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-[0_20px_50px_rgba(18,38,63,0.08)]">
          <div className="mb-3 flex items-center justify-between rounded-[18px] border border-slate-200/80 bg-[#f7faff] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#213e76]" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>

            {/* <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <PlayCircle className="h-4 w-4 text-[#213e76]" />
              Feature Video
            </div> */}
          </div>

          <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white">
            <div className="aspect-[16/10] w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function TextBlock({
  feature,
  index,
}: {
  feature: OperatorFeature;
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_16px_38px_rgba(18,38,63,0.05)] md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#213e76]/8 text-[#213e76]">
          <Icon className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#213e76]">
          {feature.eyebrow}
        </p>
      </div>

      <div className="mt-5 flex items-end gap-4">
        <span className="text-5xl font-semibold leading-none text-[#213e76]/10 md:text-6xl">
          0{index + 1}
        </span>
        <h2 className="text-2xl font-semibold leading-tight md:text-4xl">
          {feature.title}
        </h2>
      </div>

      <div className="mt-5">
        <ScrollRevealText
          text={feature.description}
          className="text-base leading-7 text-slate-600 md:text-lg"
        />
      </div>

      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid gap-3"
      >
        {feature.points.map((point) => (
          <motion.div
            key={point}
            variants={listItem}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#213e76]" />
            <p className="text-sm leading-6 text-slate-700 md:text-base">
              {point}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function OperatorFeatureSection({
  feature,
  index,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [28, -18]);
  const videoY = useTransform(scrollYProgress, [0, 1], [-18, 24]);

  const leftText = feature.layout === "leftText";
  const rightText = feature.layout === "rightText";
  const centerSplit = feature.layout === "centerSplit";

  if (centerSplit) {
    return (
      <section ref={ref} id={feature.id} className="py-2">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
          <motion.div style={{ y: textY }}>
            <TextBlock feature={feature} index={index} />
          </motion.div>

          <motion.div style={{ y: videoY }}>
            <VideoBlock
              title={feature.title}
              videoId={feature.videoId}
              accent={feature.accent}
            />
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id={feature.id} className="py-2">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {leftText && (
          <>
            <motion.div style={{ y: textY }}>
              <TextBlock feature={feature} index={index} />
            </motion.div>
            <motion.div style={{ y: videoY }}>
              <VideoBlock
                title={feature.title}
                videoId={feature.videoId}
                accent={feature.accent}
              />
            </motion.div>
          </>
        )}

        {rightText && (
          <>
            <motion.div style={{ y: videoY }} className="lg:order-1">
              <VideoBlock
                title={feature.title}
                videoId={feature.videoId}
                accent={feature.accent}
              />
            </motion.div>
            <motion.div style={{ y: textY }} className="lg:order-2">
              <TextBlock feature={feature} index={index} />
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}