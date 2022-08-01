const Calculator = require("../calculator");

describe("Calculator", () => {
  let cal;
  // it실행하기전에 무조건 한번 실행
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });
  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });
  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });
  it("add", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });
  it("subtracts", () => {
    cal.set(2);
    cal.subtract(1);
    expect(cal.value).toBe(1);
  });
});
