import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.nullspecteracademy.ninja"),
  title: "AbdUlrahman Elsayed — Power Eng & Full-Stack Dev",
  description:
    "Portfolio of AbdUlrahman Elsayed, an Electrical Power Engineer and Full-Stack Web Developer building robust, end-to-end web systems and e-commerce platforms.",
  openGraph: {
    title: "AbdUlrahman Elsayed — Power Eng & Full-Stack Dev",
    description:
      "Electrical Power Engineer and Full-Stack Web Developer building robust, end-to-end web systems and e-commerce platforms.",
    url: "https://portfolio.nullspecteracademy.ninja",
    siteName: "AbdUlrahman Elsayed",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AbdUlrahman Elsayed — Power Eng & Full-Stack Dev",
    description:
      "Electrical Power Engineer and Full-Stack Web Developer building robust, end-to-end web systems and e-commerce platforms.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
