"use client";
import Image from "next/image";
import React from "react";

export default function IntroductionSection() {
  return (
    <section className="w-full px-4 lg:px-10 pt-10  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/connect_1.jpg"
            alt="Introduction Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 text-gray-800">
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-500">
            Welcome to Our Consulting Services
          </h2>
          <p>
            We specialize in providing practical, impactful consulting and
            training services that drive real results for individuals and
            organizations.
          </p>
          <p>
            With over a decade of experience, we’ve helped clients across
            industries unlock their potential through tailored learning paths.
          </p>
          <p>
            Whether you're looking to boost team performance, launch e-learning,
            or run a CSR program, we bring the insight and tools you need.
          </p>
          <p>
            Our expert team is dedicated to delivering knowledge, motivation,
            and transformation—one session at a time.
          </p>

          {/* CTA Button */}
          <button className="mt-4 bg-pink-500 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
