import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LayoutClient from "@/components/LayoutClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wentworth Projects | Commercial Fit Outs & Refurbishments",
  description:
    "Expert shop fit outs, office refurbishments, and commercial interiors. Premium construction solutions for businesses across London and the South East.",
  authors: [{ name: "Wentworth Projects" }],
  openGraph: {
    title: "Wentworth Projects | Commercial Fit Outs & Refurbishments",
    description:
      "Expert shop fit outs, office refurbishments, and commercial interiors across London and the South East.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <LayoutClient>{children}</LayoutClient>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
