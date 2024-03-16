export class Scheduler {
    max: number;
    count: number;
    queue: any[];

    constructor(max: number) {
        // 最大可并发任务数
        this.max = max;
        // 当前并发任务数
        this.count = 0;
        // 阻塞助手队列
        this.queue = [];
    }

    async add(fn: () => any) {
        if (this.count >= this.max) {
            // 调用 resolve 方法时，Promise 状态确定，await 阻塞取消
            await new Promise((resolve) => this.queue.push(resolve))
        }
        this.count++;

        const res = await fn();

        this.count--;

        // 调用 resolve 方法，取消阻塞
        this.queue.length && this.queue.shift()()

        return res;
    }
}