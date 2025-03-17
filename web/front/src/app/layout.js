"use client";

import { Outfit } from "next/font/google";
import "./globals.css";

import React from "react";
import { Toaster } from "@/components/ui/sonner"

const outfit = Outfit({ subsets: ["latin"] });

const metadata = {
  title: "ASCS",
  description:
    "An Automated Student Clearance System.",
  icons: {
    icon: "/web.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
        data-new-gr-c-s-check-loaded="14.1226.0"
        data-gr-ext-installed=""
      >
        <main className="">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
