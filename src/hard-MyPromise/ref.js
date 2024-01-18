function MyPromise(fn) {
  let state = "pending";
  let value = null;
  const callbacks = [];

  this.then = function (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      callbacks.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
    });
  };

  this.catch = function (onError) {
    this.then(null, onError);
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
    const ret = cb(value);
    next(ret);
  }
  function resolve(newValue) {
    const fn = () => {
      if (state !== "pending") return;
      state = "fulfilled";
      value = newValue;
      handelCb();
    };

    setTimeout(fn, 0);
  }
  function reject(error) {
    const fn = () => {
      if (state !== "pending") return;
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
  fn(resolve, reject);
}

// ---------------------------------

function testCase() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 2000);
  });
}

testCase()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
