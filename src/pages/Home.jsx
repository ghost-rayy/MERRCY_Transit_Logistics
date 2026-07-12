import React from "react";
import Navbar from "@/components/merrcy/Navbar";
import Hero from "@/components/merrcy/Hero";
import Services from "@/components/merrcy/Services";
import About from "@/components/merrcy/About";
import Contact from "@/components/merrcy/Contact";
import Footer from "@/components/merrcy/Footer";
import WhatsAppButton from "@/components/merrcy/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}