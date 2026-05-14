"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, Play } from "lucide-react";
import ScrollRevealText from "./ScrollRevealText";

export type OperatorFeature = {
  id: string;
  eyebrow?: string | null;
  title: string;
  description: string;
  points: string[];

  videoId?: string | null;
  videoThumbnail?: string | null; 

  previewImage?: string;
  mobileImage?: string;
  image?: string;
  thumbnail?: string;
  previewLink?: string;
  redirectUrl?: string;
  link?: string;
  videoUrl?: string;

  icon: any; 
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

function MobileFrameBlock({
  title,
  imageSrc,
  link,
  accent = "blue",
}: {
  title: string;
  imageSrc: string;
  link?: string;
  accent?: "blue" | "slate";
}) {
  const accentGlow =
    accent === "blue" ? "bg-[#213e76]/12" : "bg-slate-300/40";

  let formattedLink = link;
  if (formattedLink && !formattedLink.startsWith('http://') && !formattedLink.startsWith('https://')) {
    formattedLink = `https://${formattedLink}`;
  }

  const FrameContent = (
    <motion.div
      whileHover={{
        y: -5,
        rotateX: 2,
        rotateY: -3,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative mx-auto flex justify-center"
    >
      <div
        className={`absolute -left-8 top-10 h-28 w-28 rounded-full blur-3xl ${accentGlow}`}
      />
      <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-sky-100 blur-3xl" />

      <div className="relative rounded-[34px] p-4 backdrop-blur">
        <div className="relative mx-auto aspect-[13/28] w-[min(72vw,260px)] overflow-hidden rounded-[2.3rem] border-[5px] border-[#111827] bg-[#111827] shadow-2xl sm:w-[280px] lg:w-[300px]">
          {/* Phone Notch */}
          <div className="absolute left-0 top-0 z-20 flex h-9 w-full items-center justify-center">
            <div className="h-4 w-20 rounded-full bg-black/80" />
          </div>

          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/18" />

          {/* Play Button Icon */}
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-white text-white" />
            </div>
          </div>

          {/* Bottom Shine */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
      </div>
    </motion.div>
  );

  if (formattedLink) {
    return (
      <div className="relative [perspective:1600px]">
        <a
          href={formattedLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open video for ${title}`}
          className="group block"
        >
          {FrameContent}
        </a>
      </div>
    );
  }

  return <div className="relative [perspective:1600px]">{FrameContent}</div>;
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

  const previewImage =
    feature.videoThumbnail ||
    feature.previewImage ||
    feature.mobileImage ||
    feature.image ||
    feature.thumbnail ||
    "/images/step-1.png";

  const previewLink =
    feature.videoId ||
    feature.previewLink ||
    feature.redirectUrl ||
    feature.link ||
    feature.videoUrl ||
    "";

  if (centerSplit) {
    return (
      <section ref={ref} id={feature.id} className="py-2">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-6">
          <motion.div style={{ y: videoY }} className="order-1 lg:order-2">
            <MobileFrameBlock
              title={feature.title}
              imageSrc={previewImage}
              link={previewLink}
              accent={feature.accent}
            />
          </motion.div>

          <motion.div style={{ y: textY }} className="order-2 lg:order-1">
            <TextBlock feature={feature} index={index} />
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id={feature.id} className="py-2">
      <div className="grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-6">
        {leftText && (
          <>
            <motion.div style={{ y: videoY }} className="order-1 lg:order-2">
              <MobileFrameBlock
                title={feature.title}
                imageSrc={previewImage}
                link={previewLink}
                accent={feature.accent}
              />
            </motion.div>

            <motion.div style={{ y: textY }} className="order-2 lg:order-1">
              <TextBlock feature={feature} index={index} />
            </motion.div>
          </>
        )}

        {rightText && (
          <>
            <motion.div style={{ y: videoY }} className="order-1 lg:order-1">
              <MobileFrameBlock
                title={feature.title}
                imageSrc={previewImage}
                link={previewLink}
                accent={feature.accent}
              />
            </motion.div>

            <motion.div style={{ y: textY }} className="order-2 lg:order-2">
              <TextBlock feature={feature} index={index} />
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}