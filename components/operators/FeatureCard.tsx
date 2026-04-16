"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  desc: string;
  index: number;
};

export default function FeatureCard({ title, desc, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="group perspective"
    >
      <div className="
        relative h-full p-8 rounded-2xl
        bg-white border border-gray-200
        transition-all duration-500
        transform-gpu
        group-hover:rotate-[1deg]
        group-hover:-translate-y-2
        group-hover:shadow-2xl
      ">
        
        {/* GLOW EFFECT */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#213e76]/10 to-transparent blur-xl" />

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* NUMBER */}
          <div className="text-[#213e76] text-4xl font-bold mb-4">
            0{index + 1}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-[#213e76] transition">
            {title}
          </h3>

          {/* DESC */}
          <p className="text-gray-600 leading-relaxed text-sm">
            {desc}
          </p>
        </div>

        {/* HOVER BORDER */}
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#213e76]/30 transition duration-500" />
      </div>
    </motion.div>
  );
}