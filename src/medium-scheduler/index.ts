export class Scheduler {
    max: number;
    queue: any[]; // 正在执行的并行任务
    lock: boolean

    constructor(max: number) {
        this.max = max;
        this.queue = []
        this.lock = false;
    }

    async add(fn: Function) {
        if (this.lock) {
            setTimeout(() => {
                this.add(fn)
            }, 50)
            return
        }
        this.lock = true;

        if (this.queue.length >= this.max) {
            await Promise.race(this.queue)
        }

        const p = Promise.resolve(fn())

        const _p: any = p.then(() => this.queue.splice(this.queue.indexOf(_p), 1))
        this.queue.push(_p)

        this.lock = false;
    }
}

