import { MyPromise } from ".";

new MyPromise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1);
    },1000)
})
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("over!");
  });
