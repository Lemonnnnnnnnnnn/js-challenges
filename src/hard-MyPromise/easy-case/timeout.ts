import { MyPromise } from "..";

export function timeout(promise: MyPromise) {
  MyPromise.race([
    promise,
    new MyPromise((resolve, reject) => {
      setTimeout(() => {
        reject("timeout");
      }, 1000);
    }),
  ])
    .then((res) => {
      console.log("结果：", res);
    })
    .catch((e) => {
      console.log("超时：", e);
    });
}

function test() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

timeout(test());
