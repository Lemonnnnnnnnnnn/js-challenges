import { MyPromise } from ".";

function testCase() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

function test() {
  testCase()
    .then((res) => {
      console.log("1", res);
      return (res as number) + 1;
    })
    .then((res) => {
      return new MyPromise((resolve, reject) => {
        resolve((res as number) + 1);
      });
    })
    .then((res) => {
      console.log("3", res);
    });
}

test();
