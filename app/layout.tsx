import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "./components/Navbar";
import { Providers } from "./Providers";
import NavbarV2 from "./components/NavbarV2";

export const metadata: Metadata = {
  title: "Ethan Chiasson",
  description: "Ethan Chiasson - software developer and product designer.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌊</text></svg>"
  },
 


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="cursor-crosshair">
      <body
        className={GeistSans.className + " min-h-screen max-w-[888px] mx-auto"}
        // className={GeistSans.className + " min-h-screen max-w-[1280px] mx-auto"}
      >
        <Providers>
          {/* <Navbar /> */}
        <NavbarV2/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
