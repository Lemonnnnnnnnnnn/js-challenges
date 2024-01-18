import { MyPromise } from ".."

export function MyPromiseAll<T>(promiseArr: MyPromise<T>[]) {
    return new MyPromise((resolve, reject) => {
        const resolveRes: T[] = []
        for (let promise of promiseArr) {
            promise.then(res => {
                resolveRes.push(res)
                if (resolveRes.length === promiseArr.length) {
                    resolve(resolveRes)
                }
            }).catch(e => {
                reject(e)
            })
        }
    })
}


