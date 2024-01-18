// 使用 setTimeout 实现 setInterval

function setMyInterval(fn: () => void, time: number) {
  setTimeout(() => {
    fn();
    setMyInterval(fn, time);
  }, time);
}

function test() {
  console.log("test");
}

setMyInterval(test, 100);
