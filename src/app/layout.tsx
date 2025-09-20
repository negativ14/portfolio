import type { Metadata } from "next";
import { poppins, robotoMono } from "@/lib/fonts";
import "./globals.css";
import ThemeProvider from "@/Providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Negativ Portfolio",
  description:
    "I design, I code, I break things, then pretend it was part of the process. Portfolio of a design engineer who likes making interfaces behave.",
  icons: {
    icon: "/favicon.png",
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
        className={`${poppins.className} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
