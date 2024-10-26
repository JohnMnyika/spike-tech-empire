// app/layout.tsx
import '../app/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Spike Tech Empire',
  description: 'Tech Solutions in Computer and Programming',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
