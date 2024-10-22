// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Spike Tech Empire. All Rights Reserved.</p>
      </div>
    </footer>
    );
  }
  