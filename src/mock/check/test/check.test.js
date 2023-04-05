const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });
  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);
    // 직관적이지 않아서 간편하게 사용할 수 있도록 api가 있음
    // expect(onSuccess.mock.calls.length).toBe(1);
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    // expect(onFail.mock.calls.length).toBe(0);

    // 몇번 호출했는지 ?
    expect(onSuccess).toHaveBeenCalledTimes(1);

    // 값이 맞는지 ?
    expect(onSuccess).toHaveBeenCalledWith("yes");
    expect(onFail).toHaveBeenCalledTimes(0);
  });
});
