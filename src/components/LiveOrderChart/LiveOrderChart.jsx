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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#e5e7eb" : "#374151",
          padding: 10,
          boxWidth: 12,
          font: {
            size: window.innerWidth < 768 ? 11 : 12,
          },
        },
      },
      title: {
        display: true,
        text: "Live Orders Over Time",
        color: darkMode ? "#e5e7eb" : "#374151",
        font: {
          size: window.innerWidth < 768 ? 13 : 14,
          weight: "normal",
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: darkMode ? "#e5e7eb" : "#374151",
          font: {
            size: window.innerWidth < 768 ? 10 : 11,
          },
        },
      },
      y: {
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: darkMode ? "#e5e7eb" : "#374151",
          font: {
            size: window.innerWidth < 768 ? 10 : 11,
          },
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
    <div className="p-4 h-full flex flex-col">
      <div className="flex-1 min-h-[250px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
