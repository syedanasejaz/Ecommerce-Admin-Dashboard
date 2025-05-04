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
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: darkMode ? "#e5e7eb" : "#374151",
        },
      },
    },
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg transition-colors duration-200"
      style={{ width: "80%" }}
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Inventory Status
      </h3>
      <Pie data={data} options={options} />
    </div>
  );
}
