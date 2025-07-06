"use client";
import React from "react";
import Image from "next/image";
import { Award, Users, GraduationCap, ArrowRight } from "lucide-react";

const heroItems = [
  {
    id: 1,
    title: "Proven Expertise",
    description:
      "Over 10 years of experience transforming organizations through consulting and training.",
    icon: <Award size={36} className="text-pink-400" />,
    image: "/connect_1.jpg",
    href: "/",
    button: "Learn More",
  },
  {
    id: 2,
    title: "Trusted by Leading Brands",
    description:
      "Our clients include top global companies across industries who rely on us for results.",
    icon: <Users size={36} className="text-pink-400" />,
    image: "/connect_1.jpg",
    href: "/",
    button: "See Clients",
  },
  {
    id: 3,
    title: "Tailored Learning Solutions",
    description:
      "We design learning paths that suit your team's goals—from e-learning to team building.",
    icon: <GraduationCap size={36} className="text-pink-400" />,
    image: "/connect_1.jpg",
    href: "/",
    button: "Our Programs",
  },
];

export default function HeroGrid() {
  return (
    <section className="w-full mx-auto px-4 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      {heroItems.map((item) => (
        <div
          key={item.id}
          className="group overflow-hidden rounded-xl h-[380px] cursor-pointer shadow-lg bg-gray-50 hover:shadow-xl transition-all duration-300 hover:scale-102"
        >
          {/* Image section */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover "
              priority
            />
          </div>

          {/* Content section */}
          <div className="p-6 h-32 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
            </div>

            <a
              href={item.href}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-500 hover:bg-blue-900 text-white text-sm font-medium rounded transition w-full"
            >
              {item.button} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
