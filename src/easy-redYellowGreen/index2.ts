// 循环打印红灯3秒，绿灯1秒，黄灯2秒，不断交替重复亮灯
function red() {
    console.log("red");
}

function yellow() {
    console.log("yellow");
}

function green() {
    console.log("green");
}

function redYellowGreen() {
    red()
    setTimeout(() => {
        green()
        setTimeout(() => {
            yellow()
            setTimeout(() => {
                redYellowGreen()
            }, 2000)
        }, 1000)
    }, 3000)
}

redYellowGreen()