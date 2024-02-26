const { Cat, Mammal } = require("./common-extend");

test("Mammal", () => {
  const myMammal = new Mammal("my Mammal");
  expect(Mammal.get_name).toBe(undefined);
  expect(myMammal.get_name()).toBe("my Mammal");
});

test("Cat", () => {
  const myCat = new Cat("xiaohua");
  expect(Cat.says).toBe(undefined);
  expect(Cat.purr).toBe(undefined);
  expect(Cat.get_name).toBe(undefined);
  expect(myCat.says()).toBe("meow");
  expect(myCat.purr(5)).toBe("r-r-r-r-r");
  expect(myCat.get_name()).toBe("meow xiaohua meow");
});
