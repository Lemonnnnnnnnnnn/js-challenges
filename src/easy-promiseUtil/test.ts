import { promiseUtil } from ".";

function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

promiseUtil(test())
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
