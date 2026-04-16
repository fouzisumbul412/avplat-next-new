"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Earn",
    desc: "Stop chasing leads that go nowhere. Set your service rates once and let AvPlat automatically generate accurate estimates for the right customers — saving time and increasing conversions.",
    image:
      "/images/Earn.png",
  },
  {
    id: "02",
    title: "Accept",
    desc: "Manage service requests effortlessly.Review, accept, and schedule jobs in one click — from fuel and catering to permits and handling — all in one unified platform.",
    image:
      "/images/Accept.png",
  },
  {
    id: "03",
    title: "Manage",
    desc: "Stay in control with real-time updates.Smart notifications, task tracking, and built-in communication keep every trip organized and every stakeholder aligned.",
    image:
      "/images/Manage.png",
  },
  {
    id: "04",
    title: "Adapt",
    desc: "Handle changes without the chaos.Update schedules, services, or trip details anytime — the platform automatically syncs everything and keeps everyone informed.",
    image:
      "/images/Adapt.png",
  },
  {
    id: "05",
    title: "Get Paid",
    desc: "Faster payments, zero follow-ups.Automated invoicing and scheduled settlements ensure predictable cash flow — without the usual back-and-forth.",
    image:
      "/images/GetPaid.png",
  },
  
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#151717] text-white py-16 md:py-24">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="grid md:grid-cols-3 items-end">
          
          {/* LEFT */}
          <p className="text-xl text-gray-400">Services</p>

          {/* CENTER ALIGN WITH TITLES */}
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
            onMouseLeave={() => setActive(null)}
            className="relative w-full group overflow-hidden"
          >

            {/* FULL WIDTH BORDERS */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

            {/* BACKGROUND IMAGE */}
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

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/50" />
            </motion.div>

            {/* CURTAIN */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: active === i ? "-100%" : "0%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#151717] z-10"
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
                <h3 className="text-5xl md:text-7xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                {/* UNDERLINE */}
                <div className="h-[2px] bg-white w-0 mx-auto mt-3 transition-all duration-500 group-hover:w-24" />
              </div>

              {/* RIGHT */}
              <div className="flex justify-end">
                <ArrowRight
                  size={90}
                  className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* BOTTOM TEXT */}
      <div className=" mx-auto  mt-20">

        {/* LEFT ALIGNED */}
        <div className="md:pl-[120px]">
          <p className="text-xl md:text-3xl text-gray-300 leading-snug max-w-3xl">
            Power your services with a platform designed for speed, clarity, and growth.{" "}
            <span className="text-gray-500">
             Join a smarter way to manage operations, reduce friction, and increase revenue.
            </span>
          </p>

          <button className="mt-8 flex items-center gap-3 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Get Started with AvPlat
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

    </section>
  );
}