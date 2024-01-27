
export async function PromiseRetry<T>(fn: () => Promise<T>, retryTime: number, defaultValue?: any) {
    return new Promise((resolve, reject) => {
        fn().then(res => {
            resolve(res)
        }).catch((e) => {
            if (retryTime < 0) {
                if (defaultValue) {
                    resolve(defaultValue)
                } else {
                    reject(e)
                }
            } else {
                PromiseRetry(fn, retryTime - 1, defaultValue).then(res => {
                    resolve(res)
                }).catch(e => {
                    reject(e)
                })
            }
        })
    })
}