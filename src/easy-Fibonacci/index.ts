export function fib(n: number): number {
    if (n === 1 || n === 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

export function* fibG() {
    let pre = 1;
    let next = 1;
    let tmp;
    yield pre
    yield next

    while (true) {
        yield pre + next;
        tmp = next;
        next = pre + next;
        pre = tmp;
    }
}