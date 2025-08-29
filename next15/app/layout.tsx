import "./globals.css";

import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import { ThemeProvider } from "@/providers/theme";
import { Tanstack } from "@/providers/tanstack";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "./_components/footer/Footer";
import { Navbar } from "./_components/nav/Navbar";

const comicNeue = Comic_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varun Teja K",
  description: "varunteja007006@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${comicNeue.className} antialiased scroll-smooth`}>
        <Tanstack>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen flex flex-col w-full">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </Tanstack>
      </body>
    </html>
  );
}
