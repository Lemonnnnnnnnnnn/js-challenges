import { MyPromise } from ".";

MyPromise.resolve(1).then((res) => {
  console.log(res);
});

MyPromise.reject(2).catch(e=> {
  console.log(e);
})