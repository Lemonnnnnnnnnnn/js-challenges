// 递归解法
export async function asyncPool<T>(limit: number, dataSource: any[], iteratorFn: (data: any) => Promise<T>) {
    let index = 0;
    let ret: any[] = []

    return new Promise((resolve) => {
        const dispatch = () => {
            const data = dataSource[index]
            const p = Promise.resolve(iteratorFn(data)) 

            p.then(res => {
                if(res) { 
                    ret.push(res)
                }

                if (ret.length === dataSource.length) {
                    resolve(ret)
                }

                if (index < dataSource.length) {
                    index++;
                    dispatch()
                }
            })
        }

        for (let i = 0; i < limit; i++) {
            dispatch()
        }
    })

}


