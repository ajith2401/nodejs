// modules
// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require("./3-utill")
const data = require("./5-alternative-way")
require("./6-mind-granded")
console.log("data",data)
sayHi(data.items[2])
sayHi(names.name1)
sayHi(names.name2)

sayHi(data.individualPerson.name)