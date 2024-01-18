// 使用 setTimeout 实现 setInterval

function setInterval(fn: () => void, time: number) {
  setTimeout(() => {
    fn();
    setInterval(fn, time);
  }, time);
}

function test() {
  console.log("test");
}

setInterval(test, 100);
