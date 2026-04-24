"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "01",
    title: "Create Itinerary.",
    desc: "and Trip Estimates. Instantly!",
  },
  {
    id: "02",
    title: "Activate Your Trip.",
    desc: "At the touch of a button!",
  },
  {
    id: "03",
    title: "Extensive Vendor Network",
    desc: "No Cascading Costs!",
  },
  {
    id: "04",
    title: "Activities. ",
    desc: "Notifications. Keeps you alert!",
  },
  {
    id: "05",
    title: "Change Itinerary,Passengers.",
    desc: "As much as you want!",
  },
  {
    id: "06",
    title: "Pay your Bills. ",
    desc: "Hassle Free!",
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
              <div>Flight Operations,</div>
              <div className="text-[#213e76]">Reimagined.</div>
            </motion.h2>

           <Link href="/operators">
  <motion.button
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    viewport={{ once: true }}
    className="mt-8 flex items-center gap-3 px-6 py-3 bg-[#213e76] text-white rounded-full group"
  >
    <span className="text-sm font-medium">
      Operate Your Flight
    </span>
    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </motion.button>
</Link>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <p className="text-sm text-gray-500 mb-6">Process:</p>

            <div className="space-y-2">

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
                  className="border-t pt-3 border-gray-300 first:border-t-0"
                >
                  <div className="flex gap-6">

                    {/* NUMBER */}
                    <span className="text-gray-400 text-sm min-w-[30px]">
                     <h6> {step.id}</h6>
                    </span>

                    {/* TEXT */}
                    <p className="text-lg md:text-2xl leading-snug font-semibold">
                      {step.title}{" "}
                      <span className="text-gray-600 font-normal">
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