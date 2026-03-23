"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";

export default function HeroSection() {
  return (
    <Container>
      <section className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mt-10">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Animated blobs */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest">
            BUILD SMARTER <br /> GROW FASTER
          </h1>

          <p className="mt-6 text-sm tracking-[0.3em] text-white/80 uppercase">
            THE BEST WAY TO SUCCESS
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-white/80">
            From Idea to Intelligence: We build the full digital stack,
            empowered by AI. Custom Software, Powerful AI, and Professional
            Apps that drive your business forward.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
              GET STARTED
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}