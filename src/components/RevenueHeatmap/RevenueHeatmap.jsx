export default function RevenueHeatmap() {
  const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    value: Math.floor(Math.random() * 1000),
  }));

  return (
    <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 shadow rounded-lg transition-colors duration-200">
      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 text-gray-900 dark:text-gray-100">
        Revenue Heatmap
      </h3>
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1 sm:gap-2">
        {days.map((d) => (
          <div
            key={d.day}
            className="aspect-square text-xs sm:text-sm flex items-center justify-center text-white rounded"
            style={{
              backgroundColor: `rgba(250, 129, 3, ${d.value / 1000})`,
            }}
          >
            {d.day}
          </div>
        ))}
      </div>
    </div>
  );
}
