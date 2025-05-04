import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useTheme } from "../../hooks/UseContext/ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LiveOrderChart() {
  const { darkMode } = useTheme();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#e5e7eb" : "#374151",
        },
      },
      title: {
        display: true,
        text: "Live Orders Over Time",
        color: darkMode ? "#e5e7eb" : "#374151",
      },
    },
    scales: {
      x: {
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: darkMode ? "#e5e7eb" : "#374151",
        },
      },
      y: {
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: darkMode ? "#e5e7eb" : "#374151",
        },
      },
    },
  };

  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Orders",
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: "#FA8103",
        backgroundColor: "rgba(250, 129, 3, 0.5)",
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow transition-colors duration-200">
      <Line options={options} data={data} />
    </div>
  );
}
