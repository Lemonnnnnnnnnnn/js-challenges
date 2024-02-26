function Parent() {}

Parent.prototype.getName = function () {
  return this.name;
};

function Son(name, age) {
  this.name = name;
  this.age = age;
}

// 将Son的原型类型设置为 Parent 的原型类型
// 在计算机学中，反射式编程或反射(Reflect)，是指计算机程序在运行时可以访问、检测和修改它本身状态或行为的一种能力。用比喻来说，反射就是程序在运行的时候能够“观察”并且修改自己的行为。 
Reflect.setPrototypeOf(Son.prototype, Parent.prototype);
// Object.setPrototypeOf(Son.prototype , Parent.prototype)

// setPrototype 等于手动修改__proto__
// Reflect.setPrototype = function(obj, proto) {
//     obj.__proto__ = proto;
//     return obj
// }


// 给原型加上新方法
Son.prototype.getAge = function () {
  return this.age;
};

const son = new Son("liming", 20);

test("reflect extends" , () => { 
  expect(Son.getAge).toBe(undefined)
  expect(Son.getName).toBe(undefined)
  expect(son.getAge()).toBe(20)
  expect(son.getName()).toBe("liming")
})
