/* eslint-disable no-unused-vars */
import React from "react";
import { useServices } from "../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
  const { filteredServices } = useServices();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredServices.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};
export default ServiceGrid;
