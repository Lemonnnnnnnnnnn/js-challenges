import { MyPromise } from ".";

function testCase() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 2000);
  });
}

testCase()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
