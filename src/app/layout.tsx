import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SideNav from "@/components/SideNav";
import OpenToWork from "@/components/OpenToWork";
import ScrollProgress from "@/components/ScrollProgress";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import VisitTracker from "@/components/VisitTracker";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "James Ryan Gaid - QA Engineer & Test Automation Specialist",
  description: "Professional QA Engineer specializing in automated testing, security testing, and quality assurance. Expert in Cypress, Selenium, API testing, and CI/CD integration.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProviderWrapper>
          <VisitTracker>
            <SideNav />
            <ScrollProgress />
            <OpenToWork />
            <div className="relative min-h-screen">
              <div className="lg:pr-0 xl:pr-0">
                {children}
              </div>
            </div>
          </VisitTracker>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
