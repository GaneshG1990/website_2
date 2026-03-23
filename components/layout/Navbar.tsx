"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <Container>
        <div
          className={`flex items-center justify-between mt-4 px-6 py-3 rounded-2xl transition-all duration-300
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="logo" width={36} height={36} />
            <span className="font-semibold tracking-wide">
              UNISHRINE
            </span>
          </div>

          {/* Menu */}
          <nav className="flex items-center gap-8 text-sm text-white/80">
            <a className="hover:text-white transition" href="#">
              OUR SERVICES
            </a>
            <a className="hover:text-white transition" href="#">
              CONTACT
            </a>

            
          </nav>
        </div>
      </Container>
    </header>
  );
}