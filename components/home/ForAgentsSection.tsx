"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ForAgentsSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const text = `At AvPlat, charter operators don’t just execute trips — they run them with complete control.
From planning to payments, our platform gives you the tools to manage operations, optimize costs, and deliver seamless experiences at scale.

Access a global network of services, automate workflows, and eliminate inefficiencies that slow you down.
You’re not just completing flights — you’re building a smarter, more profitable operation with every trip.`;

  const words = text.split(" ");

  return (
    <section
      ref={ref}
      className="w-full bg-white py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <p className="text-sm text-gray-500 mb-6">For Charter Operators</p>

            <motion.div
              initial={{
                clipPath: "inset(50% 50% 50% 50%)",
                scale: 1.2,
                opacity: 0,
              }}
              whileInView={{
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-[260px] h-[340px] relative overflow-hidden rounded-lg"
            >
              <iframe
                src="https://www.youtube.com/embed/IlbOpSccI_E?autoplay=1&mute=1&playsinline=1&loop=1&playlist=IlbOpSccI_E&controls=0&rel=0&modestbranding=1"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="For Agents Small Video"
              />

              <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold leading-tight text-black"
            >
             Don’t Just Fly Missions.
              <br />
              <span className="text-[#213e76]">Own The Operation.</span>
            </motion.h2>

            <motion.div
              initial={{
                clipPath: "inset(50% 50% 50% 50%)",
                scale: 1.2,
                opacity: 0,
              }}
              whileInView={{
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full overflow-hidden rounded-lg h-[220px] sm:h-[260px] md:h-[420px]"
            >
              <iframe
                src="https://www.youtube.com/embed/yrQKUfTskIE?si=8QQhQBg04yBiUxoA"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="For Agents Video"
              />

              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </motion.div>

            <p className="text-sm md:text-base leading-relaxed flex flex-wrap">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                const color = useTransform(
                  scrollYProgress,
                  [start, end],
                  ["#000000", "#213e76"]
                );

                return (
                  <motion.span
                    key={i}
                    style={{ color }}
                    className="mr-1 mb-1"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </p>

            <motion.a
              href="/join"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-[#213e76] text-white px-6 py-3 rounded-full hover:bg-white hover:text-black hover:border-black transition"
            >
              Start Operating Smarter
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}