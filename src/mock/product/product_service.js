// const ProductClient = require("./product_client");
class ProductService {
  constructor(productClient) {
    // this.productClient = new ProductClient();

    // 직접 만들어서 사용하는것이아니라, 외부에서 주어진 클라이언트를 사용한다 (의존성주입 DI)
    // 테스트환경에서는 테스트용 클라이언트를 주입, 실제환경에서는 실제 클라이언트를 주입
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
