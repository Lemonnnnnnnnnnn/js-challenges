import { flat } from "."
const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]


console.log(flat(arr, 2))