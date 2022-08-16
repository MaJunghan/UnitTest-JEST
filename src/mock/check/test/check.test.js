const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    // mock data 선언
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    // true를 줄때 인자로 onSuccess,onFail 넘겨줌
    check(() => false, onSuccess, onFail);

    // true 이기떄문에 적어도 onSuccess를 한번은 호출해야한다.
    // expect(onSuccess.mock.calls.length).toBe(1);
    // toHaveBeenCalledTimes : 호출횟수 api
    expect(onSuccess).toHaveBeenCalledTimes(0);

    // calls의 1번째호출된 함수에 1번째 인자의값 'yes'
    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    // toHaveBeenCalledWith : 이 값이 호출되어야한다.
    // expect(onSuccess).toHaveBeenCalledWith("yes");

    // fail
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onFail).toHaveBeenCalledWith("no");
  });
});
