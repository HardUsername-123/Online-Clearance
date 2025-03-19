import Link from "next/link";
import React from "react";
import {
  Menu,
  Book,
  Users,
  FileText,
  Settings,
  User,
  ChartNoAxesCombined,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const CustomSideMenu = () => {
  const pathName = usePathname();
  const sideMenuItems = [
    {
      href: "/adminSide",
      label: "Dashboard",
      icon: <ChartNoAxesCombined />,
    },
    {
      href: "/adminSide/home",
      label: "Clearing Officer",
      icon: <FileText />,
    },
    { href: "/adminSide/sr", label: "Student", icon: <Users /> },
    {
      href: "/adminSide/adminSettings",
      label: "Account Settings",
      icon: <Settings />,
    },
  ];

  return (
    <aside className="hidden sm:block w-64 p-4 border-r  bg-slate-600 text-white">
      <div className="flex items-center space-x-3 p-4 border-b">
        <Avatar>
          <AvatarImage
            src="https://static.vecteezy.com/system/resources/thumbnails/048/926/084/small_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg"
            alt="User"
          />
          <AvatarFallback>
            <User className="h-10 w-10" />
          </AvatarFallback>
        </Avatar>
        <div className="grid">
          <span className="font-semibold">John Doe</span>
          <span className="text-sm text-slate-400">Admin</span>
        </div>
      </div>
      <nav className="mt-4">
        {sideMenuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-2 p-2 rounded transition-colors 
              ${
                pathName === item.href
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white dark:from-indigo-600 dark:to-purple-600"
                  : "hover:bg-gray-400"
              }
              `}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default CustomSideMenu;
