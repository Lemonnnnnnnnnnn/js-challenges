import { asyncRunner } from ".";

function getData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fakeData")
        }, 2000)
    })
}

function getMsg(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fakeMsg")
        }, 2000)
    })
}


function* mainFn(): IterableIterator<Promise<string>> {
    const res = yield getData()
    console.log(res);
    const msg = yield getMsg()
    console.log(msg)
}

asyncRunner(mainFn)