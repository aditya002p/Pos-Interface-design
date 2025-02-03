/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../../hooks/useCart";
import { Minus, Plus, X } from "lucide-react";
import { formatCurrency } from "../../utils/currency";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
      <div className="flex-1">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-500">
          {formatCurrency(item.price)} x {item.quantity}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <Minus size={16} />
        </button>

        <span className="w-8 text-center">{item.quantity}</span>

        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Plus size={16} />
        </button>

        <button
          className="p-1 hover:bg-gray-200 rounded text-red-500"
          onClick={() => removeFromCart(item.id)}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
