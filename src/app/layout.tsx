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
    default: "Ridley Web Works — Custom Websites in Plano, TX",
    template: "%s — Ridley Web Works",
  },
  description:
    "Ridley Web Works builds custom websites for local service businesses in Plano, Texas and beyond. No templates — just sharp, fast sites built to convert.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ridley Web Works — Custom Websites in Plano, TX",
    description:
      "Custom websites for local service businesses in Plano, Texas and beyond. No templates, fast builds, and design that helps customers trust you faster.",
    url: "https://ridleywebworks.com",
    siteName: "Ridley Web Works",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridley Web Works — Custom Websites in Plano, TX",
    description:
      "Custom websites for local service businesses in Plano, Texas and beyond.",
  },
};

const entitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ridleywebworks.com/#website",
      name: "Ridley Web Works",
      url: "https://ridleywebworks.com/",
      publisher: { "@id": "https://ridleywebworks.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://ridleywebworks.com/#organization",
      name: "Ridley Web Works",
      url: "https://ridleywebworks.com/",
      email: "dax@ridleywebworks.com",
      founder: { "@id": "https://ridleywebworks.com/#dax-ridley" },
      areaServed: [
        { "@type": "City", name: "Plano" },
        { "@type": "AdministrativeArea", name: "Texas" },
        { "@type": "Country", name: "United States" },
      ],
      description:
        "Ridley Web Works is a Plano, Texas web design studio building custom websites for local service businesses.",
      sameAs: [
        "https://github.com/jdaxridley",
        "https://github.com/jdaxridley/ridley-web-works",
      ],
      knowsAbout: [
        "custom website design",
        "local business websites",
        "service business websites",
        "conversion-focused web design",
        "Next.js website development",
        "website redesigns",
        "local SEO foundations",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom website design and development",
            description:
              "Custom websites for local service businesses, built from scratch around the business, offer, and customer journey.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website redesign for local businesses",
            description:
              "Modern redesigns for outdated local business websites that need stronger trust, clearer offers, and better conversion paths.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://ridleywebworks.com/#dax-ridley",
      name: "Dax Ridley",
      jobTitle: "Founder",
      worksFor: { "@id": "https://ridleywebworks.com/#organization" },
      url: "https://ridleywebworks.com/about",
      sameAs: ["https://github.com/jdaxridley"],
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
        />
      </head>
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
