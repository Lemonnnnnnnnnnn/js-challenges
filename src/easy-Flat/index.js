const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
Array.prototype.flat = function (deep = 1) {
  let res = [];

  for (let a of this) {
    if (Array.isArray(a)) {
      if (deep <= 0) {
        res.push(a);
      } else {
        const sub = a.flat(deep - 1)
        res = res.concat(sub);
      }
    } else {
      res.push(a);
    }
  }
  return res;
};
console.dir(arr.flat(1) );
