"use client";

import Container from "../ui/container";
import FeatureGrid from "../ui/FeatureGrid";

export default function ProductSection() {
  const features = [
    {
      title: "Custom Business Software",
      desc: "Operational platforms designed end-to-end for your workflows.",
    },
    {
      title: "Mobile App Creation (Apple/Android)",
      desc: "Native-like experiences with offline resilience and secure data flows.",
    },
    {
      title: "Website & E-commerce Stores",
      desc: "High-converting marketing sites and storefronts with enterprise-grade stability.",
    },
  ];

  return (
    <Container>
      <FeatureGrid
        label="DIGITAL PRODUCTS & APPS"
        heading="The Right Tool, Built the Right Way"
        features={features}
      />
    </Container>
  );
}