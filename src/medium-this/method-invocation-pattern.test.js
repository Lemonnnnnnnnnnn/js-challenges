const myObject = require("./method-invocation-pattern")

test("method-invocation-pattern.test increment", () => {
  myObject.increment();
  expect(myObject.value).toBe(1);
  myObject.increment(2);
  expect(myObject.value).toBe(3);
});
