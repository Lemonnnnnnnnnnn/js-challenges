function Parent() {}

Parent.prototype.getName = function () {
  return this.name;
};

function Son(name, age) {
  this.name = name;
  this.age = age;
}

// 将Son的原型类型设置为 Parent 的原型类型
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

console.log(son.getAge());
console.log(son.getName());
