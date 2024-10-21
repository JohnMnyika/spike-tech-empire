// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Spike Tech Empire</h1>
        <div>
          <Link href="/" className="mx-4">
            Home
          </Link>
          <Link href="/about" className="mx-4">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
