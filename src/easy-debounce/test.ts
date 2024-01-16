import { debounce } from ".";

function test(name: string){
    console.log(name);
}

const debounceTest = debounce(test , 500)

debounceTest("li")
debounceTest("zhang")
setTimeout(()=>{
    debounceTest("huang")
},400)