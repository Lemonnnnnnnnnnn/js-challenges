export function map<T extends any[], U extends (item: T[number], index: number) => any>(array: T, callback: U): Array<ReturnType<U>> {
    const res = []
    for (let i = 0; i < array.length; i++) {
        res.push(callback(array[i], i))
    }
    return res
}