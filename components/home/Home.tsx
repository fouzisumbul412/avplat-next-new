"use client";

import Hero from "@/components/home/Hero";
import ScrollTextReveal from "./ScrollTextReveal";
import VideoSplit from "./VideoSplit";
import ArrowSection from "./ArrowSection";
import RewiredSection from "./RewiredSection";
import ServicesSection from "./ServicesSection";
import ForAgentsSection from "./ForAgentsSection";
import WhyAvPlat from "./WhyAvPlat";
import Aviation3DCarousel from "./Aviation3DCarousel";
import FaqSection from "./FaqSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyAvPlat />
      {/* <ScrollTextReveal /> */}
      {/* <VideoSplit /> */}
      <ArrowSection />
      <Aviation3DCarousel />
      <RewiredSection />
      {/* <ForAgentsSection /> */}
      <ServicesSection />
      <FaqSection />
    </main>
  );
}