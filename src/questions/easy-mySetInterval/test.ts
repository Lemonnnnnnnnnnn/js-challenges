import { mySetInterval } from "."


let clear = mySetInterval(() => {
    console.log(1)
}, 1000, 500)

setTimeout(()=>{
    clear()
},5000)