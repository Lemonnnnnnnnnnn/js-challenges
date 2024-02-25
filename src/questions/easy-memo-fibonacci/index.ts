export function fibonacci(num: number) {
  const memo = [1, 1];

  function fib(n: number): number {
    if (n <= memo.length) {
      return memo[n - 1];
    } else {
      const value = fib(n - 1) + fib(n - 2);
      memo[n - 1] = value;
      //   memo.push(value);
      return value;
    }
  }

  return fib(num);
}
