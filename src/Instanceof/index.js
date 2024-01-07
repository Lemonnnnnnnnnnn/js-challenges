/**
 * @基本思路
 * - 根据 Object.getPrototypeOf 可以拿到对象的原型，根据 Object.prototype 可以拿到构造函数的原型（function Perrson(){} 使一个构造函数）
 * - 不断通过 Object.getPrototypeOf 从 left 的原型链向上查找，如果找到 right(构造函数) 的原型，则返回true
 */
function myInstanceof(left, right) {
  let lProto = Object.getPrototypeOf(left);
  let RProto = right.prototype;
  while (true) {
    if (!lProto) return false;
    if (lProto === RProto) return true;
    lProto = Object.getPrototypeOf(lProto);
  }
}

function Person() {}
class Student { 

}
var p = new Person();
var s = new Student();
console.log(myInstanceof(p, Object));
console.log(myInstanceof(s, Student));
console.log(myInstanceof(s, Person));
