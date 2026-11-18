// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";
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
  title: "Spike Tech Empire | Product Engineering, Built to Ship",
  description:
    "Senior product engineering for founders moving fast. We design, build, and scale the software your business needs to get ahead.",
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
        <meta name="theme-color" content="#080b10" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
