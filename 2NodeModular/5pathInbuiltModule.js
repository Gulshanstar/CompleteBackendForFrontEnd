
// this is in-built module 
// ./ or ../ not using this so it is considered as built-in module.

const pathObj = require('path')
var filename = pathObj.parse(__filename)
console.log(filename)

