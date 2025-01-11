// app/layout.tsx
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Spike Tech Empire",
  description: "Tech Solutions in Computer and Programming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Analytics */}
        <Analytics />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
