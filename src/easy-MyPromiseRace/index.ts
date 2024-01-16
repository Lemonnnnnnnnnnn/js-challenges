export function MyPromiseRace<T>(promises: Promise<T>[]) {
    return new Promise((resolve, reject) => {
        for (let promise of promises) {
            promise.then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        }
    })
}