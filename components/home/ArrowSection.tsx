"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

const images = [
  "/images/a1.jpg",
  "/images/a2.jpeg",
  "/images/a3.jpeg",
  "/images/a4.jpeg",
  "/images/a5.jpeg",
  "/images/a6.jpeg",  
];

const ARROW_DIRECTION: "left" | "right" = "left";

const arrowMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346 440'%3E%3Cpath fill='black' d='M183.98 440 346 220 183.98 0H0l162.02 220L0 440h183.98Z'/%3E%3C/svg%3E")`;

type AnimatedWordProps = {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
};

function AnimatedWord({
  word,
  progress,
  start,
  end,
}: AnimatedWordProps) {
  const color = useTransform(progress, [start, end], ["#8a8f98", "#213e76"]);

  return (
    <motion.span
      style={{ color }}
      className="mr-1 mb-1 inline-block md:mr-2 md:mb-2"
    >
      {word}
    </motion.span>
  );
}

type ArrowCardProps = {
  src: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function ArrowCard({ src, index, total, progress }: ArrowCardProps) {
  const step = 0.13;
  const start = index === 0 ? 0 : 0.1 + (index - 1) * step;
  const end = index === 0 ? 0.08 : start + 0.2;

  const enterFrom = ARROW_DIRECTION === "left" ? "10%" : "-10%";

  const opacity =
    index === 0
      ? useTransform(progress, [0, 1], [1, 1])
      : useTransform(progress, [start, end], [0.08, 1]);

  const scale =
    index === 0
      ? useTransform(progress, [0, 1], [1, 1])
      : useTransform(progress, [start, end], [0.8, 1]);

  const x =
    index === 0
      ? useTransform(progress, [0, 1], ["0%", "0%"])
      : useTransform(progress, [start, end], [enterFrom, "0%"]);

  const y =
    index === 0
      ? useTransform(progress, [0, 1], [0, 0])
      : useTransform(progress, [start, end], [18, 0]);

  const depthStrength = (total - index - 1) * 8;
  const parallaxY = useTransform(progress, [0, 1], [0, -depthStrength]);
  const parallaxScale = useTransform(
    progress,
    [0, 1],
    [1, 1 - (total - index - 1) * 0.008]
  );

  const flipArrow = ARROW_DIRECTION === "left" ? "scaleX(-1)" : "scaleX(1)";
  const keepImageNormal =
    ARROW_DIRECTION === "left" ? "scaleX(-1)" : "scaleX(1)";

  return (
    <motion.div
      style={{
        opacity,
        scale,
        x,
        y,
      }}
      className="
        relative shrink-0 will-change-transform
        -ml-[10vw]
        sm:-ml-[8vw]
        md:-ml-[6vw]
        lg:-ml-[5vw]
        xl:-ml-[4vw]
        2xl:-ml-[3.2vw]
        first:ml-0
      "
    >
      <motion.div
        style={{
          y: parallaxY,
          scale: parallaxScale,
        }}
        className="will-change-transform"
      >
        <div
          className="
            relative
            w-[20vw] min-w-[105px] max-w-[255px]
            aspect-[346/440]
            overflow-hidden
          "
          style={{
            transform: flipArrow,
            WebkitMaskImage: arrowMask,
            maskImage: arrowMask,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <img
            src={src}
            alt=""
            draggable={false}
            className="h-full w-full pointer-events-none select-none object-cover"
            style={{
              transform: keepImageNormal,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ArrowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 18,
    mass: 0.42,
    restDelta: 0.001,
  });

  const titleOpacity = useTransform(smoothProgress, [0, 0.05], [0.4, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.05], [40, 0]);

  const titleRevealScaleX = useTransform(
    smoothProgress,
    [0.02, 0.08],
    [1, 0]
  );

  const arrowsWrapperY = useTransform(smoothProgress, [0, 1], [18, -12]);

  const textOpacity = useTransform(smoothProgress, [0.64, 0.78], [0.2, 1]);
  const textY = useTransform(smoothProgress, [0.64, 0.78], [26, 0]);

  const text =
    "It’s about efficiency. Transparency. Total control. You’re not just managing a trip, you’re orchestrating every detail with confidence. That’s what AvPlat empowers you to do.";

  const words = text.split(" ");

  return (
    <section ref={sectionRef} className="relative h-[280vh] bg-white">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-24 sm:px-6 md:py-28 lg:px-8 xl:py-36">
          {/* Heading */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="mb-10 flex justify-center sm:mb-12 md:mb-16"
            aria-label="This isn’t just about flight operations."
          >
            <div
              aria-hidden="true"
              className="relative block w-fit text-center"
            >
              <h2 className="text-center text-[30px] font-semibold leading-[1.08] sm:text-[42px] md:text-[58px] lg:text-[72px]">
                <span className="text-black">This isn’t Just </span>
                <span className="text-[#213e76]">About Flight Operations</span>
              </h2>

              <motion.div
                style={{
                  scaleX: titleRevealScaleX,
                  transformOrigin: "100% 50%",
                }}
                className="absolute inset-[10%_-1%_-10%_0] z-[1] bg-white/80"
              />
            </div>
          </motion.div>

          {/* Arrows */}
          <motion.div
            style={{ y: arrowsWrapperY }}
            className="mx-auto flex w-full items-center justify-center overflow-visible"
          >
            <div className="flex w-full items-center justify-center">
              {images.map((src, i) => (
                <ArrowCard
                  key={`${src}-${i}`}
                  src={src}
                  index={i}
                  total={images.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="mx-auto mt-10 max-w-[980px] sm:mt-12 md:mt-14"
          >
            <p className="flex flex-wrap justify-center text-center text-[18px] leading-[1.6] text-black sm:text-[20px] md:text-[22px]">
              {words.map((word, i) => {
                const start = 0.7 + (i / words.length) * 0.22;
                const end = start + 0.06;

                return (
                  <AnimatedWord
                    key={`${word}-${i}`}
                    word={word}
                    progress={smoothProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}