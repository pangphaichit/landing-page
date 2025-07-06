"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Menu,
  X,
  Users,
  BookOpen,
  Laptop,
  Brain,
  Bot,
  BarChart2,
  Info,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Training", href: "/", icon: BookOpen },
  { label: "Team Building / CSR", href: "/", icon: Users },
  { label: "E-learning", href: "/", icon: Laptop },
  { label: "Consulting", href: "/", icon: Brain },
  { label: "AI for Customer Service", href: "/", icon: Bot },
  { label: "Survey", href: "/", icon: BarChart2 },
  { label: "About Us", href: "/", icon: Info },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          <Link href="/" className="text-xl font-bold text-pink-500">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center text-gray-700 hover:text-pink-500 transition"
              >
                <Icon size={18} className="mr-1" />
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col px-6 py-10 space-y-4">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-pink-500 z-50"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Navigation Links */}
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center text-gray-800 text-lg hover:text-pink-500 transition"
            >
              <Icon size={20} className="mr-3" />
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
