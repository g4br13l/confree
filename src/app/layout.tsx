import type { Metadata } from "next";
import "./globals.css";
import React, {ReactNode} from "react";
import {Header} from "@/components/layout/Header";
import {Poppins} from "next/font/google";
import {AppThemeProvider} from "@/lib/app-theme-provider";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Confree",
  description: "A única plataforma de eventos de vinho do Brasil.",
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <AppThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </AppThemeProvider>
      </body>
    </html>

  );
}
