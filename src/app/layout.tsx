import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aman Rajak | Backend Developer',
  description: 'Portfolio of Aman Rajak - Backend Developer specializing in Spring Boot, Java, and enterprise applications',
  keywords: 'Backend Developer, Spring Boot, Java, Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorTrail />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

