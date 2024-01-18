type Executor<T> = (
  resolve: (value: T) => void,
  reject: (reason?: any) => void
) => void;
type onFulfilled<T> = (value: T) => any;
type onRejected = (value: any) => any;
type Status = "pending" | "fulfilled" | "rejected";

export class MyPromise<T> {
  // 将下一层 resolve 存储起来，这样就可以将 onfulfilled 的结果传给下一层 nextResolve 了
  onfulfilled:
    | {
        method: onFulfilled<T>;
        nextResolve: (value: T) => void;
      }
    | undefined;
  onrejected: onRejected | undefined;
  status: Status;

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
    this.status = "fulfilled"
    if (this.onfulfilled) {
      const res = this.onfulfilled.method(data);
      this.onfulfilled.nextResolve(res);
    }
  };

  _reject = (error: any) => {
    if (this.status !== "pending") return;
    this.status = "rejected"

    if (this.onrejected) {
      this.onrejected(error);
    }
  };

  then = (onfulfilled: onFulfilled<T>) => {
    return new Promise((resolve, reject) => {
      this.onfulfilled = {
        method: onfulfilled,
        nextResolve: resolve,
      };
    });
  };

  catch = (onrejected: onRejected) => {
    this.onrejected = onrejected;
  };

  finally = () => {};
}
