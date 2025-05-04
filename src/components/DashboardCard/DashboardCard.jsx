import React from "react";

export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 mt-2">{value}</p>
    </div>
  );
}
