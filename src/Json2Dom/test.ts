import { Json2Dom } from "./index"

const json = {
    tag: 'DIV',
    attrs: {
        id: 'app'
    },
    children: [
        {
            tag: 'SPAN',
            children: [
                { tag: 'A', children: [] }
            ]
        },
        {
            tag: 'SPAN',
            children: [
                { tag: 'A', children: [] },
                { tag: 'A', children: [] }
            ]
        }
    ]
}

console.log(Json2Dom(json));
