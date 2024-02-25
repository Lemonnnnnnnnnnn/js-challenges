let timer: number | null | NodeJS.Timeout;

export function debounce<T extends (...p: any[]) => any>(fn: T, time: number) {
  return function (...params: any[]) {
    return new Promise<ReturnType<T>>((resolve) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      timer = setTimeout(() => {
        resolve(fn(...params));
      }, time);
    });
  };
}
