type Executor<T> = (
  resolve: (value: T) => void,
  reject: (reason?: any) => void
) => void;
type onFulfilled<T> = (value: T) => typeof MyPromise | undefined | void;
type onRejected = (value: any) => typeof MyPromise | undefined | void;

export class MyPromise<T> {
  callback: Executor<T>;
  onfulfilled: onFulfilled<T> | undefined;
  onrejected: onRejected | undefined;

  constructor(executor: Executor<T>) {
    this.callback = executor;
  }

  static all() {}

  static race() {}

  static resolve() {}

  static reject() {}

  _resolve = (data: T) =>  {
    if (this.onfulfilled) {
      this.onfulfilled(data);
    }
  }

  _reject = (error: any) => {
    if (this.onrejected) {
      this.onrejected(error);
    }
  }

  then = (onfulfilled: onFulfilled<T>) => {
    this.onfulfilled = onfulfilled;
    this.callback(this._resolve, this._reject);
  }
  catch = (onrejected: onRejected) => {
    this.onrejected = onrejected;
    this.callback(this._resolve, this._reject);
  }
  finally  = () => {
    
  }
}
