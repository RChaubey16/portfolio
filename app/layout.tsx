import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import UserProfile from "@/components/UserProfile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh]`}
      >
        <section className="w-full max-w-4xl mx-auto mt-4 lg:mt-12 px-4 md:px-8 lg:px-0 flex flex-col lg:flex-row">
          <aside className="lg:flex-[0.3]">
            <UserProfile />
          </aside>
          <main className="flex-[0.7]">{children}</main>
        </section>
      </body>
    </html>
  );
}
