/* eslint-disable no-unused-vars */
import React from "react";
import { useServices } from "../../hooks/useServices";

const ServiceFilters = () => {
  const { selectedCategory, setSelectedCategory } = useServices();

  const categories = [
    { id: "all", name: "All Services" },
    { id: "fitness", name: "Fitness" },
    { id: "therapy", name: "Therapy" },
    { id: "workshops", name: "Workshops" },
  ];

  return (
    <div className="flex flex-wrap gap-2 lg:gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-3 lg:px-4 py-2 text-sm lg:text-base rounded-md flex-1 lg:flex-none ${
            selectedCategory === category.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
export default ServiceFilters;
