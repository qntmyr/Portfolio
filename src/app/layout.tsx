import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const sans = Instrument_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s · Quentin Mayer" },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Quentin Mayer by the sea at sunset" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
