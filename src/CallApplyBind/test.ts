import { call , apply, bind} from "./index.ts";

const context = {
  b: 2,
};

function foo(this: Record<string, number>, p1: string, p2: string) {
  this.a = 1;
  console.log(this.a);
  console.log(this.b);
  console.log(p2);
}

console.log("---call---");
call(foo, context, "hello", "world");
console.log("---apply---");
apply(foo,context ,["hello", "world"])
console.log("---bind---");
const nf = bind(foo , context , "hello")
nf("world")