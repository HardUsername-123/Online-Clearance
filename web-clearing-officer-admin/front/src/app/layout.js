import { Outfit } from "next/font/google";
import "./globals.css";
import React from "react";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  // title: "ASCS",
  description: "An Automated Student Clearance System.",
  icons: {
    icon: "/old-logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} data-qb-installed="true">
      <body className={outfit.className}>
        <Head>
          {/* <title>{metadata.title}</title> */}
          <meta name="description" content={metadata.description} />
          <link rel="icon" href={metadata.icons.icon} />
        </Head>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
