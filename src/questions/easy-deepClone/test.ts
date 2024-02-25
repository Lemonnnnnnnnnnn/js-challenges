import { deepClone, deepClone2 } from "."
const testCase = {
    a: 1,
    b: {
        c: "c",
    },
    d: [
        {
            e: "e",
            f: [2]
        }
    ]
}

const clone = deepClone2(testCase)
clone['a'] = 2
clone['b']['c'] = 'c2'
clone['d'][0]['f']['0'] = 3

console.dir(testCase, { depth: null });
console.dir(clone, { depth: null });


