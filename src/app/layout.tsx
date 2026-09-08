import type { Metadata } from "next";
import { Sora, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Yoga Pratama, Fullstack & Web3 Developer",
    template: "%s | Yoga Pratama",
  },
  description:
    "Fullstack & Web3 Developer, Yoga Pratama. Next.js, Flutter, UI/UX, and Solana smart contracts. Responsive, user-centered applications with clean code. Based in Jakarta.",
  metadataBase: new URL("https://yogapratama.design"),
  openGraph: {
    title: "Yoga Pratama | Portofolio",
    description: "Fullstack & Web3 Developer — Seedrym, Gelora, BISINDO, School Management, and 20+ projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:w-auto focus:max-w-[90vw] focus:rounded-full focus:bg-[#1D1D1F] focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:whitespace-nowrap"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <FloatingMenu />
      </body>
    </html>
  );
}
