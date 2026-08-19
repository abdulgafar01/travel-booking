import type { Metadata } from "next";
import { Inter, Crushed } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const crushed = Crushed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-crushed",
});

export const metadata: Metadata = {
  title: "Travel Packages",
  description: "Book available travel packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${crushed.variable}`}>
        <Providers>
          {/* <Navbar/> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}