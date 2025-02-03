/* eslint-disable react/prop-types */
import { useState } from "react";
import { useCart } from "../../hooks/useCart";

// CustomerForm Component
const CustomerForm = ({ onSubmit }) => {
  const { setCustomer } = useCart();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomer(formData);
    onSubmit();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">CHECKOUT</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Enter Customer Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">
                Customer Username<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="w-full p-2 border rounded-md bg-gray-50"
                placeholder="Enter Username"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-2 border rounded-md bg-gray-50"
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-800"
            >
              Back To Cart
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Proceed to Payment →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CustomerForm;
