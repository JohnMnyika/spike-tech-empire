// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Path to your logo in the public folder
            alt="Spike Tech Empire Logo"
            width={50}
            height={50}
            className="rounded" // Add rounded edges if needed
          />
          <h1 className="ml-3 text-xl sm:text-2xl font-bold whitespace-nowrap">
            Spike Tech Empire
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap mt-4 sm:mt-0">
          <Link
            href="/"
            className="mx-2 sm:mx-4 text-sm sm:text-base hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="mx-2 sm:mx-4 text-sm sm:text-base hover:text-blue-400"
          >
            Our Services
          </Link>
          <Link
            href="/about"
            className="mx-2 sm:mx-4 text-sm sm:text-base hover:text-blue-400"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="mx-2 sm:mx-4 text-sm sm:text-base hover:text-blue-400"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
