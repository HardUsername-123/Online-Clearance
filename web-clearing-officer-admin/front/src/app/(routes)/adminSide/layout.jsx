"use client";

import React from "react";
import Navbar from "./components/Navbar";
import CustomSideMenu from "./components/SideMenu";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-1">
          {/* Sidebar (Desktop) */}
          <CustomSideMenu />

          {/* Main Content */}
          <main className="flex-1 p-4 bg-slate-100 transition-colors">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
