"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  desc: string;
  video: string;
  index: number;
};

export default function FeatureBlock({ title, desc, video, index }: Props) {
  return (
    <section className="min-h-screen flex items-center border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {title}
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {desc}
          </p>
        </motion.div>

        {/* VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}