import { MyPromise } from ".";

function test() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 2000);
  });
}

// function test2(){
//     return new Promise((resolve , reject) => {
//         setTimeout(()=>{
//             resolve(1)
//         },2000)
//     })
// }

test()
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

// test()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// test2().then(res => {
//     console.log(res);
// })
