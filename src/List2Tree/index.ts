// export function getTreeList(rootList, id, list) {

// }

interface Node {
    id: number;
    name: string;
    pid: number;
    children?: Node[]
}

export function getTreeList(rootList: Node[]) {
    const res: Node[] = []
    for (let node of rootList) {
        if (node.pid === 0) {
            node.children = []
            res.push(node)
        } else {
            const parent = searchP(node.pid, res)
            if (parent) {
                if (!parent.children) {
                    parent.children = []
                }
                parent.children.push(node)
            }
        }
    }
    return res;
}

function searchP(pid: number, resList?: Node[]): Node | undefined {
    if (!resList) return undefined
    const target = resList.find(node => node.id === pid)
    if (target) {
        return target
    }
    for (let node of resList) {
        let t = searchP(pid, node.children)
        if (t) {
            return t
        }
    }
    return undefined
}
