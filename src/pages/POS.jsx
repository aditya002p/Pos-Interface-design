/* eslint-disable no-unused-vars */
import React from "react";
import ServiceGrid from "../components/pos/ServiceGrid";
import ServiceFilters from "../components/pos/ServiceFilters";
import SearchBar from "../components/pos/SearchBar";
import Cart from "../components/pos/Cart";

const POS = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <div className="mb-6 space-y-4">
          <SearchBar />
          <ServiceFilters />
        </div>
        <ServiceGrid />
      </div>
      <div className="lg:col-span-1">
        <Cart />
      </div>
    </div>
  );
};
export default POS;
