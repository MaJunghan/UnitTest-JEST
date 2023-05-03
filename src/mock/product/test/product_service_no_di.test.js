const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;

  // 네트워크와 의존하는 관계의 코드는 좋지않다 => mock data
  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toEqual([{ item: "🥛", available: true }]);
    expect(items.length).toBe(1);
  });
});
