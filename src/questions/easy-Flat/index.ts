type NestNumber = number | NestNumber[]

export function flat(array: NestNumber, depth: number, res?: NestNumber[]) {
    if (!res) {
        res = []
    }
    if (depth === -1) {
        res.push(array)
        return
    }

    if (Array.isArray(array)) {
        for (let a of array) {
            flat(a, depth - 1, res)
        }
    } else {
        res.push(array)
    }

    return res
}



