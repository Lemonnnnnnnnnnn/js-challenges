type Executor = (
  resolve: (value?: any) => void,
  reject: (reason?: any) => void
) => void;
type onFulfilled = (value: any) => any;
type onRejected = (value: any) => any;
type Status = "pending" | "fulfilled" | "rejected";

export class MyPromise {
  // 将下一层 resolve/reject 存储起来，用以将前一层的结果传给下一层了
  callback:
    | {
        onfulfilled?: onFulfilled;
        onrejected?: onRejected;
        nextResolve: (value?: any) => void;
        nextReject: (reason?: any) => void;
      }
    | undefined;

  status: Status;
  data: any;

  constructor(executor: Executor) {
    this.status = "pending";
    executor(this._resolve, this._reject);
  }

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

  catch = (onrejected: onRejected) => {
    return this.then(undefined, onrejected);
  };

  finally = () => {};

  _resolve = (data: any) => {
    if (this.status !== "pending") return;

    if (typeof data === "object" && typeof data?.then === "function") {
      data.then(this._resolve, this._reject);
      return;
    }

    this.status = "fulfilled";
    this.handle(data);
  };

  _reject = (error: any) => {
    if (this.status !== "pending") return;

    if (typeof error === "object" && typeof error?.then === "function") {
      error.then(this._resolve, this._reject);
      return;
    }

    this.status = "rejected";

    this.handle(error);
  };

  handle = (data: any) => {
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

    // 将无延迟的 Promise 放到下一个宏任务处理，这是为了让所有的 Promise 实例执行完 contruction 再调用 resolve
    setTimeout(fn, 0);
  };

  static all() {}

  static race() {}

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
