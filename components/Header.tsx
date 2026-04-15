"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* LEFT LOGO */}
        <div className="flex items-center">
          <img
            src="/images/avplat.jpeg"
            alt="logo"
            className="h-8 object-contain"
          />
        </div>

        {/* CENTER NAV (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#" className="hover:opacity-70 transition">
            Air Charters
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Operators
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Service Provider
          </a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

  {/* LOGIN BUTTON */}
  <a
    href="https://app.avplat.com/"
    className="
      hidden md:inline-flex items-center justify-center
      px-5 py-2 text-sm font-medium
      text-white bg-[#1C4178]
      rounded-full
      transition-all duration-300 ease-in-out
      hover:bg-[#132c52]
      hover:shadow-lg
      hover:-translate-y-0.5
      active:scale-95
    "
  >
    Login
  </a>

  {/* MOBILE TOGGLE */}
  <button
    className="md:hidden"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={24} /> : <Menu size={24} />}
  </button>

</div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-6 pt-2 gap-4 bg-white text-black">
          <a href="#">Air Charters</a>
          <a href="#">Operators</a>
          <a href="#">Service Provider</a>
          <a href="#">Login</a>
        </div>
      </div>
    </header>
  );
}