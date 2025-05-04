import { describe, test, expect, beforeEach } from "vitest";
import useProductStore from "./productStore";

describe("useProductStore", () => {
  beforeEach(() => {
    useProductStore.setState({
      products: [],
      filter: "",
    });
  });

  test("adds a new product", () => {
    const store = useProductStore.getState();
    const initialLength = store.products.length;

    store.addProduct({
      id: 101,
      name: "New Product",
      category: "Category",
      price: 100,
    });

    const updatedProducts = useProductStore.getState().products;
    expect(updatedProducts).toHaveLength(initialLength + 1);
    expect(updatedProducts[updatedProducts.length - 1]).toEqual(
      expect.objectContaining({ name: "New Product" })
    );
  });

  test("updates a product", () => {
    const store = useProductStore.getState();
    store.addProduct({
      id: 1,
      name: "Original Product",
      category: "Category",
      price: 100,
    });

    store.updateProduct(1, "name", "Updated Product");

    const updatedProduct = store.products.find((p) => p.id === 1);
    expect(updatedProduct.name).toBe("Updated Product");
  });

  test("filters products", () => {
    const store = useProductStore.getState();
    store.addProduct({
      id: 1,
      name: "test product",
      category: "Category",
      price: 100,
    });
    store.addProduct({
      id: 2,
      name: "another product",
      category: "Category",
      price: 200,
    });

    store.setFilter("test");

    const filteredProducts = store.getFilteredProducts();
    expect(
      filteredProducts.every((p) => p.name.toLowerCase().includes("test"))
    ).toBe(true);
  });
});
