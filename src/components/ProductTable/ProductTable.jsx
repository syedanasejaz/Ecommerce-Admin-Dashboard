import React, { useState } from "react";
import useProductStore from "../../store/productStore";
import * as XLSX from "xlsx";
import Button from "../Button/Button";
import ProductDescriptionGenerator from "../ProductDescription/ProductDescriptionGenerator";
import { v4 as uuidv4 } from "uuid";

const ProductTable = () => {
  const {
    products,
    filter,
    setFilter,
    sortBy,
    sortDirection,
    setSort,
    page,
    pageSize,
    setPage,
    updateProduct,
    addProduct, // Assuming   this is provided by useProductStore
  } = useProductStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
  });

  //ProductDescriptionGenerator
  const handleGeneratedContent = ({ name }) => {
    setNewProduct((prev) => ({
      ...prev,
      name: name,
    }));
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    if (valA < valB) return sortDirection === "asc" ? -1 : 1;
    if (valA > valB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleEdit = (id, key, value) => {
    // Convert numeric values
    let processedValue = value;
    if (key === "price" || key === "stock") {
      processedValue = parseFloat(value) || 0;
    }
    // Update store which automatically saves to localStorage
    updateProduct(id, key, processedValue);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sorted);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");

    worksheet["!cols"] = [
      { wch: 10 },
      { wch: 20 },
      { wch: 15 },
      { wch: 10 },
      { wch: 10 },
    ];

    XLSX.writeFile(
      workbook,
      `products_export_${new Date().toISOString().split("T")[0]}.xlsx`
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (newProduct.name && newProduct.category && newProduct.price) {
      addProduct({
        id: uuidv4(),
        name: newProduct.name,
        category: newProduct.category,
        price: parseFloat(newProduct.price),
        stock: 0,
      });
      setNewProduct({ name: "", category: "", price: "" });
      setIsModalOpen(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setNewProduct({ name: "", category: "", price: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-2 mb-4">
        <input
          type="text"
          placeholder="Search product name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border dark:border-gray-600 px-3 py-2 rounded w-full sm:w-1/2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            onClick={exportToExcel}
            variant="primary"
            size="md"
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Export to Excel</span>
            <span className="sm:hidden">Export</span>
          </Button>
          <Button
            onClick={openModal}
            variant="primary"
            size="md"
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Add New Product</span>
            <span className="sm:hidden">Add Product</span>
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Add New Product
            </h2>

            <div className="mb-6">
              <ProductDescriptionGenerator
                onGenerateComplete={handleGeneratedContent}
              />
            </div>

            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-full border dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  className="w-full border dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-full border dark:border-gray-600 px-3 py-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  step="0.01"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  onClick={closeModal}
                  variant="secondary"
                  size="md"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md">
                  Add Product
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="w-full text-sm border dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-left">
            {["id", "name", "category", "price", "stock"].map((key) => (
              <th
                key={key}
                className="p-2 cursor-pointer text-gray-700 dark:text-gray-200"
                onClick={() => setSort(key)}
              >
                {key.toUpperCase()}
                {sortBy === key && (sortDirection === "asc" ? " 🔼" : " 🔽")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((product) => (
            <tr key={product.id} className="border-t dark:border-gray-700">
              {Object.entries(product).map(([key, value]) => (
                <td key={key} className="p-2">
                  {["name", "category", "price", "stock"].includes(key) ? (
                    <input
                      className="w-full border rounded px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      value={value}
                      onChange={(e) =>
                        handleEdit(product.id, key, e.target.value)
                      }
                    />
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4 text-gray-700 dark:text-gray-200">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
