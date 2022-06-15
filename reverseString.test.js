const reverseString = require('./reverseString.js');

test("string reverses", () => {
  expect(reverseString("Abby")).toEqual("ybba");
})