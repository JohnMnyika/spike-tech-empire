// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"  // Path to your logo in the public folder
            alt="Spike Tech Empire Logo"
            width={50}        // Adjust the width and height as needed
            height={50}
          />
          <h1 className="ml-3 text-2xl font-bold">Spike Tech Empire</h1>
        </div>
        <div>
          <Link href="/" className="mx-4">
            Home
          </Link>
          <Link href="/services" className="mx-4">
            Our Services
          </Link>
          <Link href="/about" className="mx-4">
            About Us
          </Link>
          <Link href="/contact" className="mx-4">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
