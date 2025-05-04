import { create } from "zustand";
import { generateMockProducts } from "../utils/mockProducts";

// Load initial state from localStorage or generate mock data
const getInitialProducts = () => {
  const storedProducts = localStorage.getItem("products");
  return storedProducts ? JSON.parse(storedProducts) : generateMockProducts(100);
};

const useProductStore = create((set, get) => ({
  products: getInitialProducts(),
  filter: "",
  sortBy: "id",
  sortDirection: "asc",
  page: 1,
  pageSize: 10,

  getFilteredProducts: () => {
    const state = get();
    if (!state.filter) return state.products;
    return state.products.filter(p => 
      p.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  },

  setFilter: (filter) => set({ filter, page: 1 }),
  setSort: (sortBy) =>
    set((state) => ({
      sortBy,
      sortDirection:
        state.sortBy === sortBy && state.sortDirection === "asc"
          ? "desc"
          : "asc",
    })),
  setPage: (page) => set({ page }),
  updateProduct: (id, key, value) =>
    set((state) => {
      const updatedProducts = state.products.map((p) =>
        p.id === id ? { ...p, [key]: value } : p
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }),
  addProduct: (newProduct) =>
    set((state) => {
      const updatedProducts = [...state.products, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }),
}));

export default useProductStore;
