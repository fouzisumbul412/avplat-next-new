"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type AnimatedHeadingProps = {
  titleBlack: string;
  titleBlue: string;
  align?: "left" | "center" | "right";
  size?: string;
};

export default function AnimatedHeading({
  titleBlack,
  titleBlue,
  align = "center",
  size = "text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px]",
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  // Smooth & slightly fast animation
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  // Softer opacity (not instant)
  const opacity = useTransform(smooth, [0, 0.15], [0, 1]);

  // Smooth upward motion
  const y = useTransform(smooth, [0, 0.15], [60, 0]);

  // Blur → sharp effect (KEY for premium feel)
  const blur = useTransform(smooth, [0, 0.15], ["blur(8px)", "blur(0px)"]);

  // Slightly slower reveal wipe
  const reveal = useTransform(smooth, [0.02, 0.25], [1, 0]);

  // Alignment control
  const alignment =
    align === "left"
      ? "justify-start text-left"
      : align === "right"
      ? "justify-end text-right"
      : "justify-center text-center";

  return (
    <div ref={ref} className={`flex ${alignment}`}>
      <motion.div
        style={{
          opacity,
          y,
          filter: blur,
        }}
        className="relative"
      >
        {/* Heading */}
        <h2 className={`${size} font-semibold leading-tight`}>
          <span className="text-black">{titleBlack} </span>
          <span className="text-[#213e76]">{titleBlue}</span>
        </h2>

        {/* Reveal overlay */}
        <motion.div
          style={{
            scaleX: reveal,
            transformOrigin: "100% 50%",
          }}
          className="absolute inset-0 bg-white"
        />
      </motion.div>
    </div>
  );
}