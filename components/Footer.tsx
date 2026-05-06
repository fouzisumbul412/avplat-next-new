"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-4">

        {/* TOP CTA */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Ready to elevate your aviation experience?
          </h2>

          <Link href="/charters">
            <button className="mt-6 flex items-center gap-3 border border-white/40 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Get Started
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* 1️⃣ LOGO + CONTENT */}
          {/* <div>
            <img
              src="/images/AVPLATlogo.png"
              alt="logo"
              className="h-10 mb-4"
            />

            <p className="text-gray-400 mb-4">
              Elevating private aviation with seamless charter solutions,
              trusted operators, and premium services.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="border border-white/30 px-4 py-2 rounded-full text-center hover:bg-white hover:text-black transition"
              >
                Google Play
              </a>
              <a
                href="#"
                className="border border-white/30 px-4 py-2 rounded-full text-center hover:bg-white hover:text-black transition"
              >
                App Store
              </a>
            </div>
          </div> */}

          {/* 2️⃣ QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-gray-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
            </ul>
          </div>

          {/* 3️⃣ SERVICES + LEGAL */}
          <div>
            <h4 className="mb-4 text-gray-400">Services</h4>
            <ul className="space-y-2 mb-4">
              <li><Link href="/charters">Charter Booking</Link></li>
              <li><Link href="/operators">Operator Network</Link></li>
              <li><Link href="/service-provider">Aviation Services</Link></li>
            </ul>

           
          </div>
          <div> <h4 className="mb-3 text-gray-400">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-services">Terms & Conditions</Link></li>
              <li><Link href="https://support.avplat.com/">FAQs</Link></li>

            </ul></div>

          {/* 4️⃣ CONTACT + SOCIAL */}
          <div>
            <h4 className="mb-4 text-gray-400">Contact</h4>

            <p className="text-gray-400 mb-2">info@avplat.com</p>
            <p className="text-gray-400 mb-4">+91 98765 43210</p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">

              {/* Instagram */}
              <a href="#" className="hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0zM3 8.98h3.88V21H3V8.98zM9.34 8.98h3.72v1.64h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 5.98V21h-3.88v-5.7c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9.34V8.98z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="hover:opacity-70 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 5.92c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.89-2.37 8.6 8.6 0 0 1-2.73 1.04 4.28 4.28 0 0 0-7.3 3.9A12.13 12.13 0 0 1 3.15 4.8a4.28 4.28 0 0 0 1.33 5.71 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2c-.47.13-.96.2-1.47.2-.36 0-.71-.03-1.05-.1a4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 22 5.92z"/>
                </svg>
              </a>

            </div>
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