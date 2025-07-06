"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "Training", href: "/" },
  { label: "Team Building / CSR", href: "/" },
  { label: "E-learning", href: "/" },
  { label: "Consulting", href: "/" },
  { label: "AI for Customer Service", href: "/" },
  { label: "Survey", href: "/" },
  { label: "About us", href: "/" },
];

export default function AppFooter() {
  return (
    <footer className="bg-gray-500 text-white pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          {/* Replace with your logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="mb-4"
          />
          <p className="text-sm text-gray-400">
            Empowering growth through training, consulting, and innovative
            learning solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {services.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-pink-500">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={16} />{" "}
              <a href="mailto:info@example.com">info@example.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Bangkok, Thailand
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-pink-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
