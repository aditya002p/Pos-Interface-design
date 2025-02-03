/* eslint-disable no-unused-vars */
import React from "react";
import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { formatCurrency } from "../../utils/currency";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">Your cart is empty</p>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>{formatCurrency(getTotal())}</span>
        </div>

        <div className="mt-4 space-y-2">
          <Button
            variant="primary"
            className="w-full"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </Button>
          <Button variant="secondary" className="w-full" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default Cart;
