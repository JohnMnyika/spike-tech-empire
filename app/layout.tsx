// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Spike Tech Empire | Premium Tech Solutions",
  description:
    "Build faster, scale smarter. Premium software development, cloud solutions, and tech consulting for modern businesses. Based in Kenya, trusted globally.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "tech consulting",
    "cloud solutions",
    "tech services",
    "Kenya",
    "Nairobi",
  ],
  authors: [
    {
      name: "Spike Tech Empire",
      url: "https://spike-tech-empire.vercel.app",
    },
  ],
  creator: "Spike Tech Empire",
  publisher: "Spike Tech Empire",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Spike Tech Empire | Premium Tech Solutions",
    description: "Transform your business with cutting-edge tech solutions",
    url: "https://spike-tech-empire.vercel.app",
    siteName: "Spike Tech Empire",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b1220" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-white dark:bg-navy-950 text-gray-900 dark:text-gray-50">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow pt-16 md:pt-20">{children}</main>

        {/* Analytics */}
        <Analytics />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
