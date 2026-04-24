"use client";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        src="/videos/footerlanding.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/95" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* TOP CTA */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ready to elevate your aviation experience?
          </h2>

          <button className="mt-6 flex items-center gap-3 border border-white/40 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Get Started
            <ArrowRight size={18} />
          </button>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          <div>
            <h4 className="mb-3 text-gray-400">Company</h4>
            <ul className="space-y-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-gray-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="#">Air Charters</a></li>
              <li><a href="#">Operators</a></li>
              <li><a href="#">Service Providers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-gray-400">Support</h4>
            <ul className="space-y-2">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-gray-400">Follow</h4>
            <ul className="space-y-2">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/20 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© 2026 AvPlat. All rights reserved.</p>
          <p>Powered by Outright Creators</p>
        </div>

      </div>
    </footer>
  );
}