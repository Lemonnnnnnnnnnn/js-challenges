type Executor = (
  resolve: (value?: any) => void,
  reject: (reason?: any) => void
) => void;
type onFulfilled = (value: any) => any;
type onRejected = (value: any) => any;
type Status = "pending" | "fulfilled" | "rejected";

export class MyPromise {
  // 将下一层 resolve/reject 存储起来，用以将前一层的结果传给下一层了
  private callback:
    | {
        onfulfilled?: onFulfilled;
        onrejected?: onRejected;
        nextResolve: (value?: any) => void;
        nextReject: (reason?: any) => void;
      }
    | undefined;

  private status: Status;

  constructor(executor: Executor) {
    this.status = "pending";
    executor(this._resolve, this._reject);
  }

  // 注册回调事件
  then = (onfulfilled?: onFulfilled, onrejected?: onRejected) => {
    return new MyPromise((resolve, reject) => {
      this.callback = {
        onfulfilled,
        onrejected,
        nextReject: reject,
        nextResolve: resolve,
      };
    });
  };

  // 注册回调事件
  catch = (onrejected: onRejected) => {
    return this.then(undefined, onrejected);
  };

  // 注册回调事件
  finally = (onDone: () => void) => {
    this.then(onDone, onDone);
  };

  private _resolve = (data: any) => {
    if (this.status !== "pending") return;

    if (typeof data === "object" && typeof data?.then === "function") {
      data.then(this._resolve, this._reject);
      return;
    }

    this.status = "fulfilled";
    this.handle(data);
  };

  private _reject = (error: any) => {
    if (this.status !== "pending") return;

    if (typeof error === "object" && typeof error?.then === "function") {
      error.then(this._resolve, this._reject);
      return;
    }

    this.status = "rejected";

    this.handle(error);
  };

  // 执行回调函数并传递结果给下层Promise
  private handle = (data: any) => {
    const fn = () => {
      if (this.status === "pending") {
        return;
      }

      const cb =
        this.status === "fulfilled"
          ? this.callback?.onfulfilled
          : this.callback?.onrejected;

      const next =
        this.status === "fulfilled"
          ? this.callback?.nextResolve
          : this.callback?.nextReject;

      if (!cb) {
        next?.(data);
        return;
      }

      try {
        const res = cb?.(data);
        next?.(res);
      } catch (e) {
        this.callback?.nextReject(e);
      }
    };

    // 将无延迟的 Promise 放到下一个宏任务处理，这是为了让所有的 Promise 实例执行完 contruction 再调用 resolve/reject
    setTimeout(fn, 0);
  };

  static all<T>(promiseArr: MyPromise[]) {
    return new MyPromise((resolve, reject) => {
      const resolveRes: T[] = [];
      for (let promise of promiseArr) {
        promise
          .then((res) => {
            resolveRes.push(res);
            if (resolveRes.length === promiseArr.length) {
              resolve(resolveRes);
            }
          })
          .catch((e) => {
            reject(e);
          });
      }
    });
  }

  static race(promises: MyPromise[]) {
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

  static resolve(data: any) {
    return new MyPromise((resolve, reject) => {
      resolve(data);
    });
  }

  static reject(data: any) {
    return new MyPromise((resolve, reject) => {
      reject(data);
    });
  }
}
