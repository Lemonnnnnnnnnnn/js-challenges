
export class EventEmiter {
    map: Map<string, Function[]>
    constructor() {
        this.map = new Map()
    }
    on(event: string, callback: Function) {
        const queue = this.map.get(event) || []
        queue.push(callback)
        this.map.set(event, queue)
    }
    off(event: string, callback?: Function) {
        if (!callback) {
            this.map.delete(event)
            return
        }
        const queue = this.map.get(event)
        if (queue) {
            const i = queue.findIndex(q => q === callback)
            queue.splice(i, 1)
            this.map.set(event, queue)
        }
    }
    emit(event: string, ...params: any[]) {
        const queue = this.map.get(event) || []
        for(let q of queue) { 
            q(...params)
        }
    }
}