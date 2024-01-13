import { map } from ".";

const arr = [
    {
        name: "li",
        age: 18
    },
    {
        name: "yang",
        age: 20
    },
]

const res = map(arr, (item, key) => {
    return `name:${item.name} - age:${item.age} - key:${key}\n`
})
console.log(res);
