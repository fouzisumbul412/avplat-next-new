"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Apple, Play } from "lucide-react";
import AnimatedHeading from "../AnimatedHeading";

export default function WhyAvPlat({ content }: { content: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Failsafe in case content is not yet available
  if (!content) return null;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const words = content.description ? content.description.split(" ") : [];

  return (
    <section ref={containerRef} className="w-full py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AnimatedHeading
            titleBlack={content.titleBlack}
            titleBlue={content.titleBlue}
            align="left"
            size="text-[24px] md:text-[38px] lg:text-[45px]"
          />

          <p className="text-base md:text-xl leading-relaxed flex flex-wrap pt-7">
            {words.map((word: string, i: number) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              const color = useTransform(scrollYProgress, [start, end], ["#000000", "#213e76"]);
              return (
                <motion.span key={i} style={{ color }} className="mr-2 mb-2">
                  {word}
                </motion.span>
              );
            })}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {content.appStoreUrl && (
              <a href={content.appStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#213e76] text-white bg-[#213e76] hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                <Apple size={18} />
                <span className="text-sm font-medium">App Store</span>
              </a>
            )}
            {content.playStoreUrl && (
              <a href={content.playStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#213e76] text-white bg-[#213e76] hover:bg-white hover:text-black hover:border-black transition-all duration-300">
                <Play size={18} />
                <span className="text-sm font-medium">Play Store</span>
              </a>
            )}
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
          <div className="relative w-full h-[500px] md:h-[550px] overflow-hidden shadow-lg rounded-xl">
            <video key={content.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={content.videoUrl} type="video/mp4" />
            </video>
          </div>
        </motion.div>

      </div>
    </section>
  );
}