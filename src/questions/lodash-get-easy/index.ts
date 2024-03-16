export function getKey(obj: Record<string, any>, str: string) {
    const strArr = str.split('.')
    return get(obj, strArr)
}

function get(obj: Record<string, any> | any, strArr: string[]) {
    const first = strArr.shift()
    if (!first) {
        return obj
    }

    const reg = new RegExp(/[\d]+/)
    if (reg.test(first)) {
        const matchRes = first.match(/(.+)\[(\d+)\]/)
        const objKey = matchRes?.[1]
        const arrKey = matchRes?.[2]
        if (objKey && arrKey) {
            return get(obj[objKey][arrKey], strArr)
        }
    }

    return get(obj[first], strArr)
}