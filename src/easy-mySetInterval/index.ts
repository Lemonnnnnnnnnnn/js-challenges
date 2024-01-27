// 写一个 mySetInterVal(fn, a, b)，每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
export function mySetInterval(fn: Function, a: number, b: number) {
    let clear = false;

    const execute = (fn: Function, a: number, b: number) => {
        if (clear) {
            return
        }

        setTimeout(() => {
            fn()
            execute(fn, a + b, b)
        }, a)
    }

    execute(fn, a, b)

    return () => {
        clear = true
    }
}

