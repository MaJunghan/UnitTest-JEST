const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    // stack.push("🍕");
    // expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    // it("throws an error if stack im emmpty", () => {
    //   expect(() => {
    //     stack.pop();
    //   }).toThrow("stack is empty");
    // });

    it("returns the last pushed item and removes it from the stack", () => {
      stack.push("🍟");
      stack.push("🍔");

      expect(stack.pop()).toBe("🍔");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws an error if stack im emmpty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("stack is empty");
    });

    it("returns the last pushed item but keeps it in the stack", () => {
      stack.push("🍟");
      stack.push("🍔");

      expect(stack.peek()).toBe("🍔");
      expect(stack.size()).toBe(2);
    });
  });
});
