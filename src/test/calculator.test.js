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
  it("add should throw error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });
  it("subtracts", () => {
    cal.set(2);
    cal.subtract(1);
    expect(cal.value).toBe(1);
  });
  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });
  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });
    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
