"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Buy",
    desc: "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We’ve done this over 10,000 times, and we know what wins.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: "02",
    title: "Sell",
    desc: "Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    id: "03",
    title: "Rent",
    desc: "Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won’t find online.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
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
          <p className="text-sm text-gray-400">Services</p>

          {/* CENTER ALIGN WITH TITLES */}
          <div className="md:col-span-2 md:pl-[120px]">
            <h2 className="text-3xl md:text-6xl font-semibold leading-tight">
              <span className="text-white">How FIND</span>
              <br />
              <span className="text-gray-400">Can Help You</span>
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
            Our certified agents guide you through every stage of real estate{" "}
            <span className="text-gray-500">
              with expert knowledge and reliable support.
            </span>
          </p>

          <button className="mt-8 flex items-center gap-3 border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Get Started with FIND
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

    </section>
  );
}