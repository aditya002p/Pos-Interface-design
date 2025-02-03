/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../../hooks/useCart";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { formatCurrency } from "../../utils/currency";

const ServiceCard = ({ service }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-full flex flex-col">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
        <p className="mt-1 text-gray-500">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            {formatCurrency(service.price)}
          </span>
          <Button
            variant="primary"
            size="sm"
            onClick={() => addToCart(service)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default ServiceCard;
