"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Apple, Play } from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.avplat.aviation&pcampaignid=web_share.aviation&pcampaignid=web_share";
const APP_STORE_URL =
  "https://apps.apple.com/us/app/avplat/id1369917026";

export default function WhyAvPlat2() {
  const containerRef = useRef<HTMLDivElement>(null);

  const text = `Introducing AvPlat Charters: The World's First Integrated Flight Planning and Trip Support Software. Create schedule, select services and fly. It can’t get any simpler!`;

  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  return (
    <section
      ref={containerRef}
      className="bg-white flex items-center px-6 md:px-0 sm:px-5"
      style={{ height: "60vh" }} // slightly increased for buttons
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto h-full items-center">

        {/* LEFT */}
        <div className="md:col-span-1">
          <h2 className="text-4xl text-[#213e76] tracking-wide font-semibold">
            Why AvPlat
          </h2>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 flex flex-col justify-center">

          {/* TEXT */}
          <h4 className="text-xl md:text-3xl font-normal leading-tight flex flex-wrap">
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
                  className="mr-2 mb-2"
                >
                  {word}
                </motion.span>
              );
            })}
          </h4>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-6">

            {/* App Store */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#213e76] text-white bg-[#213e76] hover:bg-white hover:text-black hover:border-black transition-all duration-300"
            >
              <Apple size={18} />
              <span className="text-sm font-medium">App Store</span>
            </a>

            {/* Play Store */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#213e76] text-white bg-[#213e76] hover:bg-white hover:text-black hover:border-black transition-all duration-300"
            >
              <Play size={18} />
              <span className="text-sm font-medium">Play Store</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}