// ref: https://stackoverflow.com/questions/38740610/object-getprototypeof-vs-prototype

function MyConstructor() {}
let a = new MyConstructor();

console.log(a.prototype); // undefined ， prototype 是原型上的属性

console.log(a.__proto__); // {}  废弃属性，用 Object.getPrototypeOf 来替代，详情参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
console.log(Object.getPrototypeOf(a)); // {}， 获取实例 a 的原型，即 MyConstructor.prototype
console.log(MyConstructor.prototype); // {} ，
console.log(Object.getPrototypeOf(a) === MyConstructor.prototype); // true

console.log(MyConstructor.prototype.constructor); // [Function: MyConstructor] ，原型不是空的，它含有一个构造器方法 constructor 指向创建实例的函数
console.log(MyConstructor.prototype.constructor === MyConstructor); // true

// ----------
// 给 MyConstructor 的原型上添加 func 方法
MyConstructor.prototype.func = function () {
  console.log("func");
};

a = new MyConstructor();

console.log(MyConstructor.prototype); // { func: [Function (anonymous)] }，
try {
  MyConstructor.func(); // MyConstructor.func is not a function，不能直接调用原型上的方法
} catch (e) {}
a.func(); // func，实例会继承原型链上的方法
