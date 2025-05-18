"use client"

import React, {useState} from "react";
import { Menu, Book, Users, FileText, Settings, User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "../../components/Navbar";
import CustomSideMenu from "../../components/SideMenu";



export default function RootLayout({children}) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sideMenuItems = [
      { href: "/home", label: "Courses", icon: <Book /> },
      { href: "/sr", label: "Student Record", icon: <Users /> },
      { href: "/req", label: "Requirements", icon: <FileText /> },
      { href: "/acc", label: "Account Settings", icon: <Settings /> },
    ];
  
  return (
    <>
      <div
        // className={outfit.className}
        // data-new-gr-c-s-check-loaded="14.1226.0"
        // data-gr-ext-installed=""
      >
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="sm:hidden p-4">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white dark:bg-gray-800">
              <SheetTitle></SheetTitle>
              <div className="flex items-center space-x-4 p-4 border-b">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src="/avatar.png"
                    alt="User"
                    className="w-16 h-16 rounded-full"
                  />
                  <AvatarFallback className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                    <User className="h-10 w-10 text-gray-500" />
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold text-lg">John Doe</span>
              </div>

              <nav className="mt-4">
                {sideMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 p-2 rounded transition-colors hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white dark:hover:from-indigo-600 dark:hover:to-purple-600"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex flex-1">
            {/* Sidebar (Desktop) */}
            <CustomSideMenu />

            {/* Main Content */}
            <main className="flex-1 p-4 bg-slate-100 dark:bg-gray-900 transition-colors">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
