"use client";

import { X } from "lucide-react";

export default function RequirementForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-6 md:p-8 text-white">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold">
          Share Your Requirement
        </h2>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          <X size={18} />
        </button>
      </div>

      {/* FORM */}
      <div className="mt-6 space-y-4">

        <input
          placeholder="Enter your full name"
          className="w-full p-3 rounded-lg text-black"
        />

        <input
          placeholder="Your company name"
          className="w-full p-3 rounded-lg text-black"
        />

        <input
          placeholder="+91 98765 43210"
          className="w-full p-3 rounded-lg text-black"
        />

        <input
          placeholder="you@example.com"
          className="w-full p-3 rounded-lg text-black"
        />

        <textarea
          placeholder="Tell us about your project..."
          rows={4}
          className="w-full p-3 rounded-lg text-black"
        />

        <button
          className="w-full bg-white text-black font-medium py-3 rounded-full hover:opacity-90 transition"
        >
          Submit Requirement
        </button>

        <p className="text-xs text-white/80 text-center">
          We'll review your requirement and get back within 24 hours.
        </p>

      </div>
    </div>
  );
}