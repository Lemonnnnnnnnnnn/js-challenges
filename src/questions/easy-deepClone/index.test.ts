import { deepClone, deepClone2 } from ".";
import { test, expect } from "@jest/globals";

const source = {
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

const target = {
    a: 2,
    b: {
        c: "c2"
    },
    d: [
        {
            e: "e",
            f: [3]
        }
    ]
}

test("deepClone", () => {
    const clone = deepClone(source)
    clone['a'] = 2
    clone['b']['c'] = 'c2'
    clone['d'][0]['f']['0'] = 3

    expect(clone).toEqual(target)
})

test("deepClone2", () => {
    const clone = deepClone2(source)
    clone['a'] = 2
    clone['b']['c'] = 'c2'
    clone['d'][0]['f']['0'] = 3

    expect(clone).toEqual(target)
}) 