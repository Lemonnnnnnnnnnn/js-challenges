export class Queue {
    tasks: (() => PromiseLike<any>)[]

    constructor() {
        this.tasks = []
    }
    task(time: number, fn: Function) {
        
        this.tasks.push(() => new Promise((resolve) => {
            setTimeout(() => {
                resolve(fn())
            }, time)
        }))
        return this
    }

    async start() {
        for (let pFn of this.tasks) {
            await pFn()
        }
    }
}