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

            <p className="text-gray-400 mb-2">support@avplat.com</p>
            <p className="text-gray-400 mb-4">+1 647 694 6122</p>

            {/* SOCIAL ICONS */}
<div className="flex gap-4">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/avplatapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:opacity-70 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.25 22 17.08 22 12.06Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="http://instagram.com/avplatapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:opacity-70 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  </a>

  {/* X / Twitter */}
  <a
    href="https://x.com/avplatapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="hover:opacity-70 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M18.9 2.5h3.05l-6.66 7.61L23.12 21.5h-6.13l-4.8-6.27-5.49 6.27H3.65l7.12-8.14L3.25 2.5h6.28l4.34 5.73L18.9 2.5Zm-1.07 16.99h1.69L8.62 4.4H6.8l11.03 15.09Z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://in.linkedin.com/company/avplatapp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:opacity-70 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5a2.44 2.44 0 0 1 4.88 0zM3 8.98h3.88V21H3V8.98zM9.34 8.98h3.72v1.64h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 5.98V21h-3.88v-5.7c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9.34V8.98z" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/channel/UC-yVUllAcKgenVuAvDTL8iQ"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="hover:opacity-70 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.51A3.01 3.01 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.01 3.01 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.01 3.01 0 0 0 2.12-2.13c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
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
