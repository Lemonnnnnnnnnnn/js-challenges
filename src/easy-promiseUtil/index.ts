// export function promiseUtil<T>(promise: Promise<T>) {
//     return new Promise((resolve, reject) => {
//         promise.then(res => {
//             resolve(res)
//         }).catch(e => {
//             reject(e)
//         })
//         setTimeout(() => {
//             reject("timeout")
//         }, 1000)
//     })
// }

import { MyPromiseRace } from "../easy-MyPromiseRace"

export function promiseUtil<T>(promise: Promise<T>) {
    return MyPromiseRace([promise, new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("timeout")
        }, 1000)
    })])
}
