"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/connect_1.jpg",
    alt: "Impression Consulting",
  },
  {
    id: 2,
    src: "/connect_2.jpg",
    alt: "Online Learning Platform",
  },
  {
    id: 3,
    src: "/connect_3.jpg",
    alt: "Wellbeing Camp & Webinar",
  },
  {
    id: 4,
    src: "/connect_4.jpg",
    alt: "Free Webinar",
  },
];

export default function ImageSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayInterval = 5000;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const intervalId = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [autoPlay]);

  return (
    <div className="relative w-full mx-auto px-4 lg:px-10 mt-4 lg:mt-10">
      {/* Full Spread Image Section with Gradient Overlay */}
      <div className="relative w-full h-[480px] lg:h-[550px] overflow-hidden rounded-lg ">
        {/* Images */}
        {images.map((image, idx) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === idx
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={currentIndex === idx}
            />
          </div>
        ))}

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentIndex === idx
                  ? "bg-pink-500"
                  : "bg-white/60 cursor-pointer"
              }`}
              onClick={() => goToSlide(idx)}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white hover:text-pink-500 p-3 rounded-full shadow-md transition-all duration-200 z-20 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white hover:text-pink-500 p-3 rounded-full shadow-md transition-all duration-200 z-20 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
