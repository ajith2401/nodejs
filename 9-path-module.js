
const path = require('path')

console.log(path.sep)

const filePATH = path.join("/content","subfolder","test.txt")

console.log(filePATH)

const baseName = path.basename(filePATH)
console.log(baseName)

const absolute = path.resolve(__dirname,"content","subfolder","test.txt")

console.log("absolute",absolute)