/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../../hooks/useCart";
import { Card } from "../ui/Card";
import { formatCurrency } from "../../utils/currency";
import { formatDate } from "../../utils/dateFormatter";

const Receipt = () => {
  const { cart, customer, getTotal } = useCart();
  const receiptNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const date = new Date();

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Receipt</h2>
        <p className="text-gray-500">#{receiptNumber}</p>
        <p className="text-gray-500">{formatDate(date)}</p>
      </div>

      {customer && (
        <div className="mb-6">
          <h3 className="font-bold mb-2">Customer Details</h3>
          <p>{customer.name}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      )}

      <div className="border-t border-b py-4 mb-4">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th>Service</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className="text-right">{item.quantity}</td>
                <td className="text-right">{formatCurrency(item.price)}</td>
                <td className="text-right">
                  {formatCurrency(item.price * item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-right">
        <div className="text-xl font-bold">
          Total:{formatCurrency(getTotal())}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Thank you for your business!</p>
      </div>
    </Card>
  );
};
export default Receipt;
