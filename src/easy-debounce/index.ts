let timer: number | null

export function debounce(fn: Function, time: number) {
    return function (...params: any[]) {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn(...params)
        }, time)
    }
}