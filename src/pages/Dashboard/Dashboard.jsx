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
      <div className="p-8 text-gray-900 dark:text-gray-100">Loading...</div>
    );

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
          <KPISection />
          <div className="grid grid-cols-12 md:grid-cols-2 gap-14">
            <LiveOrderChart />
            <InventoryPieChart />
          </div>
          {/* <div className="flex flex-wrap gap-6"> */}
          <RevenueHeatmap />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
