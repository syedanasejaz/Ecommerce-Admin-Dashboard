import React, { useState } from "react";

export default function ProductDescriptionGenerator({ onGenerateComplete }) {
  const [productName, setProductName] = useState("");
  const [loading, setLoading] = useState(false);

  const generateDescription = () => {
    setLoading(true);

    setTimeout(() => {
      const generatedName = "Premium E-commerce Product";

      setProductName(generatedName);
      setLoading(false);

      if (onGenerateComplete) {
        onGenerateComplete({
          name: generatedName,
        });
      }
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-bold mb-2 dark:text-gray-100">
        AI-Powered Description
      </h2>
      <button
        onClick={generateDescription}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-orange-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating..." : "Auto-generate Name & Description"}
      </button>

      {productName && (
        <div className="mt-4 border-t dark:border-gray-700 pt-4">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            Generated Name:
          </p>
          <p className="text-gray-800 dark:text-gray-300 mb-2">{productName}</p>
        </div>
      )}
    </div>
  );
}
