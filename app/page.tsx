import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CoreFocus from "@/components/sections/CoreFocus";
import Products from "@/components/sections/Products";
import Design from "@/components/sections/Design";
import Guidance from "@/components/sections/Guidance";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoreFocus />
      <Products />
      <Design />
      <Guidance />
      <Contact />
    </>
  );
}