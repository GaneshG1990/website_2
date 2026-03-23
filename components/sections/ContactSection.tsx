"use client";

import Container from "../ui/container";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

type ContactItem = {
  label: string;
  value: string;
  type: "link" | "email" | "phone" | "text";
  icon: any;
};

export default function ContactSection() {
  const contacts: ContactItem[] = [
    {
      label: "Website",
      value: "https://www.unishrine.com",
      type: "link",
      icon: Globe,
    },
    {
      label: "Mobile no.",
      value: "+91 95351 05602",
      type: "phone",
      icon: Phone,
    },
    {
      label: "Connect with the Founder",
      value: "ganesh@unishrine.com",
      type: "email",
      icon: Mail,
    },
    {
      label: "Email ID",
      value: "hello@unishrine.com",
      type: "email",
      icon: Mail,
    },
    {
      label: "Office address",
      value:
        "Palm Arcade, no. 513/C, First floor, HBR Layout 4th block, 1st stage, Bengaluru–560 043",
      type: "text",
      icon: MapPin,
    },
  ];

  const handleClick = (item: ContactItem) => {
    switch (item.type) {
      case "link":
        window.open(item.value, "_blank");
        break;
      case "email":
        window.location.href = `mailto:${item.value}`;
        break;
      case "phone":
        window.location.href = `tel:${item.value}`;
        break;
      default:
        navigator.clipboard.writeText(item.value);
    }
  };

  const renderValue = (item: ContactItem) => {
    const display =
      item.type === "link"
        ? item.value.replace("https://", "")
        : item.value;

    return (
      <span
        onClick={() => handleClick(item)}
        className="text-white font-medium cursor-pointer hover:underline underline-offset-4"
      >
        {display}
      </span>
    );
  };

  return (
    <Container>
      <section className="relative mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 px-10 py-16">
          
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest text-white/70 uppercase">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Let’s Build Something Intelligent Together
            </h2>

            <p className="mt-4 text-white/80">
              Reach out for project scoping, AI advisory, or rapid prototyping.
              We respond within one business day.
            </p>
          </div>

          {/* Contact Box */}
          <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8">
            
            <div className="divide-y divide-white/10">
              {contacts.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 gap-4"
                  >
                    {/* Left: Icon + Label */}
                    <div className="flex items-center gap-3 text-white/60 text-sm">
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </div>

                    {/* Right: Value */}
                    <div className="text-sm">
                      {renderValue(item)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </Container>
  );
}