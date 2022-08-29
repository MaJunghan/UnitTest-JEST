const ProductClient = require("./product_client");
class ProductService {
  // 서비스에서 클라이언트를 사용하는것은 좋은 테스트가 아님.
  // 또한 데이터를 받아오지 못하는 상태나,네트워크에 의존하는것은 좋지않음.
  constructor() {
    this.productClien = new ProductClient();
  }
  fetchAvailableItems() {
    return this.productClien.fetchItems().then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
