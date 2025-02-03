/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingCart, BarChart2 } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "POS", path: "/" },
    { icon: ShoppingCart, label: "Checkout", path: "/checkout" },
    { icon: BarChart2, label: "Analytics", path: "/analytics" },
  ];

  return (
    <aside className="w-full lg:w-64 bg-white shadow-sm">
      <nav className="flex lg:block overflow-x-auto lg:overflow-visible">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-center px-4 py-2 text-sm lg:text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex-shrink-0 lg:flex-shrink"
          >
            <item.icon className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
