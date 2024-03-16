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
    throw new Error(res);
  })
  .catch((e) => {
    console.log({ e });
  });
