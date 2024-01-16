let timer: number | null

export function throttle(fn: Function, wait: number) {
    return function (...params: any[]) {
        if (timer) return

        timer = setTimeout(() => {
            fn(...params)
            timer = null
        }, wait)
    }
} 