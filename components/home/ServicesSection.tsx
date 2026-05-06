"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ServicesSection({ items = [] }: { items: any[] }) {
  const [active, setActive] = useState<number | null>(0);

  const services = items.map((item, i) => ({
    id: (i + 1).toString().padStart(2, '0'), 
    title: item.title,
    desc: item.description,
    image: item.image,
    link: item.link || "/service-provider",
  }));

  if (services.length === 0) return null;

  return (
    <section className="w-full bg-black text-white py-16 md:py-24">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-3 items-end">
          <p className="text-xl text-gray-400">Service Providers</p>

          <div className="md:col-span-2 md:pl-[120px]">
            <h2 className="text-3xl md:text-6xl font-semibold leading-tight">
              <span className="text-white">How AvPlat</span>
              <br />
              <span className="text-gray-400">Empowers You</span>
            </h2>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="w-full">
        {services.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(0)}
            className="relative w-full group overflow-hidden"
          >

            {/* BORDERS */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: active === i ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />
            </motion.div>

            {/* CURTAIN */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: active === i ? "-100%" : "0%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-black z-10"
            />

            {/* CONTENT */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 items-center gap-6 py-14 md:py-20">

              {/* LEFT */}
              <div className="flex gap-5 items-start">
                <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/30 text-[12px] text-white/70">
                  {item.id}
                </span>

                <p className="text-sm md:text-base text-gray-300 max-w-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* CENTER */}
              <div className="text-center">
                <h3 className="text-3xl md:text-6xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <div className="h-[2px] bg-white w-0 mx-auto mt-3 transition-all duration-500 group-hover:w-24" />
              </div>

              {/* RIGHT (CLICKABLE ARROW) */}
              <div className="flex justify-end">
                <Link href={item.link}>
                  <span className="inline-flex cursor-pointer">
                    <ArrowRight
                      size={90}
                      className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </span>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-20">
        <div className="md:pl-[120px]">
          <p className="text-xl md:text-3xl text-gray-300 leading-snug max-w-3xl">
            Power your services with a platform designed for speed, clarity, and growth.{" "}
            <span className="text-gray-500">
              Join a smarter way to manage operations, reduce friction, and increase revenue.
            </span>
          </p>

          <Link href="/service-provider">
            <button className="mt-8 flex items-center gap-3 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Join as Provider
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}