import { getKey } from ".";

const obj = {
    a: {
        b: 123
    },
    arr: [
        {
            demo: 'demo'
        }
    ]
}

console.log(getKey(obj, 'a.b'));
console.log(getKey(obj, 'arr[0].demo'));