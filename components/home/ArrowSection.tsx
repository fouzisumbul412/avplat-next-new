"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471",
];

const arrowMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 346 440'%3E%3Cpath fill='black' d='M183.98 440 346 220 183.98 0H0l162.02 220L0 440h183.98Z'/%3E%3C/svg%3E")`;

type AnimatedWordProps = {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
};

const AnimatedWord = ({
  word,
  progress,
  start,
  end,
}: AnimatedWordProps) => {
  const color = useTransform(progress, [start, end], ["#c7c7c7", "#000000"]);

  return (
    <motion.span style={{ color }} className="mr-1 md:mr-2 mb-1 md:mb-2">
      {word}
    </motion.span>
  );
};

type ArrowCardProps = {
  src: string;
  progress: MotionValue<number>;
};

const ArrowCard = ({ src, progress }: ArrowCardProps) => {
  const fadeOut = useTransform(progress, [0.7, 1], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: false, amount: 0.25 }}
      style={{ opacity: fadeOut }}
      className="
  relative shrink-0
-ml-[8vw]
sm:-ml-[6vw]
md:-ml-[5vw]
lg:-ml-[4vw]
xl:-ml-[3vw]
2xl:-ml-[2.5vw]
first:ml-0
"
    >
      <div
        className="
          relative
          w-[19vw] min-w-[110px] max-w-[255px]
          aspect-[346/440]
        "
        style={{
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
          src={`${src}?w=1200`}
          alt=""
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

export default function ArrowSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const text = `It’s about identity. Progress. Getting unstuck. You’re not just looking for a place. You’re looking for alignment. That’s what we help you find.`;

  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className="w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-10 text-center text-2xl font-semibold leading-tight sm:mb-12 sm:text-3xl md:mb-16 md:text-5xl"
        >
          This isn’t just{" "}
          <span className="text-gray-400">about real estate.</span>
        </motion.h2>

        <div className="mx-auto flex w-full items-center justify-center overflow-visible">
          <div className="flex w-full items-center justify-center">
            {images.map((src, i) => (
              <ArrowCard
                key={`${src}-${i}`}
                src={src}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 md:mt-12">
          <p className="flex flex-wrap justify-center text-center text-sm leading-relaxed sm:text-base md:text-lg">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;

              return (
                <AnimatedWord
                  key={`${word}-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}