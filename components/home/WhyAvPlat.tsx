"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyAvPlat() {
  const containerRef = useRef<HTMLDivElement>(null);

  const text = `Introducing AvPlat Trips: The World's First Integrated Flight Planning and Trip Support Software. Create schedule, select services and fly. It can’t get any simpler!`;

  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"], // tighter scroll range
  });

  return (
    <section
      ref={containerRef}
      className="bg-white"
      style={{ height: "50vh" }} // 👈 LIMIT HEIGHT
    >
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto h-full items-center">
        
        {/* LEFT SMALL HEADING */}
        <div className="md:col-span-1">
          <p className="text-sm text-gray-700 tracking-wide">
            Why AvPlat
          </p>
        </div>

        {/* RIGHT BIG TEXT */}
        <div className="md:col-span-2">
          <h6 className="text-xl md:text-2xl font-medium leading-tight flex flex-wrap">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;

              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["#c7c7c7", "#000000"]
              );

              return (
                <motion.span
                  key={i}
                  style={{ color }}
                  className="mr-2 mb-2"
                >
                  {word}
                </motion.span>
              );
            })}
          </h6>
        </div>

      </div>
    </section>
  );
}