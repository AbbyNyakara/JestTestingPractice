const capitalize = require('./capitalize.js')

test("The first letter to be uppercase", () => {
  expect(capitalize("alia")).toEqual("Alia");
});