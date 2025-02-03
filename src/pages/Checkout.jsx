/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import CustomerForm from "../components/checkout/CustomerForm";
import PaymentForm from "../components/checkout/PaymentForm";
import Receipt from "../components/checkout/Receipt";
import { Card } from "../components/ui/card";

const Checkout = () => {
  const [step, setStep] = useState("customer"); // customer, payment, receipt
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    navigate("/");
    return null;
  }

  const handlePaymentSuccess = () => {
    setStep("receipt");
  };

  const handleFinish = () => {
    clearCart();
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-6">
        {step === "customer" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
            <CustomerForm onSubmit={() => setStep("payment")} />
          </>
        )}

        {step === "payment" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <PaymentForm onSuccess={handlePaymentSuccess} />
          </>
        )}

        {step === "receipt" && (
          <>
            <Receipt />
            <div className="mt-6">
              <button
                onClick={handleFinish}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Complete Order
              </button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
export default Checkout;
