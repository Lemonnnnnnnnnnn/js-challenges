import { MyPromise } from '.'

function p1() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('p1')
        }, 1000)
    })
}

function p2() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('p2')
        }, 2000)
    })
}
function p3() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('p3')
        }, 3000)
    })
}

function e1() {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            reject('e1')
        }, 500)
    })
}


MyPromise.all([p1(), p2(), p3()]).then(res => {
  console.log(res);
})

MyPromise.all([p1(), p2(), p3(), e1()]).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
})
