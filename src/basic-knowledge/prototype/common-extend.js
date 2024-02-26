// Mammal 哺乳动物
const Mammal = function (name) {
  this.name = name;
};

Mammal.prototype.get_name = function () {
  return this.name;
};

Mammal.prototype.says = function () {
  return this.saying || "";
};

var Cat = function (name) {
  this.name = name;
  this.saying = "meow";
};

// 实现继承，替换 Cat.prototype 为一个新的 Mammal 实例
Cat.prototype = new Mammal();

// purr: 咕噜声。从英文翻译而来-咕噜声或呼呼声是某些猫科动物发出的音调颤动的声音，包括较大的户外猫和家猫，以及两种猫科动物
Cat.prototype.purr = function (n) {
  var i,
    s = "";
  for (i = 0; i < n; i++) {
    if (s) {
      s += "-";
    }
    s += "r";
  }
  return s;
};

Cat.prototype.get_name = function () {
  return this.says() + " " + this.name + " " + this.says();
};

module.exports = {
  Mammal,
  Cat,
};
