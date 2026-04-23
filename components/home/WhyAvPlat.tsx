"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Apple, Play } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

const text = `Introducing AvPlat Charters: The World's First Integrated Flight Planning and Trip Support Software. Create schedule, select services and fly. It can’t get any simpler!`;

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.avplat.aviation&pcampaignid=web_share.aviation&pcampaignid=web_share";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/avplat/id1369917026";

export default function WhyAvPlat() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const words = text.split(" ");

  return (
    <section
      ref={containerRef}
      className="w-full py-16 px-4 md:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          
           <AnimatedHeading
  titleBlack="Why"
  titleBlue="AvPlat"
  align="left"
   size="text-[24px] md:text-[38px] lg:text-[45px]"
/>

          {/* Scroll Reveal Text */}
          <p className="text-base md:text-xl leading-relaxed flex flex-wrap pt-7">
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
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            
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
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/hero-mob.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
}