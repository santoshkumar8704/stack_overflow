import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
const inter = Inter({
  subsets: ['latin'],
  weight: ['100' , '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900'],
  variable: '--font-inter'
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300' , '400' , '500' , '600' , '700' ],
  variable: '--font-spaceGrotesk'
})
export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "DevOverflow: A vibrant online community for developers to ask questions, share knowledge, and interact. Join discussions, seek solutions, and connect with fellow developers across various programming domains. Your go-to platform for collaborative learning and networking in the world of coding",
  icons:{
    icon: '/assets/images/site-logo.svg'
  }
  };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary : 'primary-gradient',
        footerAction: 'primary-text-gradient hover:text-primary-500',
      }
    }}>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <h1 className="h1-bold">text text text</h1>
          {children}</body>
      </html>
    </ClerkProvider>
  );
}
