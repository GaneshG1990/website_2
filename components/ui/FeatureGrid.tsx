"use client";

type Feature = {
  title: string;
  desc: string;
};

export default function FeatureGrid({
  label,
  heading,
  features,
}: {
  label: string;
  heading: string;
  features: Feature[];
}) {
  return (
    <section className="relative mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 px-8 py-16">
        
        {/* Header */}
        <p className="text-xs tracking-widest text-white/70 uppercase">
          {label}
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
          {heading}
        </h2>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 
              hover:bg-white/20 hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}