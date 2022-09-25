const ProductService = require("../product_service");
const StubProductClient = require("./stub_product_client"); // 단위 테스트는 독립적이라 ProductService에서 Client사용하면안됨 => mock

describe("ProductService - Stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1); // length 1
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
