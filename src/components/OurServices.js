"use client";
import Image from "next/image";
import {
  BookOpenCheck,
  GraduationCap,
  HeartHandshake,
  Users,
  BarChart2,
  Brain,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "In-house Training",
    description:
      "Customized onsite workshops tailored to your team's unique needs and goals.",
    icon: <BookOpenCheck size={28} className="text-pink-500" />,
  },
  {
    id: 2,
    title: "E-learning",
    description:
      "Self-paced courses with interactive content and flexible access from anywhere.",
    icon: <GraduationCap size={28} className="text-pink-500" />,
  },
  {
    id: 3,
    title: "CSR Programs",
    description:
      "Create meaningful impact with well-designed Corporate Social Responsibility activities.",
    icon: <HeartHandshake size={28} className="text-pink-500" />,
  },
  {
    id: 4,
    title: "Team Building",
    description:
      "Engaging activities that build trust, communication, and team morale.",
    icon: <Users size={28} className="text-pink-500" />,
  },
  {
    id: 5,
    title: "Survey & Insights",
    description:
      "Gather key feedback and measure impact with our customizable survey tools.",
    icon: <BarChart2 size={28} className="text-pink-500" />,
  },
  {
    id: 6,
    title: "Consulting",
    description:
      "Strategic guidance to help you solve business challenges and grow efficiently.",
    icon: <Brain size={28} className="text-pink-500" />,
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-10 px-4 lg:px-10">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our diverse service offerings designed to strengthen your
          organization.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-md transition hover:scale-102"
            >
              {/* Shared Image */}
              <div className="relative h-48 w-full">
                <Image
                  src="/connect_1.jpg"
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text & Icon */}
              <div className="p-6 text-left">
                <div className="mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
