import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ IMPORT COMPONENTS
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// ✅ META DATA
export const metadata: Metadata = {
  title: {
    default: "AvPlat",
    template: "%s | AvPlat",
  },
  description:
    "AvPlat is the world's first integrated flight planning and trip support software.",
  keywords: ["aviation", "flight planning", "charter", "trip support"],
  icons: {
    icon: "/images/av-favicon.png",
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
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* ✅ GLOBAL HEADER */}
        <Header />

        {/* ✅ PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ✅ GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}