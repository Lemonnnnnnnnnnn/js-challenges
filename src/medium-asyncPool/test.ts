import { asyncPool } from "."

const dataSouce = [1, 2, 3]
function iteratorFn(time: any) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(time)
        }, time * 1000)
    })
}
function iteratorFn2(time: any) {
    return time
}

asyncPool(1, dataSouce, iteratorFn).then(res => {
    console.log(res);
})

asyncPool(1, dataSouce, iteratorFn2).then(res => {
    console.log(res);
})
