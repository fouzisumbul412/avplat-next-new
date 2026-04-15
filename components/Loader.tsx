"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  // Simulate loading %
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      
      <div className="text-center">

        {/* PERCENT */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {progress}%
        </motion.h1>

        {/* LOADING TEXT */}
        <div className="relative inline-block">
          <h2 className="text-xl md:text-3xl font-semibold tracking-widest">
            LOADING
          </h2>

          {/* UNDERLINE ANIMATION */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="h-[3px] bg-black mt-2 rounded-full"
          />
        </div>

      </div>
    </div>
  );
}