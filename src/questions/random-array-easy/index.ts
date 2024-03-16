export function randomArray(len: number, min: number, max: number) {
    const res = Array.from({ length: len }).fill(-1)

    // res内的是数字 - 非引用数据类型，在 forEach 的 callback 函数中， item 作为非引用数据类型会被拷贝一份，因此直接修改 item 不会改变原数组
    // res.forEach(item => item = Math.random())

    res.forEach((item, index, array) => {
        let value = getRandomNumber(min, max)
        while (array.indexOf(value) !== -1) {
            value = getRandomNumber(min, max)
        }
        array[index] = value
    })

    return res
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min))
}