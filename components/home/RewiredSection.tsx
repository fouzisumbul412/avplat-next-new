"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Talk to a Real Human.",
    desc: "We match you with an expert who actually listens.",
  },
  {
    id: "02",
    title: "Get Clarity.",
    desc: "We define what you really need, not just what’s available.",
  },
  {
    id: "03",
    title: "Move Forward.",
    desc: "We find what fits — and make it happen.",
  },
];

export default function RewiredSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-semibold leading-tight"
            >
              <div>Real Estate,</div>
              <div className="text-gray-400">Rewired.</div>
            </motion.h2>

            {/* BUTTON */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full group"
            >
              <span className="text-sm font-medium">
                Start Your Search
              </span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-sm text-gray-500 mb-6">Steps:</p>

            <div className="space-y-8">

              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.2, // 👈 stagger
                  }}
                  viewport={{ once: true }}
                  className="border-t pt-6 first:border-t-0"
                >
                  <div className="flex gap-6">

                    {/* NUMBER */}
                    <span className="text-gray-400 text-sm min-w-[30px]">
                      {step.id}
                    </span>

                    {/* TEXT */}
                    <p className="text-lg md:text-2xl leading-snug font-medium">
                      {step.title}{" "}
                      <span className="text-gray-400 font-normal">
                        {step.desc}
                      </span>
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}