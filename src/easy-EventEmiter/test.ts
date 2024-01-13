import { EventEmiter } from "."

let eventsBus = new EventEmiter()
let fn1 = function (name: string, age: string) {
  console.log(name, age)
}
let fn2 = function (name: string, age: string) {
  console.log('fn', name, age);
}
eventsBus.on("test", fn1)
eventsBus.on("test", fn2)
eventsBus.emit("test", "Jason", 18)
//Jason 18
//fn Jason 18