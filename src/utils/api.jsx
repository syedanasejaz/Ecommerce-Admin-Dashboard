export const fetchMockData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        orders: 100,
        revenue: 50000,
        products: 300,
      });
    }, 1000);
  });
};
