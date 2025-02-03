/* eslint-disable no-unused-vars */
import { useState } from "react";
import ServiceGrid from "../components/pos/ServiceGrid";
import ServiceFilters from "../components/pos/ServiceFilters";
import SearchBar from "../components/pos/SearchBar";
import Cart from "../components/pos/Cart";

// POS.jsx
const POS = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6">
      {/* Mobile Cart Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={toggleCart}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          {isCartVisible ? "Hide Cart" : "Show Cart"}
        </button>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3 order-1 lg:order-none">
        <div className="space-y-4">
          <SearchBar />
          <ServiceFilters />
        </div>
        <div className="mt-4">
          <ServiceGrid />
        </div>
      </div>

      {/* Cart - Mobile & Desktop */}
      <div
        className={`lg:col-span-1 lg:block ${
          isCartVisible ? "block" : "hidden"
        }`}
      >
        <div className="sticky top-4">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default POS;
