"use client";

import Hero from "@/components/home/Hero";
import ScrollTextReveal from "./ScrollTextReveal";
import WhyAvPlat from "./WhyAvPlat";
import VideoSplit from "./VideoSplit";
import ArrowSection from "./ArrowSection";
import RewiredSection from "./RewiredSection";
import ServicesSection from "./ServicesSection";
import ForAgentsSection from "./ForAgentsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAvPlat />
      {/* <ScrollTextReveal /> */}
      <VideoSplit />
      <ArrowSection />
      <RewiredSection />
      <ForAgentsSection />
      <ServicesSection />
    </main>
  );
}