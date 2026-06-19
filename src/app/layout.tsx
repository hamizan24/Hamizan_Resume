import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile, seoKeywords } from "@/data/portfolio";
import JsonLd from "@/components/JsonLd";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const title = `${profile.name} | DevOps & Infrastructure Engineer`;
const description = profile.intro;

export const metadata: Metadata = {
  title,
  description,
  keywords: [...seoKeywords],
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL("https://hamizanborhan.dev"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_MY",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
