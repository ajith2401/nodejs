const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('content/first.txt', 'utf-8')

const second = readFileSync('content/second.txt', 'utf-8')

console.log(first,second)

const txt = `hello
ajith 
how are you
are you okay?`

writeFileSync("./content/result.txt",txt ,{flag:'a'})