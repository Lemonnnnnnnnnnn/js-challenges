// 执行 fn timer次，每次延迟wait

export function repeat(fn: Function, timer: number, wait: number) {
  if (timer <= 0) return
  fn()
  setTimeout(() => {
    repeat(fn, timer - 1, wait);
  }, wait);
}


