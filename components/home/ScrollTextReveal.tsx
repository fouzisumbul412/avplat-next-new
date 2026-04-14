"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = `Introducing AvPlat Trips: The World's First Integrated Flight Planning and Trip Support Software. Create schedule, select services and fly. It can’t get any simpler!`;

export default function ScrollTextReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={ref}
      className="min-h-[200vh] flex items-center justify-center bg-white px-6"
    >
      <div className="max-w-5xl text-4xl md:text-6xl font-medium leading-tight flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          const color = useTransform(
            scrollYProgress,
            [start, end],
            ["#d1d5db", "#000000"] // grey → black
          );

          return (
            <motion.span
              key={i}
              style={{ color }}
              className="mr-2 mb-2 transition-colors duration-300"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}