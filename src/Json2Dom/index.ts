/**
 * @description
 * {
  tag: 'DIV',
  attrs:{
  id:'app'
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
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
 */


interface Json {
    tag: string;
    attrs?: Record<string, string>,
    children: Json[]
}

export function Json2Dom(json: Json): string {
    return resolve(json, 2)
}

function resolve(json: Json, indent: number): string {
    const tagName = json.tag.toLowerCase()
    let attrs = ''
    if (json.attrs) {
        attrs = " " + Object.entries(json.attrs).map(([key, value]) => `${key}="${value}"`).join(' ')
    }
    let childrenStr = ''
    let headerIndentStr = Array.from({ length: indent }).fill(" ").join('') 
    let tailIndentStr = ''
    if (json.children.length) {
        childrenStr = "\n" + json.children.map(child => resolve(child, indent + 2)).join("\n") + "\n"
        tailIndentStr = headerIndentStr
    }
    return `${headerIndentStr}<${tagName}${attrs}>${childrenStr}${tailIndentStr}</${tagName}>`

}