/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../../hooks/useCart";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">POS System</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </div>
            <User className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
