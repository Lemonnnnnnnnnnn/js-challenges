import { randomArray } from ".";
import { expect, test } from "@jest/globals";

test("no overlay array", () => {
    const num = 50, min = 50, max = 100
    const arr = randomArray(num, min, max)

    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toBeLessThanOrEqual(max)
        expect(arr[i]).toBeGreaterThanOrEqual(min)
        for (let j = i + 1; j < arr.length; j++) {
            expect(arr[i]).not.toEqual(arr[j])
        }
    }
})