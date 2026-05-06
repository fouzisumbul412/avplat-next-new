"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Aviation3DCarousel({ items = [] }: { items: any[] }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const touchStartX = useRef(0);

  const walkthroughSteps = items.map((item, i) => ({
    id: i + 1,
    title: item.title,
    desc: item.description,
    screenTitle: item.link || "Step", 
    image: item.image,
  }));

  const total = walkthroughSteps.length;
  const getIndex = (i: number) => (i + total) % total;

  const prev = () => setIndex((i) => getIndex(i - 1));
  const next = () => setIndex((i) => getIndex(i + 1));

  // Autoplay
  useEffect(() => {
    if (hover || total === 0) return;
    const int = setInterval(next, 3500);
    return () => clearInterval(int);
  }, [hover, total]);

  // Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  // Prevent rendering if there are no items
  if (total === 0) return null;

  const visible = [
    getIndex(index - 1),
    getIndex(index),
    getIndex(index + 1),
  ];

  return (
    <div
      className="w-full py-20 bg-gradient-to-b from-[#000000] to-[#02040a] text-white overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Private Charter Journey
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Step {index + 1} of {total}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative flex flex-col items-center justify-center perspective-[1000px]">

        {/* Phones */}
        <div className="hidden md:flex items-center gap-8">
          {visible.map((itemIndex, i) => {
            const isCenter = i === 1;

            return (
              <motion.div
                key={walkthroughSteps[itemIndex].id} // Using dynamic ID
                animate={{
                  scale: isCenter ? 1 : 0.85,
                  rotateY: isCenter ? 0 : i === 0 ? 25 : -25,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 0,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow */}
                {isCenter && (
                  <div className="absolute inset-0 blur-2xl bg-blue-500/20 rounded-full scale-110"></div>
                )}

                {/* Phone */}
                <div className="w-[260px] h-[560px] bg-black rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden relative">

                  {/* FULL COVER IMAGE */}
                  <img
                    src={walkthroughSteps[itemIndex].image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  )}

                  {/* Minimal UI (dynamic screenTitle label) */}
                  <div className="absolute top-4 left-4 text-xs text-blue-950">
                    {walkthroughSteps[itemIndex].screenTitle}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[260px] h-[560px] bg-black rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden relative">

              <img
                src={walkthroughSteps[index].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              <div className="absolute top-4 left-4 text-xs text-white/80">
                Step {walkthroughSteps[index].id}
              </div>

            </div>
          </motion.div>
        </div>

        {/* OUTSIDE CONTENT */}
        <div className="mt-10 max-w-xl text-center px-6">
          <h3 className="text-xl md:text-2xl font-semibold">
            {walkthroughSteps[index].title}
          </h3>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            {walkthroughSteps[index].desc}
          </p>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-4 md:right-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {walkthroughSteps.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}