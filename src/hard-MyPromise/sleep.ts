import { MyPromise } from ".";

function sleep(time: number) {
  return new MyPromise((resolve, reject) => {
    console.log('sleep...');
    setTimeout(() => {
      resolve(1);
    }, time);
  });
}

async function test(){
    await sleep(2000)
    console.log(111);
}

test()
