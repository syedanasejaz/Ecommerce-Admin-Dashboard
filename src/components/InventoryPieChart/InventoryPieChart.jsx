import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { useTheme } from "../../hooks/UseContext/ThemeContext";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

export default function InventoryPieChart() {
  const { darkMode } = useTheme();

  const data = {
    labels: ["In Stock", "Low Stock", "Out of Stock"],
    datasets: [
      {
        data: [300, 50, 20],
        backgroundColor: ["#34d399", "#fbbf24", "#f87171"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: darkMode ? "#e5e7eb" : "#374151",
          padding: 15,
          boxWidth: 15,
          font: {
            size: window.innerWidth < 768 ? 11 : 12,
          },
        },
      },
    },
  };

  return (
    <div className="p-4 h-full flex flex-col">
      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Inventory Status
      </h3>
      <div className="flex-1 min-h-[250px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
