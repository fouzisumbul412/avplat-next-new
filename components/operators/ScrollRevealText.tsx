"use client";

import { motion } from "framer-motion";

type ScrollRevealTextProps = {
  text: string;
  className?: string;
};

export default function ScrollRevealText({
  text,
  className = "",
}: ScrollRevealTextProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.85 }}
          transition={{
            duration: 0.4,
            delay: index * 0.018,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}