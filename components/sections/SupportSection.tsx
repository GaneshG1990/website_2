"use client";

import Container from "../ui/container";

export default function SupportSection() {
  const items = [
    {
      title: "Technology Roadmap Consultation",
      desc: "Navigate platform decisions, AI readiness, and long-term product strategy with a trusted lead architect.",
    },
    {
      title: "Guaranteed Support & Maintenance",
      desc: "Ongoing monitoring, uptime commitments, and iteration sprints keep your solutions ahead of the market.",
    },
  ];

  return (
    <Container>
      <section className="relative mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 px-8 py-16">
          
          {/* Header */}
          <p className="text-xs tracking-widest text-white/70 uppercase">
            EXPERT GUIDANCE & SUPPORT
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            More Than A Vendor. We're Your Partner.
          </h2>

          {/* Cards */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 
                hover:bg-white/20 hover:translate-y-[-3px] transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}