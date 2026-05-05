"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
const sections = [
  { id: "intro", label: "Introduction" },
  { id: "info", label: "Information We Collect" },
  { id: "usage", label: "How We Use Data" },
  { id: "sharing", label: "Sharing of Information" },
  { id: "security", label: "Data Security" },
  { id: "cookies", label: "Cookies" },
  { id: "rights", label: "Your Rights" },
  { id: "retention", label: "Data Retention" },
  { id: "links", label: "Third-Party Links" },
  { id: "updates", label: "Policy Updates" },
  { id: "contact", label: "Contact" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const PrivacyPolicyPage = () => {
  return (
    <>
     

      {/* HERO */}
        <PageHero
              title="Privacy Policy"
              image="/images/privacy.png"
              overlayOpacity={0.65}
            />

      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-12 text-sm leading-relaxed text-charcoal">

            {/* 1 */}
            <motion.div id="intro" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h2 className="text-2xl font-semibold text-navy mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to our platform. Your privacy is important to us, and we are committed
                to protecting your personal information. This Privacy Policy explains how we
                collect, use, and safeguard your data when you use our charter booking services.
              </p>
            </motion.div>

            {/* 2 */}
            <motion.div id="info" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                2. Information We Collect
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing details</li>
                <li><strong>Booking Details:</strong> Travel itinerary, passenger details, preferences</li>
                <li><strong>Payment Information:</strong> Processed securely via trusted gateways</li>
                <li><strong>Technical Data:</strong> IP address, browser, device and usage data</li>
              </ul>
            </motion.div>

            {/* 3 */}
            <motion.div id="usage" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                3. How We Use Your Information
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Process and manage bookings</li>
                <li>Provide instant quotes and updates</li>
                <li>Improve platform functionality</li>
                <li>Send important notifications</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </motion.div>

            {/* 4 */}
            <motion.div id="sharing" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                4. Sharing of Information
              </h3>
              <p className="mb-3">We may share your data with:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Aircraft operators and service providers</li>
                <li>Payment gateways for secure transactions</li>
                <li>Legal authorities when required</li>
              </ul>
              <p className="mt-3 font-medium">
                We do not sell or rent your personal data.
              </p>
            </motion.div>

            {/* 5 */}
            <motion.div id="security" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                5. Data Security
              </h3>
              <p>
                We implement industry-standard security measures to protect your data from
                unauthorized access, misuse, or disclosure.
              </p>
            </motion.div>

            {/* 6 */}
            <motion.div id="cookies" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                6. Cookies and Tracking
              </h3>
              <p>
                We use cookies to enhance experience, analyze usage and improve services.
                You can control cookie settings in your browser.
              </p>
            </motion.div>

            {/* 7 */}
            <motion.div id="rights" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                7. Your Rights
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal data</li>
                <li>Request corrections</li>
                <li>Request deletion (subject to law)</li>
              </ul>
            </motion.div>

            {/* 8 */}
            <motion.div id="retention" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                8. Data Retention
              </h3>
              <p>
                We retain your data only as long as necessary for services and legal compliance.
              </p>
            </motion.div>

            {/* 9 */}
            <motion.div id="links" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                9. Third-Party Links
              </h3>
              <p>
                Our platform may contain external links. We are not responsible for their
                privacy practices.
              </p>
            </motion.div>

            {/* 10 */}
            <motion.div id="updates" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                10. Updates to This Policy
              </h3>
              <p>
                We may update this policy from time to time. Changes will be reflected on this page.
              </p>
            </motion.div>

            {/* 11 */}
            <motion.div id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-navy mb-3">
                11. Contact Us
              </h3>
              <p>Email: support@avplat.com</p>
              <p>Phone: +1 647 694 6122</p>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-border rounded-2xl p-6 shadow-sm">

              <h4 className="text-navy font-semibold mb-4">
                Contents
              </h4>

              <ul className="space-y-2 text-sm">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollToSection(s.id)}
                      className="text-left w-full text-muted-foreground hover:text-navy transition"
                    >
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </section>

      
    </>
  );
};

export default PrivacyPolicyPage;