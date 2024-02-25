export const myObject = (function () {
  // 私有变量
  let value = 0;

  return {
    increment: function (inc?: number) {
      value += inc || 1;
      return this
    },
    getValue: function () {
      return value;
    },
  };
}());
