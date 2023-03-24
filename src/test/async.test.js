const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      // 비동기 데이터를 처리할땐 완료 후 done을 호출
      done();
    });
  });

  it("async - return", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", async () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
