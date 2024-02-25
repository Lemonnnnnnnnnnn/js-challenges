const myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === "number" ? inc : 1;
  },
};

module.exports = myObject