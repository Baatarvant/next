"use client";

import { Header } from "@/components";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <div className="pt-16" />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
