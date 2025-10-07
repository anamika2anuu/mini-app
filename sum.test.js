const { add } = require("./app");

test("adds numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});
