"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
     <div
  className={`w-full transition-all duration-300
  ${
    scrolled
      ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
      : "bg-white/60 backdrop-blur-md"
  }`}
>
        <Container>
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={34}
                height={34}
              />

              <span className="text-gray-900 font-semibold tracking-wide text-lg">
                UNISHRINE
              </span>
            </div>

            {/* NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a className="text-gray-600 hover:text-gray-900 transition" href="#">
                SERVICES
              </a>

              <a className="text-gray-600 hover:text-gray-900 transition" href="#">
                PRODUCTS
              </a>

              <a className="text-gray-600 hover:text-gray-900 transition" href="#">
                CONTACT
              </a>
            </nav>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              <button className="text-sm text-gray-600 hover:text-gray-900 transition">
                LOGIN
              </button>

             
            </div>

          </div>
        </Container>
      </div>
    </header>
  );
}