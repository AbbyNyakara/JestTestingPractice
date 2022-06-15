const stringLength = require('./stringLength.js');

test("String character counter", () => {
  expect(stringLength("Abby")).toBe(4);
})