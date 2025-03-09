import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center">
          <Image
            src="/assets/images/web.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>
        {/* <div className="space-x-4 flex items-center">
          <Link href="/signin" className="text-gray-300 hover:text-white">
            Sign In
          </Link>
          <Link href="/signup" className="text-gray-300 hover:text-white">
            Sign Up
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
