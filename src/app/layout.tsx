import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pathixo",
    default: "Pathixo - Services, Portfolio & Courses",
  },
  description: "Explore the services, portfolio, and educational courses offered by Pathixo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${montserrat.className} antialiased bg-black min-h-screen text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}