"use client";

import Container from "../ui/container";

export default function DesignSection() {
  const items = [
    {
      title: "Easy-to-Use Design",
      desc: "Usability-first flows keep stakeholders moving with confidence.",
    },
    {
      title: "Visual Brand Experience",
      desc: "Every screen feels professional and trustworthy with cohesive typography, color, and motion.",
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
            DESIGN & USER EXPERIENCE
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Design That Works for You
          </h2>

          <p className="mt-4 max-w-2xl text-white/80">
            Every interaction is mapped to user intent—capturing the same clarity
            and spacing as the original template while elevating your brand presence.
          </p>

          {/* Stacked Cards */}
          <div className="mt-10 space-y-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 
                hover:bg-white/20 transition-all duration-300"
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