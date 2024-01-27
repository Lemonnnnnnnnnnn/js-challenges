import { PromiseRetry } from ".";

function test() {
    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(123)
            }, 1000)
        })

    };

    PromiseRetry(fetchData, 3)
        .then((data) => {
            // 成功获取数据
            console.log({ data });
        })
        .catch((error) => {
            // 请求失败或超时，并且重试多次依然失败
            console.error({ error });
        });
}

test()