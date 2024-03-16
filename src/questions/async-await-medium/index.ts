export function asyncRunner<T>(generator: () => IterableIterator<Promise<T>>) {
    const g = generator()

    let gResult = g.next();

    helper(g, gResult)

    function helper<T>(g: IterableIterator<Promise<T>>, gResult: IteratorResult<Promise<T>, any>) {
        if (gResult.done) return
        gResult.value.then(res => {
            helper(g, g.next(res as any))
        })
    }
}