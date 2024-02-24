const myObject = require("./function-invocation-pattern")

test("function-invocation-pattern.test double" , () => { 
    myObject.double(1);
    expect(myObject.value).toBe(2)
})

test("function-invocation-pattern.test double2" , () => { 
    myObject.double2(2);
    // 还是上一个测试的值2，本应是 2 + (2 * 2) = 6
    expect(myObject.value).toBe(2)
})