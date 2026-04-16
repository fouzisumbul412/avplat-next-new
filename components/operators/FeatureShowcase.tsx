"use client";

import FeatureBlock from "./FeatureBlock";

const features = [
  {
    title: "Create Itinerary and Trip Estimates. Instantly!",
    desc: "30 seconds is all it takes to create a schedule, select services and generate a trip estimate. Share the itinerary instantly and activate your trip when ready.",
    video: "/videos/feature1.mp4",
  },
  {
    title: "Activate your trip. At the touch of a button!",
    desc: "One touch activates your trip – from fuel to catering, permits to transport. Sit back and relax as everything progresses seamlessly.",
    video: "/videos/feature2.mp4",
  },
  {
    title: "Extensive Vendor Network. No Cascading Costs!",
    desc: "Select vendors with price and quality discovery. Eliminate intermediaries and reduce operational costs drastically.",
    video: "/videos/feature3.mp4",
  },
  {
    title: "Activities. Notifications. Keeps you alert!",
    desc: "Automated alerts, tasking, and chat systems keep you informed and in control at all times.",
    video: "/videos/feature4.mp4",
  },
  {
    title: "Change Itinerary, Passengers. As much as you want!",
    desc: "Modify dates, passengers, and destinations effortlessly while the system coordinates everything automatically.",
    video: "/videos/feature5.mp4",
  },
  {
    title: "Pay your bills. Hassle Free!",
    desc: "Invoices are auto-generated and managed via wallet. Access anytime by trip or service category.",
    video: "/videos/feature6.mp4",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="bg-black text-white">
      {features.map((item, index) => (
        <FeatureBlock key={index} {...item} index={index} />
      ))}
    </section>
  );
}