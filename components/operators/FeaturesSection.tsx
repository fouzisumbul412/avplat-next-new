"use client";

import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Create Itinerary and Trip Estimates. Instantly!",
    desc: "30 seconds is all it takes to create a schedule, select services and generate a trip estimate. Share the itinerary instantly.",
  },
  {
    title: "Activate your trip. At the touch of a button!",
    desc: "One touch is all it takes to activate your trip – from fuel to catering, permits to flight planning.",
  },
  {
    title: "Extensive Vendor Network. No Cascading Costs!",
    desc: "Choose vendors freely with price and quality discovery while eliminating intermediaries and reducing costs.",
  },
  {
    title: "Activities. Notifications. Keeps you alert!",
    desc: "Automated tasking, alerts, and chat system keeps you on top of your trip always.",
  },
  {
    title: "Change Itinerary, Passengers. As much as you want!",
    desc: "Modify schedules, destinations, and passengers seamlessly with automatic coordination.",
  },
  {
    title: "Pay your bills. Hassle Free!",
    desc: "Invoices auto-generated and managed via wallet. Access anytime by trip or category.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}