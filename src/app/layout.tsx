import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Libre_Caslon_Text } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/ui/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Temple Sanctuary | A Sanctuary for the Soul",
  description:
    "Experience divine tranquility, sacred rituals, daily darshan timings, seva bookings, and spiritual peace at Temple Sanctuary.",
  keywords: ["temple", "darshan", "sanctuary", "spiritual", "puja", "seva", "hindu temple", "tranquility"],
  openGraph: {
    title: "Temple Sanctuary | A Sanctuary for the Soul",
    description: "Where Tradition Meets Tranquility - Daily Darshan, Special Rituals & Community Blessings.",
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
      className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${libreCaslon.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
