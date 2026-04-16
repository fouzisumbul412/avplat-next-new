"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Air Charters", href: "/" },
    { name: "Operators", href: "/operators" },
    { name: "Service Provider", href: "/service-provider" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/images/avplat-logo.png"
            alt="logo"
            className="h-8 object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative group transition-all duration-300 ${
                  isActive
                    ? "text-[#213e76] font-semibold"
                    : "hover:text-[#213e76]"
                }`}
              >
                {/* TEXT WRAPPER FOR 3D EFFECT */}
                <span className="inline-block transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotateX-180">
                  {item.name}
                </span>

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#213e76]"
                      : "bg-transparent group-hover:bg-[#213e76]"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          
          {/* LOGIN */}
          <a
            href="https://app.avplat.com/"
            className="
              hidden md:inline-flex items-center justify-center
              px-5 py-2 text-sm font-medium
              text-white bg-[#213e76]
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
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
  key={item.name}
  href={item.href}
  className={`nav-link ${
    isActive ? "active" : ""
  }`}
>
  <span className="nav-inner">
    <span className="nav-front">{item.name}</span>
    <span className="nav-back">{item.name}</span>
  </span>
</a>
            );
          })}
          <a href="https://app.avplat.com/">Login</a>
        </div>
      </div>
    </header>
  );
}