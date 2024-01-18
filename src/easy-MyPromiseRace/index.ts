import { MyPromise } from "../hard-MyPromise";

export function MyPromiseRace<T>(promises: MyPromise<T>[]) {
  return new MyPromise((resolve, reject) => {
    let hasValue = false;
    for (let promise of promises) {
      promise
        .then((res) => {
          if (hasValue) return;
          hasValue = true;
          resolve(res);
        })
        .catch((e) => {
          if (hasValue) return;
          hasValue = true;
          reject(e);
        });
    }
  });
}
