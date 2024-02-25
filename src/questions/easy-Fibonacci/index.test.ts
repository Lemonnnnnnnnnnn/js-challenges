import { fib , fibG } from ".";
import { describe, expect, test } from '@jest/globals';

describe('fib module', () => {
    test('fib(3)', () => {
      expect(fib(3)).toBe(2);
    });
});

describe('fib generate' , () => { 
    const g = fibG()

    test('fibG' , () => { 
        expect(g.next().value).toBe(1)
        expect(g.next().value).toBe(1)
        expect(g.next().value).toBe(2)
        expect(g.next().value).toBe(3)
        expect(g.next().value).toBe(5)
    })
})
