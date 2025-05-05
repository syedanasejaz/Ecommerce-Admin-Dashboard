import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/header";
import ProductDescriptionGenerator from "../../components/ProductDescription/ProductDescriptionGenerator";
import ProductTable from "../../components/ProductTable/ProductTable";
import KPISection from "../../components/KPISection/KPISection";
import LiveOrderChart from "../../components/LiveOrderChart/LiveOrderChart";
import InventoryPieChart from "../../components/InventoryPieChart/InventoryPieChart";
import RevenueHeatmap from "../../components/RevenueHeatmap/RevenueHeatmap";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    if (!token) return navigate("/login");

    setTimeout(() => {
      setData({ orders: 50, revenue: 10000, products: 200 });
    }, 800);
  }, [navigate]);

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen p-4 text-gray-900 dark:text-gray-100">
        Loading...
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1">
        <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
          <KPISection />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <LiveOrderChart />
            </div>
            <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <InventoryPieChart />
            </div>
          </div>
          <div className="w-full">
            <RevenueHeatmap />
          </div>
        </div>
      </div>
    </div>
  );
}
