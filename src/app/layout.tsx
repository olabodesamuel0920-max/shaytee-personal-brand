import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shaytee | Entrepreneur & Founder Brand (Akure)",
  description: "Meet Shaytee, the entrepreneur behind Shaytee’s Treat and Shaytee Beauty Studio, building a premium lifestyle, event catering, and beauty brand ecosystem in Akure.",
  keywords: ["Shaytee", "Shaytees Treat", "Shaytee Beauty Studio", "Akure lifestyle", "Akure hairstylist", "Lash tech FUTA", "Akure event treats"],
  openGraph: {
    title: "Shaytee | Premium Founder Brand",
    description: "Building a luxury lifestyle brand in Akure through sweet moments, beauty, confidence, and client experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#080707] text-[#F5F2EB] selection:bg-brand-blush selection:text-brand-charcoal">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

