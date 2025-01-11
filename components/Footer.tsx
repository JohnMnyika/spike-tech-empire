// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center text-sm sm:text-base">
        <p>
          &copy; {new Date().getFullYear()} Spike Tech Empire. All Rights
          Reserved.
        </p>
        <p className="mt-2">
          <a href="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:text-blue-400">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
