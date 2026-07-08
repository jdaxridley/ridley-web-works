import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ridleywebworks.com"),
  title: {
    default: "Ridley Web Works — Founder-led websites for business owners",
    template: "%s — Ridley Web Works",
  },
  description:
    "I build custom websites for business owners who want to look sharper, explain their offer clearly, and stop settling for a site that feels generic or outdated.",
  openGraph: {
    title: "Ridley Web Works — Founder-led websites for business owners",
    description:
      "Custom websites for business owners who want a sharper first impression, a clearer offer, and a partner who saves them time.",
    url: "https://ridleywebworks.com",
    siteName: "Ridley Web Works",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0e0d0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-body">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
