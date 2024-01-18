import { MyPromise } from ".";

function testCase() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 2000);
  });
}

function test() {
  testCase().catch((e) => {
    console.log(e);
  });
}

test()