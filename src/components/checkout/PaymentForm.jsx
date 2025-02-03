/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";

const PaymentForm = ({ onSuccess }) => {
  const { getTotal } = useCart();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    { id: "cash", label: "Cash", icon: "💵" },
    { id: "stripe", label: "Stripe", icon: "💳" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedMethod) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSuccess();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">CHECKOUT</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="font-medium">Choose Payment Method</h3>

        <div className="border rounded-md p-3 mb-4">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-xl font-bold text-orange-500">
            ${getTotal().toFixed(2)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelectedMethod(method.id)}
              className={`p-4 rounded-full text-center ${
                selectedMethod === method.id
                  ? "bg-orange-100 border-orange-500"
                  : "bg-gray-50 border-gray-200"
              } border-2`}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl">{method.icon}</span>
                <span className="text-sm">{method.label}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-800"
          >
            Back To Cart
          </button>
          <button
            type="submit"
            disabled={!selectedMethod}
            className={`px-6 py-2 rounded-md ${
              selectedMethod
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Proceed to Payment →
          </button>
        </div>
      </form>
    </div>
  );
};
export default PaymentForm;
