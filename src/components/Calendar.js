"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const calendarImages = [
  { id: 1, src: "/calendar1.png", alt: "Calendar Day 1" },
  { id: 2, src: "/calendar2.png", alt: "Calendar Day 2" },
  { id: 3, src: "/calendar3.png", alt: "Calendar Day 3" },
  { id: 4, src: "/calendar4.png", alt: "Calendar Day 4" },
  { id: 5, src: "/calendar5.png", alt: "Calendar Day 5" },
];

export default function CalendarSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible count based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = calendarImages.length - visibleCount;

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex((prev) => prev + 1);
  };

  const visibleImages = calendarImages.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <div className="w-full mx-auto px-4 py-10">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Calendar
      </h3>

      <div className="relative">
        {/* Slider Track */}
        <div className="flex gap-6 justify-center transition-all duration-500">
          {visibleImages.map(({ id, src, alt }) => (
            <div
              key={id}
              className="relative w-full max-w-sm aspect-[4/3] overflow-hidden shadow-md border rounded-2xl"
            >
              <Image
                src={src}
                alt={alt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md transition ${
            currentIndex === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
          }`}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md transition ${
            currentIndex >= maxIndex
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:text-pink-500"
          }`}
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots (2 pages max: 0 and 1) */}
      <div className="flex justify-center space-x-2 mt-6">
        {[0, 1].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentIndex(page)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === page ? "bg-gray-800 scale-125" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${page + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
