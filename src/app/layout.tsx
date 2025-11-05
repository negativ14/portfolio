import type { Metadata } from "next";
import { poppins, robotoMono } from "@/lib/fonts";
import "./globals.css";
import ThemeProvider from "@/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Negativ Portfolio | Rohit – Design Engineer",
  description:
    "I design, I code, I break things, then pretend it was part of the process. Portfolio of Rohit – Design Engineer who loves building interactive interfaces.",
  metadataBase: new URL("https://negativ.in"),
  alternates: {
    canonical: "https://negativ.in",
  },
  openGraph: {
    url: "https://negativ.in",
    siteName: "Negativ's Portfolio",
    images: [
      {
        url: "/page.png",
        width: 1200,
        height: 630,
        alt: "Negativ Portfolio – Rohit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Negativ | Rohit – Design Engineer",
    description:
      "Portfolio of Rohit – Design Engineer specializing in React, Next.js, and UI design.",
    images: ["/page.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  authors: [{ name: "Rohit", url: "https://negativ.in" }],
  creator: "Rohit",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Design Engineer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="50993448-3102-49ed-8a8c-850e1939e3c2"
      ></script>
      <body
        className={`${poppins.className} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
