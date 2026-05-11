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

function AnimatedWord({ word, progress, start, end }: AnimatedWordProps) {
  const color = useTransform(progress, [start, end], ["#8a8f98", "#213e76"]);

  return (
    <motion.span style={{ color }} className="mr-1 inline-block">
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
      : useTransform(progress, [start, end], [0.86, 1]);

  const x =
    index === 0
      ? useTransform(progress, [0, 1], ["0%", "0%"])
      : useTransform(progress, [start, end], [enterFrom, "0%"]);

  const y =
    index === 0
      ? useTransform(progress, [0, 1], [0, 0])
      : useTransform(progress, [start, end], [6, 0]);

  const depthStrength = (total - index - 1) * 6;

  const parallaxY = useTransform(progress, [0, 1], [0, 0]);

  const parallaxScale = useTransform(
    progress,
    [0, 1],
    [1, 1 - (total - index - 1) * 0.006],
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
        -ml-[7vw]
        sm:-ml-[5vw]
        md:-ml-[4vw]
        lg:-ml-[3vw]
        first:ml-0
      "
    >
      <motion.div
        style={{
          y: parallaxY,
          scale: parallaxScale,
        }}
      >
        <div
          className="
            relative
            w-[23vw]
            sm:w-[20vw]
            md:w-[18vw]
            min-w-[52px]
            max-w-[220px]
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
            className="pointer-events-none h-full w-full select-none object-cover"
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
    stiffness: 100,
    damping: 20,
    mass: 0.45,
  });

  const titleOpacity = useTransform(smoothProgress, [0, 0.05], [0.4, 1]);

  const titleY = useTransform(smoothProgress, [0, 0.05], [20, 0]);

  const arrowsWrapperY = useTransform(smoothProgress, [0, 1], [0, 0]);

  const textOpacity = useTransform(smoothProgress, [0.64, 0.78], [0.2, 1]);

  const textY = useTransform(smoothProgress, [0.64, 0.78], [20, 0]);

  const text =
    "It’s about efficiency. Transparency. Total control. You’re not just managing a trip, you’re orchestrating every detail with confidence. That’s what AvPlat empowers you to do.";

  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-white
        h-[220vh]
        sm:h-[240vh]
        md:h-[260vh]
      "
    >
      <div className="sticky top-0 overflow-hidden">
        <div
          className="
           mx-auto w-full max-w-[1600px] px-4 py-24 sm:px-6 md:py-28 lg:px-8 xl:py-36
          "
        >
          {/* Heading */}
          <motion.div
            style={{
              opacity: titleOpacity,
              y: titleY,
            }}
            className="
              relative z-20
              flex justify-center 
            "
          >
            <h2
              className="
                max-w-[900px]
                text-center
                text-[34px]
                font-semibold
                leading-[1.08]
                tracking-[-0.03em]
                sm:text-[48px]
                md:text-[58px]
                lg:text-[72px]
              "
            >
              <span className="text-black">This isn’t Just </span>

              <span className="text-[#213e76]">About Flight Operations</span>
            </h2>
          </motion.div>

          {/* ARROWS */}
          <motion.div
            style={{
              y: arrowsWrapperY,
            }}
            className="
  relative z-10
  mt-10
  mb-10
  flex w-full items-center justify-center
"
          >
            <div className="flex items-center justify-center">
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

          {/* TEXT */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="mx-auto max-w-[980px]"
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
