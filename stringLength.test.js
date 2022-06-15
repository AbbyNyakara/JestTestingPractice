const stringLength = require('./stringLength.js');

test("String character counter", () => {
  expect(stringLength("Abbycvxcvxcvv")).toBe(13);
})