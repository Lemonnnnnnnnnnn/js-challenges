Function.prototype.new = function () {
  // 创建一个新对象，继承于函数的原型链上，this指 Function
  // 创建后返回这个新对象的实例，新对象与 Function 区分，命名为 that
  const that = Object.create(this.prototype);

  // 执行函数，并将 this 绑定到新对象上
  const entity = this.apply(that, arguments);

  //  如果函数未指定返回对象，则返回创建的新对象
  return (typeof entity === "object" && entity) || that;
};

function Student(age) {
  this.age = age;
}

Student.prototype.get_age = function () {
  return this.age;
};

test("myNew", () => {
  const student = Student.new(18);
  expect(Student.age).toBe(undefined);
  expect(student.age).toBe(18);
  expect(student.get_age()).toBe(18);
});
