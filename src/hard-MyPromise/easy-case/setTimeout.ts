// 我们能反过来使用 setinterval 模拟实现 settimeout 吗？

function setMyTimeout(fn: () => void, time: number) {
  let timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time);
}

setMyTimeout(() => {
  console.log(111);
}, 2000);
