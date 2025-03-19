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
  Calendar,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

const CustomSideMenu = () => {
  const pathName = usePathname();

  const sideMenuItems = [
    {
      href: "/departmentClearance",
      label: "Dashboard",
      icon: <ChartNoAxesCombined />,
    },
    { href: "/departmentClearance/home", label: "Courses", icon: <Book /> },
    {
      href: "/departmentClearance/sr",
      label: "Student Record",
      icon: <Users />,
    },
    {
      href: "/departmentClearance/req",
      label: "Requirements",
      icon: <FileText />,
    },
    { href: "/departmentClearance/event", label: "Events", icon: <Calendar /> },
    {
      href: "/departmentClearance/acc",
      label: "Account Settings",
      icon: <Settings />,
    },
  ];

  return (
    <aside className="hidden sm:block w-64 p-4 border-r bg-gray-50 dark:bg-gray-800 rounded-tr-lg rounded-br-lg">
      <div className="flex items-center space-x-3 p-4 border-b">
        <Avatar>
          <AvatarImage
            src="https://api.time.com/wp-content/uploads/2014/10/474639991.jpg"
            alt="User"
          />
          <AvatarFallback>
            <User className="h-10 w-10" />
          </AvatarFallback>
        </Avatar>
        <span className="font-semibold">John Doe</span>
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
                  : "hover:bg-gray-100"
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
