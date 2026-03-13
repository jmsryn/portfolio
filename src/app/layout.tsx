import type { Metadata, Viewport } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import SideNav from "@/components/SideNav";
import OpenToWork from "@/components/OpenToWork";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import VisitTracker from "@/components/VisitTracker";
import PageLoader from "@/components/PageLoader";
import "../styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "James Ryan Gaid - QA Engineer & Test Automation Specialist",
  description: "Professional QA Engineer specializing in automated testing, security testing, and quality assurance. Expert in Cypress, Selenium, API testing, and CI/CD integration.",
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
    "Test Framework",
    "Automation Specialist",
    "Web Testing",
    "Performance Testing",
    "Bug Testing",
    "Quality Control",
    "Software Quality",
    "Test Planning",
    "Test Strategy",
    "Agile Testing"
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
    description: "Professional QA Engineer specializing in automated testing, security testing, and quality assurance. Expert in Cypress, Selenium, API testing, and CI/CD integration.",
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
    description: "Professional QA Engineer specializing in automated testing, security testing, and quality assurance.",
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
  verification: {
    google: "your-google-verification-code",
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
        className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased w-full overflow-x-hidden font-sans bg-background text-foreground`}
      >
        <ThemeProviderWrapper>
          <VisitTracker>
            <PageLoader>
              <SideNav />
              <ScrollProgress />
              <OpenToWork />
              <div className="relative min-h-screen w-full overflow-x-hidden">
                {children}
              </div>
            </PageLoader>
          </VisitTracker>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
