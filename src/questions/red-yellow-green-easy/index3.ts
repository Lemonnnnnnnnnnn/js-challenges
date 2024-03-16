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

function task(time: number, type: "red" | "yellow" | "green") {
    return new Promise((resolve, reject) => {
        console.log(type);
        setTimeout(() => {
            resolve(1);
        }, time);
    });
}

function redYellowGreen() {
    task(3000, "red")
        .then(() => task(1000, "green"))
        .then(() => task(2000, "yellow"))
        .then(() => redYellowGreen())
}

redYellowGreen()

async function redYellowGreen2() {
    await task(3000 ,"red")
    await task(1000 ,"green")
    await task(2000 ,"yellow")
    redYellowGreen2()
}

redYellowGreen2()