const Quo = require("./constructor-invocation-pattern");

test("constructor-invocation-pattern.test", () => {
  /**
   * "new" 使函数 Quo 创建了一个新的对象 myQuo ，并且 Quo 中的 this 转而指向了新的对象 myQuo
   * 这种必然结合 new 使用的函数被称为 ”构造器函数“
   * 如果在调用这类函数时没有加上 new ，可能会发生非常糟糕的事，即没有编译时警告，也没有运行时警告。
   *
   * ---
   *
   * 可以看到 Javascript 语言精粹的作者对这种设计十分困惑，以至于他举例时使用了单词 confused
   */
  var myQuo = new Quo("confused");
  expect(myQuo.get_status()).toBe("confused");
});

test("constructor-invocation-pattern.test apply", () => {
  const statusObject = {
    status: "A-OK",
  };
  //   使用 apply 改变 this 指向
  expect(Quo.prototype.get_status.apply(statusObject)).toBe("A-OK");
});
