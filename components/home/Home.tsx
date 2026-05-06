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
import Loader from "../Loader";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, isLoading } = useSWR("/api/home", fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  const homeData = data?.data;

  return (
    <main>
      <Hero />
      <WhyAvPlat content={homeData} />
      {/* <ScrollTextReveal /> */}
      {/* <VideoSplit /> */}
      <ArrowSection />
      <Aviation3DCarousel items={homeData?.sections?.CAROUSEL} />
      <RewiredSection items={homeData?.sections?.REWIRED} />
      {/* <ForAgentsSection /> */}
      <ServicesSection items={homeData?.sections?.SERVICES} />
      <FaqSection items={homeData?.sections?.FAQ} />
    </main>
  );
}