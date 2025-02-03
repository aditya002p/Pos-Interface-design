/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "../components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  // Sample data for demonstration
  const salesData = [
    { name: "Jan", sales: 4000, customers: 240 },
    { name: "Feb", sales: 3000, customers: 198 },
    { name: "Mar", sales: 5000, customers: 300 },
    { name: "Apr", sales: 4500, customers: 270 },
    { name: "May", sales: 6000, customers: 320 },
    { name: "Jun", sales: 5500, customers: 290 },
  ];

  const servicePerformance = [
    { name: "Personal Training", revenue: 15000, bookings: 200 },
    { name: "Yoga Classes", revenue: 8000, bookings: 320 },
    { name: "Therapy Sessions", revenue: 24000, bookings: 200 },
    { name: "Workshops", revenue: 12000, bookings: 40 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Total Sales</h3>
          <p className="text-3xl font-bold">$40,500</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Total Customers</h3>
          <p className="text-3xl font-bold">1,618</p>
          <p className="text-sm text-green-600">+8% from last month</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Average Order Value</h3>
          <p className="text-3xl font-bold">$125</p>
          <p className="text-sm text-green-600">+5% from last month</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Monthly Sales Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="sales"
                fill="#4F46E5"
                name="Sales ($)"
              />
              <Bar
                yAxisId="right"
                dataKey="customers"
                fill="#10B981"
                name="Customers"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Service Performance</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={servicePerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#4F46E5" name="Revenue ($)" />
              <Bar dataKey="bookings" fill="#10B981" name="Bookings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};
export default Analytics;
