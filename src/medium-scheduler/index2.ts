export class Scheduler {
    max: number;
    queue: (() => PromiseLike<any>)[];
    running: number;
    timer: number | undefined;


    constructor(max: number) {
        this.max = max;
        this.queue = []
        this.running = 0;
        setTimeout(()=>{
            this.execute()
        },1000)
    }

    async add(fn: () => PromiseLike<any>) {
        this.queue.push(fn)
    }


    execute() {
        this.timer = setInterval(() => {
            if (this.running >= this.max) {
                return
            }

            const task = this.queue.shift();
            if (!task) {
                clearInterval(this.timer)
                return
            }

            this.running += 1;
            task().then(() => {
                this.running -= 1;
            })
        })
    }
}