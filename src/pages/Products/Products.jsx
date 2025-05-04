import React from "react";
import ProductTable from "../../components/ProductTable/ProductTable";

const Products = () => {
  return (
    <>
      <div className="p-4">
        <p className="p-4 text-2xl font-bold text-gray-800">Products Table</p>
        <ProductTable />
      </div>
    </>
  );
};

export default Products;
