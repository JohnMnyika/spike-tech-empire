// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden">
              <Image
                  src="/logo.png" // Path to your logo in the public folder
                  alt="Spike Tech Empire Logo"
                  width={50} // Adjust the width and height as needed
                  height={50}
                  className="rounded-full" // Apply rounded corners
              />
            </div>
            <h1 className="ml-3 text-2xl font-bold">Spike Tech Empire</h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden text-white focus:outline-none"
          >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation Links */}
          <div
              className={`${
                  isMenuOpen ? "block" : "hidden"
              } md:flex md:items-center md:space-x-4`}
          >
            <Link
                href="/"
                className="block px-4 py-2 hover:text-gray-300"
                onClick={closeMenu}
            >
              Home
            </Link>
            <Link
                href="/services"
                className="block px-4 py-2 hover:text-gray-300"
                onClick={closeMenu}
            >
              Our Services
            </Link>
            <Link
                href="/about"
                className="block px-4 py-2 hover:text-gray-300"
                onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
                href="/contact"
                className="block px-4 py-2 hover:text-gray-300"
                onClick={closeMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </header>
  );
}