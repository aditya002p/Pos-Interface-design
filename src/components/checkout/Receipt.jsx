/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../../hooks/useCart";
import { CheckCircle } from "lucide-react";

const Receipt = () => {
  const { cart, getTotal } = useCart();
  const orderNumber = "WPO_117";
  const date = new Date();

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg">
      <div className="text-center mb-6">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
        <h2 className="text-xl font-bold">ORDER PROCESSING</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-4 text-sm">
          <div>
            <p className="text-gray-600">Order Number</p>
            <p className="font-medium">{orderNumber}</p>
          </div>
          <div>
            <p className="text-gray-600">Order Date</p>
            <p className="font-medium">{date.toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Payment Method</p>
            <p className="font-medium">Cash</p>
          </div>
          <div>
            <p className="text-gray-600">Payment Status</p>
            <p className="text-red-500">Not Paid</p>
          </div>
        </div>

        <div className="border-t pt-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 mb-4">
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">Qty {item.quantity}</p>
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>VAT</span>
            <span>$1.38</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span className="text-xl">${(getTotal() + 1.38).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Receipt;
