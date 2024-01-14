type Executor<T> = (resolve: (value: T) => void, reject: (reason?: any) => void) => void;
type onFulfilled<T> = (value : T) => typeof MyPromise | undefined | void

export class MyPromise<T> {
  constructor(executor: Executor<T>) {
    // this.callback = 
  }
  static all() {}

  static race() {}

  static resolve() {}

  static reject() {}
  then(onfulfilled : onFulfilled<T>) {

  }
  catch() {}
  finally() {}
}
