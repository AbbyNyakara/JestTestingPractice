const stringLength = require('./stringLength.js');

test("String character counter", () => {
  expect(stringLength("Abby")).toEqual(4);
})

// Test fails and throws an error
test("String character counter", () => {
  expect(stringLength("Abbycvxcvxcvv")).toBe(13);
})