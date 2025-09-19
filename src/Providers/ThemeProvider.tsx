"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import React from "react";

export default function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <NextThemeProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      defaultTheme="system"
    >
      {children}
    </NextThemeProvider>
  );
}
