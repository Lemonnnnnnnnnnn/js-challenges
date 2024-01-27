// ref:https://github.com/Sunny-117/js-challenges/issues/151

export async function asyncPool(limit: number, dataSource: any[], iteratorFn: (data: any) => any) {
    const ret: any[] = []  // Promise任务
    const pool: any[] = []  // 并发队列

    for (let data of dataSource) {
        const p = Promise.resolve(iteratorFn(data)) // 统一Promise化
        ret.push(p)

        const _p: any = p.then(() => pool.splice(pool.indexOf(_p), 1)) // 任务完成将任务推出队列
        pool.push(_p) // 将任务放到并发队列中去

        if (pool.length > limit) { // 当任务数达到并发上限
            await Promise.race(pool) // 等待队列中的任务完成
        }
    }

    // 返回所有 Promise 任务的执行结果
    return Promise.all(ret)
}


