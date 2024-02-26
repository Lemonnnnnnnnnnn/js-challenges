// ref: https://stackoverflow.com/questions/38740610/object-getprototypeof-vs-prototype

function MyConstructor() { }
let a = new MyConstructor();

test("prototype", () => {
    // 只能访问原型的 prototype 而不能访问实例的 prototype
    expect(a.prototype).toEqual(undefined)
    // 废弃属性，用 Object.getPrototypeOf 来替代，详情参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
    expect(a.__proto__).toEqual({})
    // 获取实例 a 的原型，即 MyConstructor.prototype
    expect(Object.getPrototypeOf(a)).toEqual(a.__proto__)

    expect(MyConstructor.prototype).toEqual(Object.getPrototypeOf(a))

    // [Function: MyConstructor] ，原型不是空的，它含有一个构造器方法 constructor 指向创建实例的函数
    expect(MyConstructor.prototype.constructor).toEqual(MyConstructor)
})


// ----------
// 给 MyConstructor 的原型上添加 func 方法
function MyConstructor2() { }
MyConstructor2.prototype.func = function () {
    return "func"
};
let b = new MyConstructor2();

test("prototype function", () => {
    // MyConstructor.func is not a function，不能直接调用原型上的方法
    // @ts-expect-error
    expect(MyConstructor.func).toBe(undefined);

    // 实例会继承原型链上的方法
    expect(b.func()).toBe("func")
})
