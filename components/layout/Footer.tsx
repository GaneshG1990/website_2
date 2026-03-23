"use client";

import Container from "../ui/container";
import Image from "next/image";
import { Mail, Phone, Globe, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 relative">
      {/* Divider */}
      <div className="h-px bg-white/10 mb-10" />

      <Container>
        <div className="grid md:grid-cols-4 gap-10 text-sm text-white/70">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={36}
                height={36}
              />
              <span className="text-white font-semibold text-lg">
                UNISHRINE
              </span>
            </div>

            <p className="mt-4 text-white/60">
              Building intelligent digital products powered by AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Globe size={16} />
                <a
                  href="https://www.unishrine.com"
                  target="_blank"
                  className="hover:text-white"
                >
                  unishrine.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:hello@unishrine.com"
                  className="hover:text-white"
                >
                  hello@unishrine.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href="tel:+919535105602"
                  className="hover:text-white"
                >
                  +91 95351 05602
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/50 text-xs">
          © {new Date().getFullYear()} UNISHRINE. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}