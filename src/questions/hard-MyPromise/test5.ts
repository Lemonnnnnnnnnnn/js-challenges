import { MyPromise } from ".";

function testCase() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

testCase()
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(res + 1);
      }, 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      resolve(res + 1);
    });
  })
  .then((res) => {
    console.log(res);
  });
