"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Bell, User } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl mr-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/web.png"
                  alt="Web Image"
                  width={120}
                  height={120}
                />
              </div>
            </Link>
            {/* <div className="hidden sm:flex sm:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  {item.label}
                </Link>
              ))}
            </div> */}
          </div>

          {/* Right Side: Notifications and Avatar */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 flex hover:text-gray-700">
              <Bell className="h-6 w-6" />
            </button>
            <span>Log out</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
