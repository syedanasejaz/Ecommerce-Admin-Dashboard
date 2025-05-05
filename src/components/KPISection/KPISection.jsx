import { useEffect, useState } from "react";

const kpis = [
  { label: "Total Orders", value: 3280 },
  { label: "Revenue", value: 98240 },
  { label: "Customers", value: 1450 },
  { label: "Products", value: 240 },
];

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      setCount(Math.floor(percent * target));
      if (progress < duration) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return count.toLocaleString();
}

export default function KPISection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
      {kpis.map((kpi) => {
        const animatedValue = useCounter(kpi.value, 1500);

        return (
          <div
            key={kpi.label}
            className="bg-white dark:bg-gray-800 p-3 sm:p-4 shadow rounded-lg text-center border border-primary dark:border-orange-400 transition-colors duration-200"
          >
            <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              {kpi.label}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-primary dark:text-orange-400 mt-1">
              {animatedValue}
            </div>
          </div>
        );
      })}
    </div>
  );
}
