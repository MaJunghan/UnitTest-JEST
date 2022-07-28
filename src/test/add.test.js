// add라는 파일의 test를 하는 파일이라고 명시하는것 ->  파일이름.test

// 모듈 import
const add = require("../add.js");

// 테스트 코드
test("add 1, + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
  // add라는 함수에 param (1,2) 주면 결과값이 3
});
