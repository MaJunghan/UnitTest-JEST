const Calculator = require("../calculator.js");

// 관련 있는 테스트를 묶을 때 : describe
describe("calculator", () => {
  let cal;
  // beforeEach : 테스트 코드가 수행되기전에 실행됨. 공통적으로 인스턴스 생성하는부분 처리
  // 각각의 테스트는 서로의 영향을 미치지않고 독립적으로 수행되어야 하기 떄문 !
  // 예상하는대로 검증하기위해서 테스트코드를 작성했고, 단위테스트를 실행함.

  beforeEach(() => {
    cal = new Calculator();
  });

  it("init width 0", () => {
    expect(cal.value).toBe(0);
  });
  it("sets", () => {
    cal.set(5);
    expect(cal.value).toBe(5);
  });
  it("claer", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });
  it("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });
  it("add should throw an error if value is greater than 100", () => {
    // 에러가 발생할 테스트 코드는 expect안에 callback함수로 전달해주어야함.
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });
  it("subtract", () => {
    cal.set(9);
    cal.subtract(2);
    expect(cal.value).toBe(7);
  });

  it("multiply", () => {
    cal.set(2);
    cal.multiply(4);
    expect(cal.value).toBe(8);
  });
  it("divide", () => {
    cal.set(4);
    cal.divide(2);
    expect(cal.value).toBe(2);
  });
});
