import { memorize } from ".";
import { test, expect } from "@jest/globals";

test("fibonacci", () => {
  // 数组 0 位置不使用
  const fib = memorize([0, 1], (recur, n) => {
    if (n <= 2) return 1;
    return recur(n - 1) + recur(n - 2);
  });

  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(5)).toBe(5);
  expect(fib(6)).toBe(8);
});

test("factorial", () => {
  // 数组 0 位置不使用
  const fac = memorize([0, 1], (recur, n) => {
    return n * recur(n - 1);
  });

  expect(fac(1)).toBe(1)
  expect(fac(2)).toBe(2)
  expect(fac(3)).toBe(6)
  expect(fac(4)).toBe(24)
  expect(fac(5)).toBe(120)
});
