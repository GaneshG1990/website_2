"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="max-w-6xl w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-3xl shadow-2xl p-8 text-center text-white relative">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
          Build Smarter <br /> Grow Faster
        </h1>

        <p className="mt-4 text-lg uppercase tracking-widest">
          The Best Way to Success
        </p>

        <p className="mt-6 max-w-xl mx-auto text-sm opacity-90">
          From Idea to Intelligence: We build AI-powered software,
          apps, and automation systems.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </button>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full"
          >
            Contact Us
          </a>
        </div>

        {open && <Modal onClose={() => setOpen(false)} />}
      </div>
    </section>
  );
}