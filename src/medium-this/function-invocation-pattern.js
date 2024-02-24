const myObject = {
  value: 0,
};

function add(a, b) {
  return a + b;
}

myObject.double = function (a) {
  var that = this;
  var helper = function () {
    that.value = add(a, a);
  };
  helper();
};

myObject.double2 = function (a) {
  var helper = function () {
    this.value = add(a, a);
  };
  // 直接调用，this指向global
  helper();
};

module.exports = myObject;
