type Node = {
  onClick?: () => number;
};

export const myNodes = (function () {
  const nodes: Node[] = Array.from<Node>({ length: 5 }).map(() => ({}));
  let i: number;
  for (i = 0; i < nodes.length; i++) {
    // 真正调用时，闭包里的 i 已经走完了所有循环中的 i++
    nodes[i].onClick = function () {
      return i;
    };
  }
  return nodes;
})();

// for 循环中的 var i 总是同一个 i 实例
export const myNodes4 = (function () {
  const nodes: Node[] = Array.from<Node>({ length: 5 }).map(() => ({}));

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].onClick = function () {
      return i;
    };
  }
  return nodes;
})();

//  由 let i 初始化的 i 属性在 for 循环中的每一轮都会创造不同的 i 实例，但这一行为是由 for 决定的而非 let。 ref: https://stackoverflow.com/questions/59170277/javascript-understanding-let-scope-inside-for-loop
//  let 作用在块级作用域下， for 循环的 {} 就是一个块级作用域。而 var 是一个函数级作用域，即函数 myNodes5 下是其作用域
export const myNodes5 = (function () {
  const nodes: Node[] = Array.from<Node>({ length: 5 }).map(() => ({}));

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onClick = function () {
      return i;
    };
  }
  return nodes;
})();


export const myNodes2 = (function () {
  // 问题出在 nodes 数组的填充方式上。你使用了 fill({}) 来填充数组，这会导致数组中的每个元素引用同一个对象 {}
  const nodes: Node[] = Array.from<Node>({ length: 5 }).fill({});

  // 利用闭包保存每一个节点的序列号
  const helper = function (num: number) {
    return function () {
      return num;
    };
  };

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onClick = helper(i);
  }
  return nodes;
})();

export const myNodes3 = (function () {
  const nodes: Node[] = Array.from<Node>({ length: 5 }).map(() => ({}));

  // 利用闭包保存每一个节点的序列号
  const helper = function (num: number) {
    return function () {
      return num;
    };
  };

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onClick = helper(i);
  }
  return nodes;
})();
