export function deepClone<T extends Record<string, any> | any[]>(source: T): T {
    return JSON.parse(JSON.stringify(source))
}

export function deepClone2<T extends Record<string, any | any[]>>(source: T): T {
    if (Array.isArray(source)) {
        let res = []
        for (let item of source) {
            if (typeof item === 'object') {
                res.push(deepClone2(item))
            } else {
                res.push(item)
            }
        }

        return res as unknown as T
    } else {
        let res: Record<string, any> = {}

        Object.entries(source).forEach(([key, value]) => {
            if (typeof value === "object") {
                res[key] = deepClone2(value)
            } else {
                res[key] = value
            }
        })

        return res as T
    }

}