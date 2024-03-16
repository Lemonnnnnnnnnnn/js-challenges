import { throttle } from ".";


function test(name: string) {
    console.log(name);
}

const throttleTest = throttle(test, 500)

throttleTest("li")
throttleTest("zhang")
setTimeout(() => {
    throttleTest("huang")
}, 400)
setTimeout(() => {
    throttleTest("sun")
}, 1000)