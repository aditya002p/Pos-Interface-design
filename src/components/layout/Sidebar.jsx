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
    <aside className="w-64 bg-white shadow-sm h-screen">
      <nav className="mt-5 px-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <item.icon className="mr-4 h-6 w-6" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
