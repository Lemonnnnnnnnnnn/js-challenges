type Reqfn<T> = (data?: any) => PromiseLike<T>;

async function chainPromise<T>(reqArr: Reqfn<T>[], data?: any) {
  const req = reqArr.shift();
  if (req) {
    const res = await req(data);
    return chainPromise(reqArr, res);
  } else {
    return data;
  }
}

async function req1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("req1");
    }, 1000);
  });
}
async function req2(data: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + "~");
    }, 1000);
  });
}
async function req3(data: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data + "~");
    }, 1000);
  });
}

chainPromise([req1, req2, req3]).then((res) => {
  console.log(res);
});
