import { faker } from "@faker-js/faker";

export const generateMockProducts = (count = 100) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i + 1,
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.number.int({ min: 0, max: 1000 }), // ✅ updated for v9
  }));
