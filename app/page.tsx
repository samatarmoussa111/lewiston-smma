"use client";

import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { Challenges } from "@/components/sections/Challenges";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/process/Process";
import { SpecialOffer } from "@/components/sections/SpecialOffer";
import { Footer } from "@/components/sections/Footer";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/sections/Portfolio";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Challenges />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio id="portfolio" />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default Home;
