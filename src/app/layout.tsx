import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "next-themes";
import OpenToWork from "@/components/OpenToWork";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'James Ryan Gaid | QA Engineer',
  description:
    'QA Engineer passionate about automation, security, and quality. Explore my portfolio and certifications.',
  metadataBase: new URL('https://your-portfolio.vercel.app'), // Replace with your actual domain
  openGraph: {
    title: 'James Ryan Gaid | QA Engineer',
    description:
      'QA Engineer passionate about automation, testing, and cybersecurity.',
    url: '/',
    siteName: 'James Ryan Gaid Portfolio',
    images: [
      {
        url: '/og-image.png', // Place this image inside /public
        width: 1200,
        height: 630,
        alt: 'James Ryan Gaid Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Ryan Gaid | QA Engineer',
    description: 'QA • Automation • Cybersecurity',
    images: ['/og-image.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ScrollProgress />
          <SideNav />
          <MobileNav />
          <BackToTop />
          <OpenToWork />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
