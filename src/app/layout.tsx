import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import VisitTracker from "@/components/VisitTracker";
import "../styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "James Ryan Gaid - QA Engineer & Test Automation Specialist",
  description:
    "Professional QA Engineer specializing in automated testing, security testing, and quality assurance. Expert in Cypress, Selenium, API testing, and CI/CD integration.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "QA Engineer",
    "Quality Assurance",
    "Test Automation",
    "Selenium",
    "Cypress",
    "API Testing",
    "Security Testing",
    "CI/CD",
    "DevOps",
    "Software Testing",
  ],
  authors: [{ name: "James Ryan Gaid" }],
  creator: "James Ryan Gaid",
  publisher: "James Ryan Gaid",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://jrgaid.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "James Ryan Gaid - QA Engineer & Test Automation Specialist",
    description:
      "Professional QA Engineer specializing in automated testing, security testing, and quality assurance.",
    url: "https://jrgaid.site",
    siteName: "James Ryan Gaid Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "James Ryan Gaid - QA Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Ryan Gaid - QA Engineer & Test Automation Specialist",
    description:
      "Professional QA Engineer specializing in automated testing, security testing, and quality assurance.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ThemeProviderWrapper>
          <VisitTracker>
            <div className="min-h-screen">{children}</div>
          </VisitTracker>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
