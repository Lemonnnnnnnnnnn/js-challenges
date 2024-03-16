import fs from "fs"
import path from "path"

const LEVEL_ARRAY = ["easy", "medium", "hard"]

function batchRenameDirectoryName(source: string) {
    const dirSource = fs.readdirSync(path.resolve(__dirname, source))

    dirSource.forEach(fileName => {
        const reg = /(.*?)-(.*)/
        const matchRes = fileName.match(reg)
        const fileLevel = matchRes?.[1]
        const remain = matchRes?.[2]
        if (LEVEL_ARRAY.indexOf(fileLevel ?? '') !== -1) {
            const newFileName = `${remain}-${fileLevel}`
            fs.renameSync(path.resolve(__dirname, source, fileName), path.resolve(__dirname, source, newFileName))
        }
    })
}

function batchLowerCaseDirectoryName(source: string) {
    const dirSource = fs.readdirSync(path.resolve(__dirname, source))
    dirSource.forEach(fileName => {
        const newFileName = stringUpcaseToUnderline(fileName) 
        fs.renameSync(path.resolve(__dirname, source, fileName), path.resolve(__dirname, source, newFileName))
    })
}

function stringUpcaseToUnderline(str: string) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (i === 0) {
            res += char.toLocaleLowerCase()
            continue
        }

        if (char.toLowerCase() === char) {
            res += char
        } else {
            res += `-${char.toLowerCase()}`
        }
    }
    return res
}

// batchRenameDirectoryName("../src/questions")
batchLowerCaseDirectoryName("../src/questions")