/* eslint-disable react/prop-types */
import React from "react";
import { useCart } from "../../hooks/useCart";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

const CustomerForm = ({ onSubmit }) => {
  const { setCustomer } = useCart();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomer(formData);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="enter name"
        required
      />
      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="enter email id"
        required
      />
      <Input
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="enter phone number"
        required
      />
      <Button type="submit" className="w-full">
        Continue to Payment
      </Button>
    </form>
  );
};
export default CustomerForm;
