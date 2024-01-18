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
      console.log(res);
      return 2;
    })
    .then((res) => {
      console.log(res);
      return 3;
    })
    .then((res) => {
      console.log(res);
    });
}

test();
