"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VideoSplit() {
  return (
    <section className="w-full h-screen px-10 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full">

        {/* Left Video */}
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-1/2 md:h-full"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/f.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Right Video */}
        <motion.div
          initial={{ x: "100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-1/2 md:h-full"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-mob.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>
    </section>
  );
}