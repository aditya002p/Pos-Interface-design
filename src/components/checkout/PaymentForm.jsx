/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useCart } from "../../hooks/useCart";
import { formatCurrency } from "../../utils/currency";

const PaymentForm = ({ onSuccess }) => {
  const { getTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-xl font-bold mb-4">
        Total to pay: {formatCurrency(getTotal())}
      </div>

      <Input
        label="Card Number"
        value={formData.cardNumber}
        onChange={(e) =>
          setFormData({ ...formData, cardNumber: e.target.value })
        }
        placeholder="1234 5678 9012 3456"
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Expiry Date"
          value={formData.expiry}
          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
          placeholder="MM/YY"
          required
        />
        <Input
          label="CVV"
          value={formData.cvv}
          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
          placeholder="123"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </Button>
    </form>
  );
};
export default PaymentForm;
