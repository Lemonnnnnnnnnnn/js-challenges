// 循环打印红灯3秒，绿灯1秒，黄灯2秒，不断交替重复亮灯
function red() {
    console.log("red")
    setTimeout(() => {
        green()
    }, 3000)
}

function green() {
    console.log("green")
    setTimeout(() => {
        yellow()
    }, 1000)
}

function yellow() {
    console.log("yellow")
    setTimeout(() => {
        red()
    }, 2000)
}

export function redYellowGreen() {
    red()
}

redYellowGreen()

