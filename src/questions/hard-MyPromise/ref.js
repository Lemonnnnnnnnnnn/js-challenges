function MyPromise(fn) {
  let state = "pending";
  let value = null;
  const callbacks = [];

  this.then = function (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      handle({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
    });
  };

  this.catch = function (onError) {
    return this.then(null, onError);
  };

  this.finally = function (onDone) {
    this.then(onDone, onError);
  };

  this.resolve = function (value) {
    if (value && value instanceof MyPromise) {
      return value;
    }
    if (
      value &&
      typeof value === "object" &&
      typeof value.then === "function"
    ) {
      const { then } = value;
      return new MyPromise((resolve) => {
        then(resolve);
      });
    }
    if (value) {
      return new MyPromise((resolve) => resolve(value));
    }
    return new MyPromise((resolve) => resolve());
  };

  this.reject = function (value) {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  };

  this.all = function (arr) {
    const args = Array.prototype.slice.call(arr);
    return new MyPromise((resolve, reject) => {
      if (args.length === 0) return resolve([]);
      let remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === "object" || typeof val === "function")) {
            const { then } = val;
            if (typeof then === "function") {
              then.call(
                val,
                (val) => {
                  res(i, val);
                },
                reject
              );
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }
      for (let i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  this.race = function (values) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  function handle(callback) {
    if (state === "pending") {
      callbacks.push(callback);
      return;
    }

    const cb =
      state === "fulfilled" ? callback.onFulfilled : callback.onRejected;
    const next = state === "fulfilled" ? callback.resolve : callback.reject;

    if (!cb) {
      next(value);
      return;
    }
    let ret;
    try {
      ret = cb(value);
    } catch (e) {
      callback.reject(e);
    }
    callback.resolve(ret);
  }
  function resolve(newValue) {
    const fn = () => {
      if (state !== "pending") return;

      if (
        newValue &&
        (typeof newValue === "object" || typeof newValue === "function")
      ) {
        const { then } = newValue;
        if (typeof then === "function") {
          // newValue 为新产生的 MyPromise,此时resolve为上个 promise 的resolve
          // 相当于调用了新产生 MyPromise 的then方法，注入了上个 promise 的resolve 为其回调
          then.call(newValue, resolve, reject);
          return;
        }
      }
      state = "fulfilled";
      value = newValue;
      handelCb();
    };

    setTimeout(fn, 0);
  }
  function reject(error) {
    const fn = () => {
      if (state !== "pending") return;

      if (error && (typeof error === "object" || typeof error === "function")) {
        const { then } = error;
        if (typeof then === "function") {
          then.call(error, resolve, reject);
          return;
        }
      }
      state = "rejected";
      value = error;
      handelCb();
    };
    setTimeout(fn, 0);
  }
  function handelCb() {
    while (callbacks.length) {
      const fn = callbacks.shift();
      handle(fn);
    }
  }
  try {
    fn(resolve, reject);
  } catch (ex) {
    reject(ex);
  }
}

// ---------------------------------

function testCase() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

testCase()
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        resolve(res + 1);
      }, 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      resolve(res + 1);
    });
  })
  .then((res) => {
    console.log(res);
  });
