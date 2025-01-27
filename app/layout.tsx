import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { LayoutProvider } from "@/components/layout/LayoutProvider";
import Providers from "./providers";
import AppSidebar from "@/components/sidebar/AppSidebar";

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Next Robot",
    default: "Next Robot",
  },
  description: "A robotic company website built with Next.js",
  keywords: ["Startup", "Next.js", "React", "Tailwind CSS", "Type script"],
  authors: [
    {
      name: "M. Saeed Mafipour",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.variable} ${ebGaramond.variable} antialiased w-full bg-white text-stone-950`}
      >
        <Providers>
          <AppSidebar />
          <LayoutProvider>{children}</LayoutProvider>
        </Providers>
      </body>
    </html>
  );
}
