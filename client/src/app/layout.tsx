import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserInfo } from "@/lib/types";
import { cn } from "@/lib/utils";
import { sanityFetch, urlFor } from "@/sanity/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata | undefined> {
  let data = await sanityFetch<UserInfo[]>({ query: `*[_type == 'info']` });

  let { name, description, avatar } = data[0];

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
    title: {
      default: name,
      template: `%s | ${name}`,
    },
    description: description,
    openGraph: {
      title: `${name}`,
      description: description,
      url: process.env.NEXT_PUBLIC_URL!,
      siteName: `${name}`,
      locale: "en_US",
      type: "website",
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
    twitter: {
      title: `${name}`,
      card: "summary_large_image",
      images: [
        {
          url: urlFor(avatar).url(),
        },
      ],
    },
    verification: {
      google: "",
      yandex: "",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl lg:max-w-5xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <SpeedInsights />
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
