import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Inter, Handjet } from 'next/font/google'

import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const handjet = Handjet({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-handjet",
});

export const metadata: Metadata = {
  title: "Gabriel Machado | Portfolio",
  description: "Since 2018, turning coffee into code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${handjet.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
