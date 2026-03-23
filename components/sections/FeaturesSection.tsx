"use client";

import { Cpu, Bot, Workflow } from "lucide-react";
import Container from "../ui/container";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";

export default function FeaturesSection() {
  const features = [
    {
      icon: Workflow,
      title: "Business Task Automation",
      desc: "Automate repetitive workflows and boost productivity.",
    },
    {
      icon: Cpu,
      title: "Custom AI Tools",
      desc: "Predict trends and optimize business decisions.",
    },
    {
      icon: Bot,
      title: "Smart Assistants",
      desc: "24/7 AI assistants for seamless operations.",
    },
  ];

  return (
    <Container>
      <AnimatedSection>
        <section className="relative mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500" />
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 px-8 py-16">
            <h2 className="text-3xl font-bold text-white">
              We Solve Your Toughest Business Problems
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <Card key={i}>
                  <item.icon className="text-white mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/80 text-sm">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Container>
  );
}