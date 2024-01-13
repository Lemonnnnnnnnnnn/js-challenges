

export function call(
  f: Function,
  context: Record<string, any>,
  ...params: any[]
) {
  context.__fn = f;
  let res = context.__fn(...params);
  delete context.__fn;
  return res;
}

export function apply(
  f: Function,
  context: Record<string, any>,
  params: any[]
) {
  context.__fn = f;
  let res = context.__fn(...params);
  delete context.__fn;
  return res;
}

export function bind(
  f: Function,
  context: Record<string, any>,
  ...params: any[]
) {
  context.__fn = f;
  return (...p: any[]) => {
    return context.__fn(...params, ...p);
  };
}

// ---------------------------------------------------

/**
 * @知识回顾
 * - function的 this 指向调用者，默认指向window，可以通过 call,apply,bind改变
 * - 箭头函数的 this 指向容器的 this，不能改变
 */

// -------箭头函数-------

// let obj = {
//     say: () => {
//         this.a = 1
//         console.log(this); 
//     },
// }

// obj.say() // this指向执行时的上下文对象，即函数对象 { a: 1 }

// let obj = {
//     say: () => {
//         this.a = 1
//         console.log(this); 
//     },
// }

// obj.say() // this指向执行时的上下文对象，即函数对象 { a: 1 }
// obj.say.apply({}) // { a: 1 }
// obj.say.call({}) // { a: 1 }
// obj.say.bind({})() // { a: 1 }


// -------普通函数-------

// let obj = {
//     say: function () {
//         console.log(this);
//     },
// }

// obj.say() // this指向调用者obj对象，即{ say: [Function: say] }
// let obj = {
//     say: function () {
//         console.log(this);
//     },
// }

// obj.say() // { say: [Function: say] }
// obj.say.apply({}) // {}
// obj.say.call({}) // {}
// obj.say.bind({})() // {}

// -------混用----------

// let obj = {
//     name: "jay",
//     print: function () {
//         setTimeout(() => {
//             console.log(this.name)
//         }, 0);
//     }
// };

// `setTimeout` 中的箭头函数的this指向上下文，即函数 `print` 的this，函数`print` 是普通函数，this 指向调用者 `obj` ，因此箭头函数的 `this.name === obj.name === jay` .

// obj.print() // jay

// function fun() {
//     // setTimeout中使用箭头函数
//     setTimeout(() => {
//         console.log(this.id);
//     }, 2000)
// }

// fun.call({id: 'Obj'});     // 'Obj'

// 和上面的例子类似， `this` 指向函数 `fun` 的this ， 因为 `fun` 是普通函数，因此 `this` 指向可以被 `call` 修改为 `{id : 'Obj'}`. 因此 `this.id === {id: 'Obj'}.id === 'Obj'`.