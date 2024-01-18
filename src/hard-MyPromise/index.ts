type Executor<T> = (
  resolve: (value: T) => void,
  reject: (reason?: any) => void
) => void;
type onFulfilled<T> = (value: T) => any;
type onRejected = (value: any) => any;
type Status = "pending" | "fulfilled" | "rejected";

export class MyPromise<T> {
  // 将下一层 resolve/reject 存储起来，这样就可以将前一层的结果传给下一层了
  callback:
    | {
        onfulfilled?: onFulfilled<T>;
        onrejected?: onRejected;
        nextResolve: (value: T) => void;
        nextReject: (reason?: any) => void;
      }
    | undefined;

  status: Status;
  data: any;

  constructor(executor: Executor<T>) {
    this.status = "pending";
    executor(this._resolve, this._reject);
  }

  static all() {}

  static race() {}

  static resolve() {}

  static reject() {}

  _resolve = (data: T) => {
    if (this.status !== "pending") return;
    this.status = "fulfilled";
    this.data = data;

    this.handle();
  };

  _reject = (error: any) => {
    if (this.status !== "pending") return;
    this.status = "rejected";
    this.data = error;

    this.handle();
  };

  handle = () => {
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
      next?.(this.data);
      return;
    }

    const res = cb?.(this.data);
    next?.(res);
  };

  then = (onfulfilled?: onFulfilled<T>, onrejected?: onRejected) => {
    return new Promise((resolve, reject) => {
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
}
