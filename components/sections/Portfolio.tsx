"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Portfolio({ id }: { id?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      image: "/portfolio-1.png",
      title: "Local Restaurant Website",
      description: "Increased online reservations by 50%",
    },
    {
      image: "/portfolio-2.png",
      title: "Boutique Shop E-commerce",
      description: "Boosted online sales by 75%",
    },
    {
      image: "/portfolio-3.png",
      title: "Law Firm Web Presence",
      description: "Improved lead generation by 60%",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Restaurant Owner",
      quote:
        "Their work transformed our online presence and boosted our business significantly!",
    },
    {
      name: "Jane Smith",
      role: "Boutique Owner",
      quote:
        "The e-commerce solution they provided has been a game-changer for our shop.",
    },
    {
      name: "Mike Johnson",
      role: "Attorney",
      quote: "Professional, responsive, and delivered beyond our expectations.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section id={id} className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Clients Trust Us
        </h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center gap-8"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                className="w-full lg:w-1/2 rounded-lg shadow-lg"
                width={500}
                height={500}
              />
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {projects[currentIndex].description}
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  <p className="max-w-md">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                  <footer className="mt-2 text-sm">
                    - {testimonials[currentIndex].name},{" "}
                    {testimonials[currentIndex].role}
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
