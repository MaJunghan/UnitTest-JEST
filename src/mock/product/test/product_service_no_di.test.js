const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client"); // 단위 테스트는 독립적이라 ProductService에서 Client사용하면안됨 => mock

jest.mock("../product_client"); // 1. this.productClien = new ProductClient();

describe("ProductService", () => {
  // 2. fetchItems()
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "banana", available: false },
  ]);
  // 3. 연결
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1); // length 1
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
