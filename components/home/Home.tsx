"use client";

import Hero from "@/components/home/Hero";
import ScrollTextReveal from "./ScrollTextReveal";
import WhyAvPlat from "./WhyAvPlat";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAvPlat />
      {/* <ScrollTextReveal /> */}
    </main>
  );
}