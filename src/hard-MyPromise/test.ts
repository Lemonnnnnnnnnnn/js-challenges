import { MyPromise } from ".";

function test(){
    return new MyPromise((resolve , reject) => {
        setTimeout(()=>{
            resolve(1)
        },2000)
    })
}

function test2(){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            resolve(1)
        },2000)
    })
}

test().then(res => {
    console.log(res);
})

test2().then(res => {
    console.log(res);
})
