interface Node {
  id: number;
  text: string;
  parentId: number;
  children?: Node[];
}

export function treeToList(data?: Node[], res?: Node[]) {
  let _res = res || [];
  let _data = data || [];
  for (let node of _data) {
    treeToList(node.children, _res);
    delete node.children;
    _res.push(node);
  }
  return _res;
}
